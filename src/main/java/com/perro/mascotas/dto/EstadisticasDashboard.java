package com.perro.mascotas.dto;

import java.util.List;
import java.util.Map;

import com.perro.mascotas.model.Perro;
import lombok.Data;

@Data
public class EstadisticasDashboard {
    private Long totalPerros;
    private List<RazaEstadistica> perrosPorRaza;
    private List<EdadEstadistica> perrosPorEdad;
    private List<UbicacionEstadistica> perrosPorUbicacion;
    private List<Perro> perrosPorDuenio;
    
    @Data
    public static class RazaEstadistica {
        private String raza;
        private Long cantidad;
        private Double porcentaje;
    }
    
    @Data
    public static class EdadEstadistica {
        private String categoria;
        private Long cantidad;
        private String rango;
    }
    
    @Data
    public static class UbicacionEstadistica {
        private String ubicacion;
        private Long cantidad;
        private Double latitud;
        private Double longitud;
    }
}