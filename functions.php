<?php

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/scss/style.css', array(), '1.0.0', 'all');
}

// Import lib Swiper
add_action("wp_enqueue_scripts", 'swiper');

function swiper() {
    wp_enqueue_style("swiper-css", "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.css");
    wp_enqueue_script("swiper-js", "https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js");
}

add_action('wp_enqueue_scripts', 'customScripts');

function customScripts() {
    wp_enqueue_script('animationTitle', get_stylesheet_directory_uri() . '/js/animationTitle.js', array('jquery'), '1.0.0', true);
    wp_enqueue_script('animationcarrousel', get_stylesheet_directory_uri() . '/js/animationCarrousel.js', array('jquery'), '1.0.0', true);
}




// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
