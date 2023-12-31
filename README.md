# Discord clone

Este proyecto es un clon de Discord creado utilizando varias tecnologías modernas para el desarrollo web, incluyendo Next.js, React, Socket.io, Prisma, TailwindCSS, MySQL y Clerk para la autenticación del usuario. También se integra con PlanetScale para mejorar la gestión de la base de datos.

## Despliegue

Instala las dependencias del proyecto con el siguiente comando:

```bash
npm i 
```

Para desplegar la aplicación el siguiente comando:

```bash
npm run dev
```

Este comando iniciará el servidor de desarrollo, y podrás acceder a la aplicación en tu navegador ingresando a <http://localhost:3000>. Asegúrate de haber configurado correctamente las variables de entorno necesarias antes de ejecutar la aplicación

## Tecnologías Utilizadas

- Next.js: Framework de React para aplicaciones web.
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Clerk : Para la autentificación del usuario.
- Socket.io: Biblioteca para la comunicación en tiempo real entre clientes y servidor.
- Prisma: ORM (Object-Relational Mapping) para la comunicación con bases de datos.
- TailwindCSS: Framework de diseño de CSS utilizable con facilidad.
- MySQL: Sistema de gestión de bases de datos relacional.
- PlanetScale: Herramienta integrada para mejorar la gestión de la base de datos distribuida (version gratuita).

## Base de datos

### Pasos para Generar la Base de Datos con Prisma

1. **Generar los Imports Necesarios:**
   Ejecuta el siguiente comando para generar los archivos de importación necesarios para tu proyecto:

    ```bash
    npx prisma generate 
    ```

   Este comando asegurará que todas las dependencias y configuraciones de Prisma estén actualizadas.

2. **Generar la Base de Datos:**
   Una vez que se hayan generado los imports, ejecuta el siguiente comando para crear o actualizar la base de datos según las especificaciones del modelo:

    ```bash
    npx prisma db push  
    ```

   Este comando se encargará de sincronizar tu modelo de datos con la base de datos, aplicando cualquier cambio necesario.

Recuerda ejecutar estos comandos cada vez que realices cambios en tu modelo de datos.
Para explorar la base de datos de una manera mas amigable , puedes utilizar Prisma Studio ejecutando el siguiente comando:

```bash
npx prisma studio 
```

Este comando abrirá Prisma Studio, una interfaz gráfica que te permite visualizar y administrar los datos de tu base de datos de una manera más intuitiva. Al ejecutar este comando, se iniciará un servidor local y se abrirá tu navegador predeterminado en la dirección <http://localhost:5555>.

<!-- TODO: Agregar variables de ambiente que son necesarias para desplegar la aplicación (cuidado con las variables que son privadas como por ejemplo CLERK_SECRET_KEY,y la conex a bbdd) -->