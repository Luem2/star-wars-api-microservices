FROM denoland/deno:alpine

EXPOSE 7004

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

RUN deno run -A -c ./tsconfig.json ./src/utils/seed.ts

CMD ["run", "-A", "-c", "./tsconfig.json", "./src/main.ts"]