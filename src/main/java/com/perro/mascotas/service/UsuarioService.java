package com.perro.mascotas.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.perro.mascotas.model.Usuario;
import com.perro.mascotas.repository.UsuarioRepository;

import reactor.core.publisher.Mono;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Mono<Usuario> findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public Mono<Usuario> save(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
