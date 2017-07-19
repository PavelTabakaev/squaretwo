;
// Начинать писать отсюда!!!!
$(document).ready(function() {
	$(document).on('click','.hide-nav',function(){
		var nav = $('.header-nab__list');
		$('.hide-nav').toggleClass('active');
		nav.toggleClass('show')
	})
})


$('.service-item--help').addClass('animated fadeInLeft ');
$('.service-item--design').addClass('animated fadeInRight');
$('.service-item--direct').addClass('animated fadeInLeft');
$('.service-item--seo').addClass('animated fadeInRight');
$('.service-item--nadeg').addClass('animated fadeInLeft');
$('.service-item--speed').addClass('animated fadeInRight');
$('.service-item--logo').addClass('animated fadeIn');

$('.section-title').addClass('animated fadeIn');
$('.section-title2').addClass('animated fadeIn');

$('.title45').addClass('animated fadeIn');
$('.title3').addClass('animated fadeIn');

$('.porfolio-item--level1').addClass('animated fadeIn');
$('.porfolio-item--level2').addClass('animated fadeIn');
$('.porfolio-item--level3').addClass('animated fadeIn');
$('.porfolio-item--level4').addClass('animated fadeIn');
$('.porfolio-item--level5').addClass('animated fadeIn');
$('.porfolio-item--level6').addClass('animated fadeIn');

$('.title4').addClass('animated fadeIn');
$('.price-item.price-item--level1').addClass('animated fadeInLeft');
$('.price-item.price-item--level2').addClass('animated fadeInLeft');
$('.price-item.price-item--level3').addClass('animated fadeInLeft');
$('.price-item.price-item--level4').addClass('animated fadeInLeft');

$('.top-banner__info').addClass('animated fadeIn');