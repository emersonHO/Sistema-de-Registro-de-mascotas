package com.perro.mascotas.service;

import org.springframework.stereotype.Service;

import com.perro.mascotas.model.Perro;
import com.perro.mascotas.repository.PerroRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class PerroService {

    private final PerroRepository repo;

    public Flux<Perro> listar() {
        return repo.findAll();
    }

    public Mono<Perro> registrar(Perro h) {
        return repo.save(h);
    }

    public Mono<Void> eliminar(Long id) {
        return repo.deleteById(id);
    }

    public Mono<Perro> obtenerPorId(Long id) {
        return repo.findById(id);
    }
}
