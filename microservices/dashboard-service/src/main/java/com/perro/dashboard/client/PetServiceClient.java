package com.perro.dashboard.client;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;

import com.perro.dashboard.model.Perro;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;

@Component
@RequiredArgsConstructor
public class PetServiceClient {
    
    private final WebClient.Builder webClientBuilder;
    
    public Flux<Perro> listarPerros(String authHeader) {
        return webClientBuilder.build()
                .get()
                .uri("http://pet-service/api/perros")
                .header("Authorization", authHeader)
                .retrieve()
                .bodyToFlux(Perro.class);
    }
}