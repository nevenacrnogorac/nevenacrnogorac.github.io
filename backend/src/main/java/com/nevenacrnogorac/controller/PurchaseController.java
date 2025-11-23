package com.nevenacrnogorac.controller;

import com.nevenacrnogorac.dto.PurchaseRequest;
import com.nevenacrnogorac.entity.Purchase;
import com.nevenacrnogorac.repository.PurchaseRepository;
import com.nevenacrnogorac.service.EmailService;
import com.nevenacrnogorac.service.RecaptchaService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import jakarta.inject.Inject;

import java.time.LocalDateTime;

@Controller("/api/purchase")
public class PurchaseController {

    private final PurchaseRepository purchaseRepository;
    private final EmailService emailService;
    private final RecaptchaService recaptchaService;

    @Inject
    public PurchaseController(PurchaseRepository purchaseRepository, EmailService emailService,
            RecaptchaService recaptchaService) {
        this.purchaseRepository = purchaseRepository;
        this.emailService = emailService;
        this.recaptchaService = recaptchaService;
    }

    @Post
    public HttpResponse<Purchase> create(@Body PurchaseRequest request) {
        if (!recaptchaService.verify(request.recaptchaToken())) {
            return HttpResponse.badRequest();
        }

        Purchase purchase = new Purchase();
        purchase.setArtworkId(request.artworkId());
        purchase.setEmail(request.email());
        purchase.setMessage(request.message());
        purchase.setCreatedAt(LocalDateTime.now());

        Purchase savedPurchase = purchaseRepository.save(purchase);
        emailService.sendPurchaseNotification(savedPurchase);

        return HttpResponse.created(savedPurchase);
    }
}
