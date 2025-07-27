FROM ubuntu:20.04

# 安裝必要的工具
RUN apt-get update && apt-get install -y \
    git \
    cron \
    && rm -rf /var/lib/apt/lists/*

# 設定工作目錄
WORKDIR /app

# 複製腳本到容器中
COPY fetch-updates.sh /app/fetch-updates.sh

# 設定腳本執行權限
RUN chmod +x /app/fetch-updates.sh

# 複製 crontab 設定
COPY crontab /etc/cron.d/fetch-updates-cron

# 設定 crontab 權限
RUN chmod 0644 /etc/cron.d/fetch-updates-cron

# 啟用 cron
RUN crontab /etc/cron.d/fetch-updates-cron

# 啟動容器時執行 cron
CMD ["cron", "-f"]
