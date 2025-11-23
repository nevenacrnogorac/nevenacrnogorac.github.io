package com.nevenacrnogorac.dto;

import io.micronaut.serde.annotation.Serdeable;

@Serdeable
public record SubscriptionRequest(String email, String recaptchaToken) {
}
