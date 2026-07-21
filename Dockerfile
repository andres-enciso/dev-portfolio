# Stage 1: Install dependencies
FROM node:22-alpine AS deps
RUN corepack enable && corepack prepare pnpm@9 --activate
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Stage 2: Build the site
FROM node:22-alpine AS build
RUN corepack enable && corepack prepare pnpm@9 --activate
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Stage 3: Serve with nginx
FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
