# Stage 1: Build the Next.js app
FROM node:23-alpine AS builder
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package.json
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY prisma ./prisma/
COPY .env ./



# Install dependencies
RUN pnpm install --frozen-lockfile

RUN npx prisma generate
# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build
# Stage 2: Production-ready image
FROM node:23-alpine AS runner

# Set working directory
WORKDIR /app

# Install pnpm globally in the runner stage
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app
# Set environment variable
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma/

# Copy the entrypoint script
ENV NODE_ENV=production
ENV PORT=3000
COPY ./scripts/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh

RUN pnpm install --prod --ignore-scripts

# Expose port 3000 to the outside world
EXPOSE 3000

# Use the entrypoint script to run migrations and start the app
ENTRYPOINT ["./entrypoint.sh"]