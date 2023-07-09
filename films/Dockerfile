FROM denoland/deno:alpine

EXPOSE 7002

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

CMD ["run", "-A", "./src/main.ts"]