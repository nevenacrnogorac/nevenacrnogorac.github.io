package com.nevenacrnogorac.service;

import com.nevenacrnogorac.entity.Purchase;
import io.micronaut.email.Email;
import io.micronaut.email.EmailSender;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.function.Consumer;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class EmailServiceTest {

    @Mock
    private EmailSender<Email, ?> emailSender;

    @InjectMocks
    private EmailService emailService;

    @Test
    void sendPurchaseNotification_shouldSendEmail() {
        Purchase purchase = new Purchase();
        purchase.setId(1L);
        purchase.setArtworkId(101L);
        purchase.setEmail("test@example.com");
        purchase.setMessage("Interested in this.");
        purchase.setCreatedAt(LocalDateTime.now());

        emailService.sendPurchaseNotification(purchase);

        verify(emailSender).send(any(Email.Builder.class));
    }
}
