package com.perro.auth.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.perro.auth.model.Usuario;
import com.perro.auth.service.UsuarioService;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UsuarioService usuarioService;

    @PostMapping("/login")
    public Mono<Map<String, String>> login(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");

        return usuarioService.findByEmail(email)
                .flatMap(usuario -> {
                    if (usuario.getPassword().equals(password)) {
                        Map<String, String> response = new HashMap<>();
                        response.put("token", "fake-jwt-token-" + usuario.getId());
                        return Mono.just(response);
                    } else {
                        return Mono.error(new RuntimeException("Credenciales inválidas"));
                    }
                })
                .switchIfEmpty(Mono.error(new RuntimeException("Usuario no encontrado")));
    }

    @PostMapping("/register")
    public Mono<Map<String, String>> register(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String password = body.get("password");
        
        return usuarioService.findByEmail(email)
            .flatMap(u -> Mono.<Map<String, String>>error(new RuntimeException("El correo ya está registrado")))
            .switchIfEmpty(
                Mono.defer(() -> {
                    Usuario usuario = new Usuario();
                    usuario.setEmail(email);
                    usuario.setPassword(password);
                    return usuarioService.save(usuario);
                })
                .map(usuario -> {
                    Map<String, String> response = new HashMap<>();
                    response.put("token", "fake-jwt-token-" + usuario.getId());
                    return response;
                })
            );
    }
}