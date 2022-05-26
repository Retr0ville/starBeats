FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build


FROM nginx as run

COPY --from=builder /usr/app/build /usr/share/nginx/html