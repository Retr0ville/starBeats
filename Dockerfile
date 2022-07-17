FROM node:alpine as builder

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

# COPY . .


FROM nginx as run
EXPOSE 80
COPY --from=builder /usr/app/build /usr/share/nginx/html