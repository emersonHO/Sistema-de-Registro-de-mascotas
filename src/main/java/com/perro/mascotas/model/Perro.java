package com.perro.mascotas.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("perros")
public class Perro {
    @Id
    private Long id;
    private String nombre;
    private String raza;
    private String tamano;
    private String ubicacion;
    private String comportamiento;
    private String duenio;
    private Integer edad;
    private Long usuarioId;
}
