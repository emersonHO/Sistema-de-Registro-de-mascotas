package com.perro.mascotas.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.perro.mascotas.model.Usuario;

import reactor.core.publisher.Mono;

public interface UsuarioRepository extends ReactiveCrudRepository<Usuario, Long> {
    Mono<Usuario> findByEmail(String email);
}
