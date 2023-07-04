<div align="center">
  <a href="https://github.com/luem2/star-wars-api-microservices">
    <img src="assets/star-wars-logo.png" alt="logo-star-wars" width="300px" />
  </a>

<h1 align="center">Star Wars API Microservices</h1>

</div>

## Sobre el Upskilling

Haciendo este proyecto, pude aprender la arquitectura de microservicios, base de datos NoSQL (**MongoDB**) interactuando con un ODM (**TypeORM**). Implemente el Runtime de **Deno**

-   **Arquitectura de microservicios**: Esta consiste basicamente en modularizar la aplicacion y que corra su servicio correspondiente...
-   **asda**

## Tecnologias utilizadas

-   [![Typescript][typescript]][typescript-url]
-   [![Deno][deno]][deno-url]
-   [![Oak][oak]][oak-url]
-   [![MongoDB][mongodb]][mongodb-url]
-   [![TypeORM][typeorm]][typeorm-url]
-   [![Docker][docker]][docker-url]

## Correr el proyecto

### Requisito previo (Docker instalado)

It is necessary to have [docker](https://docs.docker.com/engine/install/) and [docker compose](https://docs.docker.com/compose/) installed. Make sure you have them installed, follow the installation guide on the official page.

-   Check if they are _installed_, run the following commands to see their version:
    <br />
    `docker --version`
    <br />
    `docker compose version`

    Output example:

    ```sh
    - docker --version
    Docker version 23.0.1, build a5ee5b1

    - docker compose version
    Docker Compose version v2.16.0
    ```

1. **In the root of the project folder `star-wars-api-microservices`** run the following command, and wait for the installation to finish:

    ```sh
    docker compose build
    ```

2. **Run the following command** to pull up all the services described in the docker-compose.yml file.

    ```sh
    docker compose up -d
    ```

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
[mongodb]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://www.mongodb.com/
[typeorm]: https://img.shields.io/badge/Typeorm-EE0000?style=for-the-badge&logo=databricks&logoColor=white
[typeorm-url]: https://typeorm.io/
[docker]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://docker.com
