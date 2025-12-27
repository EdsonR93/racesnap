# backend/Dockerfile

# 1) Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Install deps
COPY package*.json ./
RUN npm ci

# Copy source + build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# 2) Runtime stage
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output
COPY --from=build /app/dist ./dist

# Expose API port
EXPOSE 3000

# Run
CMD ["node", "dist/main.js"]