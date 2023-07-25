<div align="center">
  <a href="https://github.com/luem2/star-wars-api-microservices">
    <img src="assets/star-wars-logo.png" alt="logo-star-wars" width="300px" />
  </a>

<h1 align="center">Star Wars API Microservices</h1>

</div>

## Sobre el Upskilling

Es una REST API de la serie _Star Wars_ en la cual podemos consumir información y crear sobre: `Characters, Films y Planets`. Haciendo este proyecto, pude aprender la arquitectura de microservicios. Lo que se hace aplicando esta arquitectura, es aislar cada servicio de la aplicación en un contenedor de docker, y cada uno de estos servicios, estará dentro de la misma red para que se puedan comunicar entre si. Los servicios que se corren son:

-   **Characters**: Servicio relacionado con Characters.
-   **Films**: Servicio relacionado con Films.
-   **Planets**: Servicio relacionado con Planets.
-   **MONGODB**: Contenedor que corre la base de datos Mongo.
-   **Database**: Es el servicio que se encarga de comunicarse con la base de datos.
-   **Gateway**: Es el Gateway o Puerta de enlace, en donde el usuario se conectará para interactuar con la aplicación.

## Tecnologias utilizadas

-   [![Typescript][typescript]][typescript-url]
-   [![Deno][deno]][deno-url]
-   [![Oak][oak]][oak-url]
-   [![Express][express]][express-url]
-   [![MongoDB][mongodb]][mongodb-url]
-   [![Mongoose][mongoose]][mongoose-url]
-   [![Docker][docker]][docker-url]

## Correr el proyecto

### Requisito previo (Docker instalado)

Es necesario tener [docker](https://docs.docker.com/engine/install) y [docker compose](https://docs.docker.com/compose) instalados. Asegurese de tenerlos instalados, siga la guia de instalación de la página oficial.

Revisa si se han instalado correctamente, corra los siguientes comandos:
<br />
`docker --version`
<br />
`docker compose version`

Output:

```sh
- docker --version
Docker version 23.0.1, build a5ee5b1

- docker compose version
Docker Compose version v2.16.0
```

En la raíz del proyecto `star-wars-api-microservices` ejecute el siguiente comando:

```sh
docker compose up -d --build
```

## ENDPOINTS:

En donde se require el `id`, puede ser de valor numérico y si es una instancia del modelo creado por el usuario, el id es de tipo `uuid`.
El primer `GET` es para obtener todas las instancias del modelo, y el segundo `GET` es para obtener una en específico.
El `POST` es para crear una instancia del modelo.
El `DELETE` es para eliminar una instancia específica del modelo.

### Characters:

`GET: https://localhost:7000/characters` <br/>
`GET: https://localhost:7000/characters/:id` <br/>
`POST: https://localhost:7000/characters` <br/>
`DELETE: https://localhost:7000/characters/:id`

### Films:

`GET: https://localhost:7000/films` <br/>
`GET: https://localhost:7000/films/:id` <br/>
`POST: https://localhost:7000/films` <br/>
`DELETE: https://localhost:7000/films/:id`

### Planets:

`GET: https://localhost:7000/planets` <br/>
`GET: https://localhost:7000/planets/:id` <br/>
`POST: https://localhost:7000/planets` <br/>
`DELETE: https://localhost:7000/planets/:id`

## Contacto

-   Linkedin: [https://linkedin.com/in/lucianopinol](https://linkedin.com/in/lucianopinol)
-   Telegram: [@Luem02](https://t.me/luem02)
-   Email: lucianoepinol@gmail.com

<!-- Technologies Shields/Badges and their documentation URL -->

[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[deno]: https://img.shields.io/badge/Deno-464647?style=for-the-badge&logo=deno&logoColor=white
[deno-url]: https://deno.land/
[oak]: https://img.shields.io/badge/oak-464647?style=for-the-badge&logo=gumtree&logoColor=%2361DAFB
[oak-url]: https://deno.land/x/oak@v12.5.0
[express]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[express-url]: https://expressjs.com/es/
[mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[mongoose]: https://img.shields.io/badge/Mongoose-EE0000?style=for-the-badge&logo=databricks&logoColor=white
[mongoose-url]: https://mongoosejs.com/
[docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docker.com
