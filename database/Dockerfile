FROM denoland/deno:alpine

EXPOSE 7004

WORKDIR /app

ADD . .

RUN deno cache ./src/main.ts

RUN deno run --allow-net --allow-read -c ./tsconfig.json ./src/utils/seed.ts

CMD ["run", "--allow-net", "-c", "./tsconfig.json", "./src/main.ts"]