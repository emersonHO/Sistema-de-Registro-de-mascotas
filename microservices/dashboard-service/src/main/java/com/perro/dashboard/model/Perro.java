package com.perro.dashboard.model;

import lombok.Data;

@Data
public class Perro {
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