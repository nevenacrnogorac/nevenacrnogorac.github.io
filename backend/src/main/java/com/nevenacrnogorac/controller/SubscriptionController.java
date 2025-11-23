package com.nevenacrnogorac.controller;

import com.nevenacrnogorac.dto.SubscriptionRequest;
import com.nevenacrnogorac.entity.Subscriber;
import com.nevenacrnogorac.repository.SubscriberRepository;
import com.nevenacrnogorac.service.RecaptchaService;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.annotation.Body;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;
import jakarta.inject.Inject;

import java.time.LocalDateTime;

@Controller("/api/subscribe")
public class SubscriptionController {

    private final SubscriberRepository subscriberRepository;
    private final RecaptchaService recaptchaService;

    @Inject
    public SubscriptionController(SubscriberRepository subscriberRepository, RecaptchaService recaptchaService) {
        this.subscriberRepository = subscriberRepository;
        this.recaptchaService = recaptchaService;
    }

    @Post
    public HttpResponse<Subscriber> create(@Body SubscriptionRequest request) {
        if (!recaptchaService.verify(request.recaptchaToken())) {
            return HttpResponse.badRequest();
        }

        Subscriber subscriber = new Subscriber();
        subscriber.setEmail(request.email());
        subscriber.setCreatedAt(LocalDateTime.now());
        return HttpResponse.created(subscriberRepository.save(subscriber));
    }
}
