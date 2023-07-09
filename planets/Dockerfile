FROM denoland/deno:alpine

ENV DOCKER=true

EXPOSE 7003

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

CMD ["run", "-A", "./src/main.ts"]