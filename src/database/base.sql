use distribuido;


create table producto(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    precio INT(10) NOT NULL,
    cantidad INT(3) NOT NULL
);
create table hoteles(
    id VARCHAR(100) PRIMARY KEY,
    ubicacion VARCHAR(100) NOT NULL,
    numero_habitaciones INT(100) NOT NULL,
);

SHOW TABLES;

DESCRIBE producto;
insert into hoteles values('1','Barranquilla',100);
insert into hoteles values('2','Cartagena',200);
insert into hoteles values('3','Santa Marta',150);

INSERT INTO producto(nombre,precio,cantidad) VALUES ('Toallas',1500,15);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Botella de agua',4000,20);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Coca-Cola',6000,24);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('M&M',4000,30);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Cafe',2000,60);

INSERT INTO producto(nombre,precio,cantidad) VALUES ('Sobres',400,60);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Colores',5000,20);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('MicroPuntas',1700,15);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Resna de papel',18000,15);
INSERT INTO producto(nombre,precio,cantidad) VALUES ('Pliego de Cartulina',900,32);


