$(function(){
var heroSlider=$(".owl-carousel");
heroSlider.owlCarousel({
loop:true,
items:1,
margin:0,
nav:false,
dots:false,
autoplay:true,
autoplayTimeOut:5000,
nav:true,
navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
responsive:{
0:{
items:1
},
600:{
items:1
},
1000:{
items:1
}
}
});

heroSlider.on("changed.owl.carousel", function(event){
var item = event.item.index-2;
$('h1').removeClass('animated bounceInDown');
$('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated bounceInDown');

$('p').removeClass('animated bounceInLeft');
$('.owl-item').not('.cloned').eq(item).find('p').addClass('animated bounceInLeft');

$('a').removeClass('animated bounceInUp');
$('.owl-item').not('.cloned').eq(item).find('a').addClass('animated bounceInUp');
})
// to activate navtext
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl.trigger('prev.owl.carousel', [300]);
});




// todays top part
$('.todaystop_slider').slick({
dots: true,
infinite: true,
autoplay:true,
speed: 300,
slidesToShow: 3,
slidesToScroll: 1,
arrows: true,
prevArrow: ".prv-arrow",
nextArrow: ".nxt-arrow",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 1,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});
//service part
$('.service_slider').slick({
dots: false,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 1,
arrows: true,
autoplay: true,
prevArrow: ".prv-arrow",
nextArrow: ".nxt-arrow",
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 4,
slidesToScroll: 2,
infinite: true,
dots: true
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}
]
});



// Isotop sort and filter

// $(".items").isotope({
// 		filter: '*',
// 		animationOptions: {
// 			duration: 1500,
// 			easing: 'linear',
// 			queue: false
// 		}
// 	});


// 	$("#filters a").click(function() {

// 		$("#filters .current").removeClass("current");
// 		$(this).addClass("current");

// 		var selector = $(this).attr("data-filter");

// 		$(".items").isotope({
// 			filter: selector,
// 			animationOptions: {
// 				duration: 1500,
// 				easing: 'linear',
// 				queue: false
// 			}
// 		});

// 		return false;
// 	});




});