#!/bin/sh
# Ensure Prisma Client is generated
npx prisma generate

# Run Prisma migrations
npx prisma db push

# Start the Next.js app
pnpm start