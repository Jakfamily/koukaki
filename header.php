<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>

    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">

                <div class="boutonMenu">
                    <span> </span>
                </div>
                <ul>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                </ul>
            </nav>

            <section class="menu-items MenuFull">
                <div class="menu-items__container">
                    <img class="logoMenu" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo-en-paralax.png'; ?>" alt="logo menu en parallaxe">
                    <img id="catMenuBleu" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/bluecat.png'; ?>" alt="Chat violet">
                    <img id="catMenuBlack" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/blackcat.png'; ?>" alt="Chat noir">
                    <img id="catMenuOrange" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orangecat.png'; ?>" alt="Chat orange">
                    <img id="fleurMenuSunFlower" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/Sunflower.png'; ?>" alt="marguerite blanche">
                    <img id="fleurMenuOrchid" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/orchid.png'; ?>" alt="Orchidée violette">
                    <img id="fleurMenuHibiscus" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/hibiscus_footer.png'; ?>" alt="Hibiscus">
                    <img id="fleurMenuRandom" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/random_flower.png'; ?>" alt="petite Fleur violette">
                    <img id="fleurMenuFlower" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/flower.png'; ?>" alt="petite Fleur orange">

                    <ul class="liste">
                        <li><a href="#story"><span class="Animetitre">Histoire</span></a></li>
                        <li><a href="#characters"><span class="Animetitre">Personnages</span></a></li>
                        <li><a href="#place"><span class="Animetitre">Lieu</span></a></li>
                        <li><a href="#studio">
                                <KOUKAKI class="Animetitre">Studio KOUKAKI
                            </a></li>
                    </ul>
                    <p class="menuParagraphe">STUDIO KOUKAKI</p>
                </div>
            </section>
        </header>
    </div>
</body>

</html>
