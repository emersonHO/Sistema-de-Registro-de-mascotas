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

    public Flux<Perro> listarPorUsuario(Long usuarioId) {
        return repo.findAllByUsuarioId(usuarioId);
    }

    public Mono<Perro> actualizar(Long id, Long usuarioId, Perro nuevoPerro) {
        return repo.findByIdAndUsuarioId(id, usuarioId)
            .flatMap(perro -> {
                perro.setNombre(nuevoPerro.getNombre());
                perro.setRaza(nuevoPerro.getRaza());
                perro.setTamano(nuevoPerro.getTamano());
                perro.setUbicacion(nuevoPerro.getUbicacion());
                perro.setComportamiento(nuevoPerro.getComportamiento());
                perro.setDuenio(nuevoPerro.getDuenio());
                perro.setEdad(nuevoPerro.getEdad());
                return repo.save(perro);
            });
    }

    public Mono<Void> eliminarPorUsuario(Long id, Long usuarioId) {
        return repo.findByIdAndUsuarioId(id, usuarioId)
            .flatMap(perro -> repo.deleteById(perro.getId()));
    }
}
