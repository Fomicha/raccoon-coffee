let windowHeight,
	windowWidth;

function onDocumentready() {
	
	// preloader
	windowHeight = $(window).height();
	windowWidth = $(window).width();
	
	window.onload = function() {
		$('.preloader').delay(400).fadeOut(300, 'linear', function() {
			$('main').removeClass('loading');
		});
	};
	
	// slider
	$('.main-slider').slick({
		slidesToShow: 1,
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		speed: 500,
		fade: true,
		pauseOnHover: false,
		responsive: true,
		pauseOnFocus: false,
		cssEase: 'linear'
	});
	
	// call map function
	mapLoad();
}

$(document).ready(function() {
	onDocumentready();
});

// map function
function mapLoad() {
	var mymap = L.map('mapid').setView([50.464395630, 30.433252514], 11);
	
	var racconnIcon = L.icon({
		iconUrl: 'https://b.radikal.ru/b37/1904/f7/e9e57b5c81a3.png',
		iconSize:     [42, 45], // size of the icon
		iconAnchor:   [0, 40], // point of the icon which will correspond to marker's location
		popupAnchor:  [25, -50] // point from which the popup should open relative to the iconAnchor
	});
	
	L.marker([50.45089130, 30.47079516], {icon: racconnIcon}).addTo(mymap).bindPopup("Raccoon-coffee");
	L.marker([50.467037830, 30.511473415], {icon: racconnIcon}).addTo(mymap).bindPopup("Raccoon-coffee");
	L.marker([50.461347730, 30.356617917], {icon: racconnIcon}).addTo(mymap).bindPopup("Кав'ярня Єнотік");
	
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYWxleC1mb21pY2giLCJhIjoiY2p0cTlrOGtkMDd1azQ0cWR3ajNpbG9wZSJ9.Qkl7KcO6eZnN1Pn9A70zIQ'
	}).addTo(mymap);
}

$(window).resize(function() {
	onWindowResize();
});

function onWindowResize() {
	windowHeight = $(window).height();
	windowWidth = $(window).width();
}

// mobile menu
$('.header__inner .header__menu-icon').click(function(e) {
	e.stopPropagation();
	adaptMenuActive(this);
});

$('body').on('click', '.header__inner .header__nav', function (e) {
	e.stopPropagation();
});

function adaptMenuActive(el) {
	if(!$('.header__inner .header__menu-icon').hasClass('active')) {
		$(el).addClass('active');
		$('.header').css('background', 'black');
		$('.header__inner .header__list').slideDown(300);
		
	}
	else {
		$(el).removeClass('active');
		$('.header__inner .header__list').slideUp(300);
		setTimeout(function() {
			$('.header').css('background', 'unset');
		}, 300);
	}
}

window.addEventListener('resize', function() {
	var isDesktop = window.innerWidth >= 1024;
	
	if (isDesktop) {
		$('.header__inner .header__menu-icon').removeClass('active active-menu');
		$('.header__inner .header__list, body, html').removeAttr('style');
	}
});

// scroll

$(document).ready(function () {
	$("#menu").on("click", "a", function (event) {
		event.preventDefault();
		
		$('.header__inner .header__menu-icon').removeClass('active active-menu');
		$('.header__inner .header__list, .header, body, html').removeAttr('style');
		
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});








