#!/bin/bash

# 確保腳本在錯誤時停止
set -e

echo "🚀 Starting deployment..."

# 拉取最新程式碼
echo "📥 Pulling latest changes..."
git pull

# 重新建置並啟動 Docker 容器
echo "🐳 Rebuilding and starting Docker containers..."
sudo docker compose up -d --build

echo "✅ Deployment completed successfully!"
