package com.perro.auth.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("usuarios")
public class Usuario {

    @Id
    private Long id;

    @Column("email")
    private String email;

    @Column("password")
    private String password;
}