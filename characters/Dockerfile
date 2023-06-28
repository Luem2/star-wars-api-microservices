FROM denoland/deno:alpine

EXPOSE 7001

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

CMD ["run", "--allow-net", "./src/main.ts"]