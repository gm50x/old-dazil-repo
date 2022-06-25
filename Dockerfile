FROM node:16.13-alpine3.14 AS builder
ARG target
WORKDIR /app
COPY package*.json ./
RUN npm set-script prepare ""
RUN npm install
COPY . .
RUN npm run build

FROM node:16.13-alpine3.14 AS runtime
ARG target
WORKDIR /app
COPY package*.json ./
RUN npm set-script prepare ""
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
