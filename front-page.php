<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">
        <video class="banner__video" autoplay muted loop poster="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?>">
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/videos/Koukaki_video.mp4'; ?>" type="video/mp4">
        </video>

        <img class='banner__video-fallback' src="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?> " alt="logo  de : Fleurs d'oranger et chats errants">

        <div class="banner__parallaxe">
            <img class="banner__parallaxe-logo" src="<?= get_template_directory_uri() . '/assets/images/logo.png'; ?>" alt="logo Fleurs d'oranger & chats errants">
        </div>
    </section>
    <section id="story" class="story">

        <h2><span class="Animetitre">L'</span><span class="Animetitre2">histoire</span></h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>

        <article id="characters">
            <div class="main-character">
                <div>
                    <h3 id="titreh3"><span class="Animetitre">Les</span><span class="Animetitre2">&nbsp;personnages</span></h3>
                </div>
                <!---- Ajout template parts Carroussel --->
                <?php echo get_template_part('template-parts/swiper'); ?>
                <!---- fin Ajout template parts Carroussel --->
            </div>
        </article>

        <article id="place" class="story__place">
            <div>
                <h3><span class="Animetitre">Le</span><span class="Animetitre2">&nbsp;lieu</span></h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>

            <div>
                <img id="NuagesBleu" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nuage-bleu.png'; ?> " alt="Nuages Bleu">
            </div>

        </article>
    </section>


    <section id="studio">
        <h2><span class="Animetitre">Studio</span><span class="Animetitre2">&nbsp;Koukaki</span></h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>
    <?php get_template_part('template-parts/oscars'); ?>
</main><!-- #main -->

<?php
get_footer();
