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
define('DB_NAME', 'grunt_sample');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'demo');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', '');

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
define('AUTH_KEY',         'u%qnXYp6!jO``ph].B]E,*G<Sxmm4Cf|R:{EAIcY9S^H#P29#]+sxT[t,T9}R^Mg');
define('SECURE_AUTH_KEY',  '5=d4Gf9CQ#tW7F%`W ]|gT]t:mX_+#e(+0NWw2L_l,_SsISVln-#K(*bm;9w7{pW');
define('LOGGED_IN_KEY',    'Bi#AQ^Q).c:HP2^QV9;[D~*9gWd-_74JD9+P3D=b2#%kp[nEYB MyN$:n;*;W ];');
define('NONCE_KEY',        'uZlKO>%Z+0XU-bc0a[!2F8I`hIEpc6EnGlA7QMr04O6{m@+0UE#j-)y)=<@X_-Ao');
define('AUTH_SALT',        '_NZ{zN0RA?4T[`MTp;ab *-|w+m?HJFX(NCMj+~3jZr?Qnp&)-uZn4N%kJiau*v_');
define('SECURE_AUTH_SALT', '^O-a>0c]a8%Ii>aj?+<RLei ?tW]Fsnycb:<aY}n!?+n$I@(=a+j+S|*gE+8OJGg');
define('LOGGED_IN_SALT',   'LHjz3)/mU&+d37PLPOEf%s_{mZ8(r%nkGB(FiH_- Lo1]aD&LQk6ojYhDN|b.Uo4');
define('NONCE_SALT',       'B RY&j=Jv]CQRp|KeSxlGn:vn+a-kOQs6Vc@NOA{S<>DWs4*Alu{Lz:7(Ly#R;@p');

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
