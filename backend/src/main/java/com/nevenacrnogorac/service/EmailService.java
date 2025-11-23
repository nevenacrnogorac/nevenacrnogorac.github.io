package com.nevenacrnogorac.service;

import com.nevenacrnogorac.entity.Purchase;
import io.micronaut.email.Email;
import io.micronaut.email.EmailSender;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Singleton
public class EmailService {

    private static final Logger LOG = LoggerFactory.getLogger(EmailService.class);
    private final EmailSender<Email, ?> emailSender;

    @io.micronaut.context.annotation.Value("${mail.from}")
    String fromEmail;

    public EmailService(EmailSender<Email, ?> emailSender) {
        this.emailSender = emailSender;
    }

    public void sendPurchaseNotification(Purchase purchase) {
        String subject = "New Purchase Inquiry: " + purchase.getArtworkId();
        String body = "You have a new purchase inquiry!\n\n" +
                "Artwork ID: " + purchase.getArtworkId() + "\n" +
                "Email: " + purchase.getEmail() + "\n" +
                "Message: " + purchase.getMessage() + "\n" +
                "Time: " + purchase.getCreatedAt();

        try {
            emailSender.send(Email.builder()
                    .from(fromEmail)
                    .to(fromEmail)
                    .subject(subject)
                    .body(body));
            LOG.info("Purchase notification sent for artwork ID: {}", purchase.getArtworkId());
        } catch (Exception e) {
            LOG.error("Failed to send purchase notification email", e);
        }
    }
}
