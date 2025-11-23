package com.nevenacrnogorac.service;

import io.micronaut.context.annotation.Value;
import io.micronaut.core.type.Argument;
import io.micronaut.http.HttpRequest;
import io.micronaut.http.client.HttpClient;
import io.micronaut.http.client.annotation.Client;
import io.micronaut.serde.annotation.Serdeable;
import jakarta.inject.Singleton;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import reactor.core.publisher.Mono;

import java.util.Map;

@Singleton
public class RecaptchaService {

    private static final Logger LOG = LoggerFactory.getLogger(RecaptchaService.class);

    @Value("${recaptcha.secret}")
    private String secret;

    @Value("${recaptcha.url}")
    private String url;

    private final HttpClient httpClient;

    public RecaptchaService(@Client("https://www.google.com") HttpClient httpClient) {
        this.httpClient = httpClient;
    }

    public boolean verify(String token) {
        if (token == null || token.isEmpty()) {
            return false;
        }

        try {
            String verifyUrl = url + "?secret=" + secret + "&response=" + token;
            RecaptchaResponse response = Mono
                    .from(httpClient.retrieve(HttpRequest.POST(verifyUrl, ""), RecaptchaResponse.class)).block();
            return response != null && response.success();
        } catch (Exception e) {
            LOG.error("Error verifying reCAPTCHA", e);
            return false;
        }
    }

    @Serdeable
    public record RecaptchaResponse(boolean success, String challenge_ts, String hostname,
            Map<String, String> errorCodes) {
    }
}
