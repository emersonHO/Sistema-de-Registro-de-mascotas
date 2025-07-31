package com.perro.auth.service;

import org.springframework.stereotype.Service;

import com.perro.auth.model.Usuario;
import com.perro.auth.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class UsuarioService {
    
    private final UsuarioRepository repository;
    
    public Mono<Usuario> findByEmail(String email) {
        return repository.findByEmail(email);
    }
    
    public Mono<Usuario> save(Usuario usuario) {
        return repository.save(usuario);
    }
}