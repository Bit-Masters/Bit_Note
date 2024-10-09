FROM node:20-alpine

WORKDIR /app

RUN npm install -g live-server

COPY . .

EXPOSE 8080

CMD ["live-server", "--host=0.0.0.0", "--port=8080", "--open=0"]
