package com.nevenacrnogorac.controller;

import io.micronaut.context.annotation.Value;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.micronaut.http.server.types.files.SystemFile;

import java.io.File;
import java.util.Optional;

@Controller("/images")
public class ImageController {

    @Value("${gallery.images.path}")
    private String imagesPath;

    @Get("/{filename}")
    public Optional<SystemFile> getImage(@PathVariable String filename) {
        File file = new File(imagesPath, filename);
        if (file.exists() && file.isFile()) {
            return Optional.of(new SystemFile(file, MediaType.of(MediaType.IMAGE_JPEG)));
        }
        return Optional.empty();
    }
}
