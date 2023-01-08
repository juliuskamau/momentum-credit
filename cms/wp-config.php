<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'carolyn1_media' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5@U{k?4~$RS+sc9}D:ZIp}vqGB;X}cCoZRbkt}/a?Ij_NN<Z6E9z)o-Z@K`~);ya' );
define( 'SECURE_AUTH_KEY',  'nTIYHI UxA5v8$Cd;[+$bHT2wdNSii%FR+= >s:(fSc10zfnZq3vGZ:8nw9pR1kN' );
define( 'LOGGED_IN_KEY',    '0V:$(veN_{&@X.$)(/00-Z3W}5jZyh2p92-T0QQ`.7u(qIyE0nN|zPX|i2 d|nrS' );
define( 'NONCE_KEY',        '!$k=Y~e#nAGJ>?L/<9l%;N84;~j<%Qm6i;q &Xd$!h BAulHJfZ9@f(I~;QvAA-1' );
define( 'AUTH_SALT',        'Ws[9u9Jk7?q?VR?^XdSE/FxHwv/@g%#$5~bpX*,IuE<xVG=KOGB>.l)jd8Y1[Fwv' );
define( 'SECURE_AUTH_SALT', ' A_V>Xj0VBrO`]Y_EOS~}I04kZ2O%yC4C_AfY~`nLdlS],!$9s_:0zZeH#,dU03w' );
define( 'LOGGED_IN_SALT',   'M1v<]LS$p]IVy#vLgVgLT(J.Za(6$2V3x40%:{V~^7/<~=|p@/^1Sysz4&IqE3 e' );
define( 'NONCE_SALT',       'VdCgZ{UNGLsgHKS[MfI^PYx<_2k#IeCcRRV/`|YyQmFnW-6U<SK*^=5c{UXzJ}|W' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'media_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
