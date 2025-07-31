package com.perro.mascotas.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.perro.mascotas.model.Perro;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface PerroRepository extends ReactiveCrudRepository<Perro, Long> {
    Flux<Perro> findAllByUsuarioId(Long usuarioId);
    Mono<Perro> findByIdAndUsuarioId(Long id, Long usuarioId);
}
