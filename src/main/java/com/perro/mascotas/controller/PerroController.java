package com.perro.mascotas.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
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
    public Flux<Perro> listar(@RequestHeader("Authorization") String authHeader) {
        Long usuarioId = extraerUsuarioId(authHeader);
        return service.listarPorUsuario(usuarioId);
    }

    @PostMapping
    public Mono<Perro> registrar(@RequestBody Perro perro, @RequestHeader("Authorization") String authHeader) {
        Long usuarioId = extraerUsuarioId(authHeader);
        perro.setUsuarioId(usuarioId);
        return service.registrar(perro);
    }

    @PutMapping("/{id}")
    public Mono<Perro> actualizar(@PathVariable Long id, @RequestBody Perro perro, @RequestHeader("Authorization") String authHeader) {
        Long usuarioId = extraerUsuarioId(authHeader);
        return service.actualizar(id, usuarioId, perro);
    }

    @GetMapping("/{id}")
    public Mono<Void> eliminar(@PathVariable Long id, @RequestHeader("Authorization") String authHeader) {
        Long usuarioId = extraerUsuarioId(authHeader);
        return service.eliminarPorUsuario(id, usuarioId);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> eliminar(@PathVariable Long id) {
        return service.eliminar(id);
    }
    
    private Long extraerUsuarioId(String authHeader) {
        // authHeader: "Bearer fake-jwt-token-123"
        if (authHeader == null || !authHeader.startsWith("Bearer fake-jwt-token-")) {
            throw new RuntimeException("Token inválido");
        }
        String idStr = authHeader.replace("Bearer fake-jwt-token-", "").trim();
        return Long.parseLong(idStr);
    }
}
