CREATE TABLE IF NOT EXISTS perros (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    raza VARCHAR(255),
    tamano VARCHAR(50),
    ubicacion VARCHAR(255),
    comportamiento TEXT,
    duenio VARCHAR(255),
    edad INT,
    usuario_id BIGINT NOT NULL
);