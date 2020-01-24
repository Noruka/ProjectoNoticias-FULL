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

CREATE TABLE comentarios(

    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    noticiaId VARCHAR(255) NOT NULL,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    comentario MEDIUMTEXT
);

DESCRIBE noticias;
DESCRIBE comentarios;
