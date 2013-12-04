grunt-sample-php
================

Grunt sample for phpcon2013 WordPress Demo Codes.

PHPCON 2013 で発表した Grunt のデモ用サンプルコードです。

発表資料はこちら→ http://www.slideshare.net/mishikawa55/2013-phpcon

## デモの使い方

Macを用意します。
事前にNode, Grunt, PHP, nginx, MySQLを入れておきましょう。

セットアップ例
```
# Grunt
npm -g install grunt-cli
# grunt --version で確認

# php
brew install php55 --with-fpm --without-apache
sudo mv /usr/sbin/php-fpm /usr/sbin/php-fpm.bak
sudo ln -s /usr/local/Cellar/php55/5.5.3/sbin/php-fpm /usr/sbin/php-fpm
sudo mv /usr/bin/php /usr/bin/php.bak
sudo ln -s /usr/local/bin/php /usr/bin/php
# php -v, php-fpm -v で確認

# nginx
brew install nginx
# nginx -v で確認

# MySQL
brew install mysql
# mysql --version で確認
```

nginx設定例) /usr/local/etc/nginx/nginx.conf 設置場所:~/tmp_demo/ ユーザー: ishikawam
```
~~
        location /tmp_demo {
            root   /Users/ishikawam/;
            index  index.html index.htm index.php;
        }
        location ~ \.php$ {
            root   /Users/ishikawam/;
            include fastcgi_params;
            fastcgi_pass   127.0.0.1:9000;
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        }
~~
```

MySQL設定) DB: grunt_sample ユーザー: demo
```
mysql> CREATE DATABASE grunt_sample;
mysql> GRANT ALL ON grunt_sample.* TO demo@localhost;
mysql> GRANT ALL ON grunt_sample.* TO demo@127.0.0.1;
```

サンプルデモ設置例
```
mkdir ~/tmp_demo
cd ~/tmp_demo
git clone git@github.com:ishikawam/grunt-sample-php.git
cd grunt-sample-php
npm install

# サーバを起動
nginx
mysql.server start 
php-cgi -b localhost:9000


# ブラウザで開く
open http://localhost:8080/tmp_demo/grunt-sample-php/wordpress/

# grunt-contrib-watchを起動
grunt

```

* Growl, GrowlNotifyをいれておけばGruntのタスク終了後にメッセージが通知されます。（便利！）
* ブラウザにLiveReloadエクステンションを入れておけばコードを編集保存を監視してGruntタスクが走ります。（かっこいい！）

grunt を起動（watch）させている状態で /wordpress/wp-content/themes/original_twentythirteen/ 内のソースを編集してみて下さい。ファイルによってGruntタスクが自動で走ります。

> 例） /wordpress/wp-content/themes/original_twentythirteen/ 内のcssを編集すればcssmin,csslintが走り、 /wordpress/wp-content/themes/twentythirteen/ に圧縮されたcssが出力されます。

git status すればGruntが変更したファイル差分を確認できます。
