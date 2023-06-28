FROM denoland/deno:alpine

EXPOSE 7000

WORKDIR /app

ADD . .

RUN deno cache main.ts

CMD ["run", "--allow-net", "./src/main.ts"]