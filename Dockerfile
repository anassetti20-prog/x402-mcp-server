FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:20-alpine AS runtime

WORKDIR /app

RUN apk add --no-cache curl=~8

COPY --from=build /app/node_modules ./node_modules
COPY . .

ENV API_BASE=http://localhost:8080
ENV INTERNAL_KEY=hermes-mcp-internal-v1
ENV NODE_ENV=production

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -sf http://localhost:8080/health || exit 1

ENTRYPOINT ["node", "index.js"]
