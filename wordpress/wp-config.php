<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、MySQL、テーブル接頭辞、秘密鍵、言語、ABSPATH の設定を含みます。
 * より詳しい情報は {@link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86 
 * wp-config.php の編集} を参照してください。MySQL の設定情報はホスティング先より入手できます。
 *
 * このファイルはインストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さず、このファイルを "wp-config.php" という名前でコピーして直接編集し値を
 * 入力してもかまいません。
 *
 * @package WordPress
 */

// 注意: 
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'grunt_demo');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'diamond1');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-X4C7;ZZxr%|+!j9.<W+0h w-6SP+w_^%Q.Mksp|!vi.}N~!~CD#qDh8wsBXT]9(');
define('SECURE_AUTH_KEY',  '#0|Ns&+8*j&~<q2,:OA/Rl72MbxCMIE,nH-}W{)j #7Bo{*Vzg:UXUsR};+rw5Dr');
define('LOGGED_IN_KEY',    'm5E$xG3f<u0:6QdT+X=BOK*V(x%!6t/P&;5H Zcj_)p<O3x/qRn+H#IT!yv1&Z^9');
define('NONCE_KEY',        '+*O+v%73j;pW$WjCZ cdZ6^Y4:ZR=?flIFC1Yt;36rf+&-?:tO@x0[3|UY2k1UpL');
define('AUTH_SALT',        '{j{mlo-,?%(Gt7cGlRuRa+p@Zmmy|AiiR!Zr#(ylEk?PAOtIjawJN2=Xh+QU>_3V');
define('SECURE_AUTH_SALT', 'j-jgN eVSP82Oetr;|f3U6eK/jD|+CYLsrXfMGeJJi|_G{AD$N6PnGki8e~#TQ*&');
define('LOGGED_IN_SALT',   'F$AI5e -N!}0<|ZnNr~!>/nj:aI;;/:^fv#Zk#:w,=C>tp/IhK^2)lfblNn|Tl/b');
define('NONCE_SALT',       '%~:9rn{L+L6&lg5SDZKlkf=8N6WZ&%i>!Dr$8*=F^G9HW7Yv1fh4)S`co0WKJ/2Z');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * ローカル言語 - このパッケージでは初期値として 'ja' (日本語 UTF-8) が設定されています。
 *
 * WordPress のローカル言語を設定します。設定した言語に対応する MO ファイルが
 * wp-content/languages にインストールされている必要があります。たとえば de_DE.mo を
 * wp-content/languages にインストールし WPLANG を 'de_DE' に設定すると、ドイツ語がサポートされます。
 */
define('WPLANG', 'ja');

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
