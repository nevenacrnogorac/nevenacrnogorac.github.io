package com.nevenacrnogorac.controller;

import com.nevenacrnogorac.dto.SubscriptionRequest;
import com.nevenacrnogorac.service.RecaptchaService;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.test.annotation.MockBean;
import io.micronaut.test.extensions.junit5.annotation.MicronautTest;
import jakarta.inject.Inject;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@MicronautTest
public class SubscriptionControllerTest {

    @Inject
    @Client("/")
    HttpClient client;

    @Inject
    RecaptchaService recaptchaService;

    @MockBean(RecaptchaService.class)
    RecaptchaService mockRecaptchaService() {
        return mock(RecaptchaService.class);
    }

    @Test
    void subscribe_shouldReturnCreated_whenValidRequest() {
        when(recaptchaService.verify(anyString())).thenReturn(true);

        SubscriptionRequest request = new SubscriptionRequest("subscriber@example.com", "valid-token");
        HttpRequest<SubscriptionRequest> httpRequest = HttpRequest.POST("/api/subscribe", request);

        HttpResponse<Object> response = client.toBlocking().exchange(httpRequest);

        assertEquals(HttpStatus.CREATED, response.getStatus());
        verify(recaptchaService).verify("valid-token");
    }

    @Test
    void subscribe_shouldReturnBadRequest_whenRecaptchaInvalid() {
        when(recaptchaService.verify(anyString())).thenReturn(false);

        SubscriptionRequest request = new SubscriptionRequest("subscriber@example.com", "invalid-token");
        HttpRequest<SubscriptionRequest> httpRequest = HttpRequest.POST("/api/subscribe", request);

        try {
            client.toBlocking().exchange(httpRequest);
        } catch (io.micronaut.http.client.exceptions.HttpClientResponseException e) {
            assertEquals(HttpStatus.BAD_REQUEST, e.getStatus());
        }
    }
}
