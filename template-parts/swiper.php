<?php
$args = array(
	'post_type'      => 'characters',
	'posts_per_page' => -1,
	'meta_key'       => '_main_char_field',
	'orderby'        => 'meta_value_num',
	'order'          => 'ASC',
);
$characters_query = new WP_Query($args);
?>

<!-- Slider main container -->
<div class="swiper">
	<!-- Additional required wrapper -->
	<div class="swiper-wrapper">
		<?php while ($characters_query->have_posts()) : $characters_query->the_post(); ?>
			<div class="swiper-slide">
				<?php
				echo get_the_post_thumbnail(get_the_ID(), 'full');
				the_title();
				?>
			</div>
		<?php endwhile; ?>
	</div>
</div>
