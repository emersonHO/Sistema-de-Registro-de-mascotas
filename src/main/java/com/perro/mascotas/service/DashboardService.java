package com.perro.mascotas.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.perro.mascotas.dto.EstadisticasDashboard;
import com.perro.mascotas.model.Perro;
import com.perro.mascotas.repository.PerroRepository;

import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final PerroRepository perroRepository;

    public Mono<EstadisticasDashboard> obtenerEstadisticas() {
        return perroRepository.findAll()
            .collectList()
            .map(this::calcularEstadisticas);
    }

    public Mono<List<Perro>> obtenerPerrosPorDuenio(String duenio) {
        return perroRepository.findAll()
            .filter(perro -> duenio.equalsIgnoreCase(perro.getDuenio()))
            .collectList();
    }

    private EstadisticasDashboard calcularEstadisticas(List<Perro> perros) {
        EstadisticasDashboard estadisticas = new EstadisticasDashboard();
        
        // Total de perros
        estadisticas.setTotalPerros((long) perros.size());
        
        // Estadísticas por raza
        Map<String, Long> perrosPorRaza = perros.stream()
            .collect(Collectors.groupingBy(
                perro -> perro.getRaza() != null ? perro.getRaza() : "Sin raza",
                Collectors.counting()
            ));
        
        List<EstadisticasDashboard.RazaEstadistica> razaStats = new ArrayList<>();
        perrosPorRaza.forEach((raza, cantidad) -> {
            EstadisticasDashboard.RazaEstadistica stat = new EstadisticasDashboard.RazaEstadistica();
            stat.setRaza(raza);
            stat.setCantidad(cantidad);
            stat.setPorcentaje((double) cantidad / perros.size() * 100);
            razaStats.add(stat);
        });
        estadisticas.setPerrosPorRaza(razaStats);
        
        // Estadísticas por edad
        List<EstadisticasDashboard.EdadEstadistica> edadStats = new ArrayList<>();
        
        // Categorías de edad
        long cachorros = perros.stream()
            .filter(p -> p.getEdad() != null && p.getEdad() <= 2)
            .count();
        
        long jovenes = perros.stream()
            .filter(p -> p.getEdad() != null && p.getEdad() > 2 && p.getEdad() <= 7)
            .count();
        
        long adultos = perros.stream()
            .filter(p -> p.getEdad() != null && p.getEdad() > 7 && p.getEdad() <= 12)
            .count();
        
        long senior = perros.stream()
            .filter(p -> p.getEdad() != null && p.getEdad() > 12)
            .count();
        
        long sinEdad = perros.stream()
            .filter(p -> p.getEdad() == null)
            .count();
        
        // Agregar estadísticas de edad
        agregarEstadisticaEdad(edadStats, "Cachorros (0-2 años)", cachorros, "0-2");
        agregarEstadisticaEdad(edadStats, "Jóvenes (3-7 años)", jovenes, "3-7");
        agregarEstadisticaEdad(edadStats, "Adultos (8-12 años)", adultos, "8-12");
        agregarEstadisticaEdad(edadStats, "Senior (13+ años)", senior, "13+");
        agregarEstadisticaEdad(edadStats, "Sin edad registrada", sinEdad, "N/A");
        
        estadisticas.setPerrosPorEdad(edadStats);
        
        // Estadísticas por ubicación
        Map<String, Long> perrosPorUbicacion = perros.stream()
            .collect(Collectors.groupingBy(
                perro -> perro.getUbicacion() != null ? perro.getUbicacion() : "Sin ubicación",
                Collectors.counting()
            ));
        
        List<EstadisticasDashboard.UbicacionEstadistica> ubicacionStats = new ArrayList<>();
        perrosPorUbicacion.forEach((ubicacion, cantidad) -> {
            EstadisticasDashboard.UbicacionEstadistica stat = new EstadisticasDashboard.UbicacionEstadistica();
            stat.setUbicacion(ubicacion);
            stat.setCantidad(cantidad);
            // Coordenadas simuladas para el mapa
            stat.setLatitud(generarLatitudSimulada(ubicacion));
            stat.setLongitud(generarLongitudSimulada(ubicacion));
            ubicacionStats.add(stat);
        });
        estadisticas.setPerrosPorUbicacion(ubicacionStats);
        
        return estadisticas;
    }
    
    private void agregarEstadisticaEdad(List<EstadisticasDashboard.EdadEstadistica> stats, 
                                       String categoria, Long cantidad, String rango) {
        if (cantidad > 0) {
            EstadisticasDashboard.EdadEstadistica stat = new EstadisticasDashboard.EdadEstadistica();
            stat.setCategoria(categoria);
            stat.setCantidad(cantidad);
            stat.setRango(rango);
            stats.add(stat);
        }
    }
    
    private Double generarLatitudSimulada(String ubicacion) {
        // Generar coordenadas simuladas basadas en el hash de la ubicación
        int hash = ubicacion.hashCode();
        return -12.0464 + (hash % 100) * 0.01; // Aproximadamente Lima, Perú
    }
    
    private Double generarLongitudSimulada(String ubicacion) {
        int hash = ubicacion.hashCode();
        return -77.0428 + (hash % 100) * 0.01; // Aproximadamente Lima, Perú
    }
}