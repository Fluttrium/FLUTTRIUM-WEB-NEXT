FROM oven/bun:1-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

# Копируем только файлы зависимостей
COPY package.json bun.lock* ./

# Устанавливаем только production зависимости
RUN bun install --frozen-lockfile --production

# Этап сборки
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Копируем package.json и устанавливаем ВСЕ зависимости (включая dev)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Копируем исходники
COPY . .

# Собираем приложение
RUN bun run build

# Этап production
FROM oven/bun:1-alpine AS runner

RUN apk add --no-cache dumb-init

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

WORKDIR /app

# Копируем только необходимое
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

ENTRYPOINT ["dumb-init", "--"]
CMD ["bun", "run", "server.js"]