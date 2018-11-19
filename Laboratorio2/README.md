# Frontend para el curso de Programación Web 

Este repositorio consiste en un ejemplo de frontend desarrollado en Angular 6 para el manejo y la gestión de información de jugadores de un equipo de béisbol. 

## Servidor de Desarrollo

Para propósitos de desarrollo, necesitarás tener instalado node.js y el último cliente de angular. Aquí podrás encontrar una guía con los pasos para poder ejecutar el proyecto. 

### Instalación de Node

[Node] Puedes dirigirte al siguiente link para la instalación de node http://nodejs.org/.
Al finalizar la instalación, podrás correr los siguientes comandos para comprobar que la instalación se realizó de manera correcta. 

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

### Clonar el repositorio

Puedes utilizar el siguiente comando para clonar este repositorio.

```shell
git clone https://github.com/bryanforbes/intern-angular
```

### Instalación de dependencias con npm

Install the `npm` packages described in the `package.json` and verify that it works:
Debes instalar los paquetes `npm` descritos en el archivo `package.json` 
```shell
npm install
```

Una vez tengas instalado node.js, el cliente de angular, y las dependencias del proyecto (npm), podrás ejecutar el comando `ng serve --open` y luego navegar en tu browser a la ruta `http://localhost:4200`. La aplicación se actualizará automáticamente cada vez que realices una actualización en los archivos del código fuente. 

## Realizar build para producción

Cuando hayas finalizado de realizar tus cambios, y quieras realizar un build para colocar en producción, puedes ejecutar el comando `ng build --prod`. 
