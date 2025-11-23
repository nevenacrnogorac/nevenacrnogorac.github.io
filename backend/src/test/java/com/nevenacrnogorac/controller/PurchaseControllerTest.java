package com.nevenacrnogorac.controller;

import com.nevenacrnogorac.dto.PurchaseRequest;
import com.nevenacrnogorac.entity.Purchase;
import com.nevenacrnogorac.entity.Purchase;
import com.nevenacrnogorac.repository.PurchaseRepository;
import com.nevenacrnogorac.service.EmailService;
import com.nevenacrnogorac.service.RecaptchaService;
import io.micronaut.context.annotation.Replaces;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.annotation.MockBean;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@MicronautTest
public class PurchaseControllerTest {

    @Inject
    @Client("/")
    HttpClient client;

    @Inject
    RecaptchaService recaptchaService;

    @Inject
    EmailService emailService;

    @Inject
    PurchaseRepository purchaseRepository;

    @MockBean(RecaptchaService.class)
    RecaptchaService mockRecaptchaService() {
        return mock(RecaptchaService.class);
    }

    @MockBean(EmailService.class)
    EmailService mockEmailService() {
        return mock(EmailService.class);
    }

    @MockBean(PurchaseRepository.class)
    PurchaseRepository mockPurchaseRepository() {
        return mock(PurchaseRepository.class);
    }

    @Test
    void createPurchase_shouldReturnCreated_whenValidRequest() {
        when(recaptchaService.verify(anyString())).thenReturn(true);
        doNothing().when(emailService).sendPurchaseNotification(any());
        when(purchaseRepository.save(any(Purchase.class))).thenAnswer(invocation -> {
            Purchase p = invocation.getArgument(0);
            p.setId(1L);
            return p;
        });

        // Reset mock state if needed, but for a new test instance it should be fresh if
        // context reloads or bean is prototype.

        PurchaseRequest request = new PurchaseRequest(101L, "test@example.com", "Hello", "valid-token");
        HttpRequest<PurchaseRequest> httpRequest = HttpRequest.POST("/api/purchase", request);

        try {
            HttpResponse<Object> response = client.toBlocking().exchange(httpRequest);
            assertEquals(HttpStatus.CREATED, response.getStatus());
        } catch (io.micronaut.http.client.exceptions.HttpClientResponseException e) {
            System.err.println("Test failed with status: " + e.getStatus());
            System.err.println("Response body: " + e.getResponse().getBody(String.class).orElse("null"));
            throw e;
        }
        verify(recaptchaService).verify("valid-token");
        verify(emailService).sendPurchaseNotification(any());
    }

    @Test
    void createPurchase_shouldReturnBadRequest_whenRecaptchaInvalid() {
        when(recaptchaService.verify(anyString())).thenReturn(false);

        PurchaseRequest request = new PurchaseRequest(101L, "test@example.com", "Hello", "invalid-token");
        HttpRequest<PurchaseRequest> httpRequest = HttpRequest.POST("/api/purchase", request);

        // Expecting 400 Bad Request
        try {
            client.toBlocking().exchange(httpRequest);
        } catch (io.micronaut.http.client.exceptions.HttpClientResponseException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
        }
    }
}
