FROM denoland/deno:alpine

EXPOSE 7004

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

RUN deno run --allow-net --allow-read ./src/utils/seed.ts

CMD ["run", "--allow-net", "./src/main.ts"]