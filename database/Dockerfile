FROM denoland/deno:alpine

EXPOSE 7004

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

CMD ["run", "-A", "-c", "./tsconfig.json", "./src/main.ts"]