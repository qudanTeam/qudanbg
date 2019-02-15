# !/bin/bash

# 检查node版本
node --version
# 开始启动程序
npm i yarn -g && yarn install && sh stop.sh && npm run tsc && EGG_SERVER_ENV=local npm starttest
