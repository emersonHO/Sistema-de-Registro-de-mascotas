package com.perro.pet.service;

import org.springframework.stereotype.Service;

import com.perro.pet.model.Perro;
import com.perro.pet.repository.PerroRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PerroService {
    
    private final PerroRepository repository;
    
    public Flux<Perro> listarPorUsuario(Long usuarioId) {
        return repository.findByUsuarioId(usuarioId);
    }
    
    public Mono<Perro> registrar(Perro perro) {
        return repository.save(perro);
    }
    
    public Mono<Perro> actualizar(Long id, Long usuarioId, Perro perro) {
        return repository.findByIdAndUsuarioId(id, usuarioId)
                .flatMap(existingPerro -> {
                    perro.setId(id);
                    perro.setUsuarioId(usuarioId);
                    return repository.save(perro);
                });
    }
    
    public Mono<Void> eliminarPorUsuario(Long id, Long usuarioId) {
        return repository.findByIdAndUsuarioId(id, usuarioId)
                .flatMap(perro -> repository.deleteById(id))
                .then();
    }
    
    public Mono<Perro> obtenerPorId(Long id, Long usuarioId) {
        return repository.findByIdAndUsuarioId(id, usuarioId);
    }
    
    public Mono<Void> eliminar(Long id) {
        return repository.deleteById(id);
    }
}