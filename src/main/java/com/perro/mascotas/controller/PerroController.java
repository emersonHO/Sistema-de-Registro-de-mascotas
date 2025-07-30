package com.perro.mascotas.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.mascotas.model.Perro;
import com.perro.mascotas.service.PerroService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;


@RestController
@RequestMapping("/api/perros")
@RequiredArgsConstructor
public class PerroController {
    
    private final PerroService service;


    @GetMapping
    public Flux<Perro> listar() {
        return service.listar();
    }

    @PostMapping
    public Mono<Perro> registrar(@RequestBody Perro perro) {
        return service.registrar(perro);
    }

    @GetMapping("/{id}")
    public Mono<Perro> buscar(@PathVariable Long id) {
        return service.obtenerPorId(id);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> eliminar(@PathVariable Long id) {
        return service.eliminar(id);
    }
}
