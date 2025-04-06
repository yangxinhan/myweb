#!/bin/bash

# 設定 Git 庫的目錄
REPO_DIR="/app/myweb"

# 如果目錄不存在，克隆 Git 庫
if [ ! -d "$REPO_DIR" ]; then
  git clone https://github.com/yangxinhan/myweb.git "$REPO_DIR"
else
  # 如果目錄存在，進行更新
  cd "$REPO_DIR"
  git pull origin main
fi
