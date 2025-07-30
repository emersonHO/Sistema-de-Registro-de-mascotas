package com.perro.mascotas.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;

import com.perro.mascotas.model.Perro;

public interface PerroRepository extends ReactiveCrudRepository<Perro, Long> {
}
