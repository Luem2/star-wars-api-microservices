FROM denoland/deno:alpine

ENV DOCKER=true

EXPOSE 7000

WORKDIR /app

ADD . .

RUN deno cache main.ts

CMD ["run", "-A", "main.ts"]