package com.perro.pet.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.perro.pet.model.Perro;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface PerroRepository extends ReactiveCrudRepository<Perro, Long> {
    Flux<Perro> findByUsuarioId(Long usuarioId);
    Mono<Perro> findByIdAndUsuarioId(Long id, Long usuarioId);
}