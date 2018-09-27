#! /bin/sh
set -e
# export PATH=/home/fis/npm/bin:$PATH
# export PATH=/home/fis/node/v6/bin:$PATH #选择 v6版本 node
APP_NAME="ssr-app"

rm -rf node_modules public server-build logs
echo 'node_modules install'
npm install

CDN_ST="./$APP_NAME"
# npm run dev
npm run build
mkdir -p $CDN_ST
cp -r ./public $CDN_ST
cp -r ./server-build $CDN_ST
cp -r ./server $CDN_ST
cp ./ecosystem.config.js $CDN_ST
cp ./package.json $CDN_ST
cp ./favicon.ico $CDN_ST
# mv -f ./node_modules/ ./$COMPILE_OUTPUT/$CDN_SUF
# cd $COMPILE_OUTPUT

# 静态文件打包
tar zcvf static-$APP_NAME.tar.gz $CDN_ST > /dev/null
rm -rf $CDN_ST

find ./ -name .svn | xargs rm -rf
cd ..
echo '################################################'
echo -e "\033[32m\033[1m[ info ]\033[0m \033[31m\033[1m$APP_NAME\033[0m build success!"
echo '################################################'
