CREATE DATABASE ng_noticias_db; /*Crea la base de datos*/

USE ng_noticias_db; /*usa la base de datos que hemos creado*/

CREATE TABLE noticias(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(255),
    titulo VARCHAR(255),
    subtitulo VARCHAR(255),
    seccion VARCHAR(255),
    autor VARCHAR(50),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contenido MEDIUMTEXT
); /*Crea una tabla para contener la informacion de las noticias*/

CREATE TABLE comentarios(

    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    noticiaId VARCHAR(255) NOT NULL,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    comentario MEDIUMTEXT
); /*Crea una tabla para contener la informacion de los comentarios*/

DESCRIBE noticias;
DESCRIBE comentarios;
