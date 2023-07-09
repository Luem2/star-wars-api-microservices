FROM denoland/deno:alpine

EXPOSE 7001

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

CMD ["run", "-A", "./src/main.ts"]