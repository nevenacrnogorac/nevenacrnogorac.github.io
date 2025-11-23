package com.nevenacrnogorac.dto;

import io.micronaut.serde.annotation.Serdeable;

@Serdeable
public record PurchaseRequest(Long artworkId, String email, String message, String recaptchaToken) {
}
