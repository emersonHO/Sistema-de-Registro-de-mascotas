package com.perro.auth.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.perro.auth.model.Usuario;

import reactor.core.publisher.Mono;

@Repository
public interface UsuarioRepository extends ReactiveCrudRepository<Usuario, Long> {
    Mono<Usuario> findByEmail(String email);
}