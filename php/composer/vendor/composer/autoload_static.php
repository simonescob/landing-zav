<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitdb9b8ffaaa4fa9a79052c56f7d444773
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitdb9b8ffaaa4fa9a79052c56f7d444773::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitdb9b8ffaaa4fa9a79052c56f7d444773::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}