CREATE DATABASE ng_noticias_db;

USE ng_noticias_db;

CREATE TABLE noticias(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255),
    titulo VARCHAR(255),
    subtitulo VARCHAR(255),
    seccion VARCHAR(255),
    autor VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contenido MEDIUMTEXT
);

DESCRIBE noticias;
