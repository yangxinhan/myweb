# 1. 建立階段（建構 Next.js 專案）
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2. 運行階段（使用 Next.js 提供網站）
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# 複製 build 出來的檔案
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

EXPOSE 3000

CMD ["npm", "start"]
