document.addEventListener("DOMContentLoaded", function() {

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    // nav:true,
    margin:20,
    dots:false,
    // items: 10,
    autoWidth: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:10
        }
    }
});

// Go to the next item
$('.slider-team-header__next-btn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider-team-header__prev-btn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// Меню еще 
$(".more__button").click(function (event) {
    event.stopPropagation();
    $(".more__menu-list").fadeToggle();
})
$(document).click(function () {
    if ($(".more__menu-list").is(":visible")) {
        $(".more__menu-list").slideUp();
    }
});
// Календарь 
$(".b-calendar").click(function (event) {
    event.stopPropagation();
    $(".b-calendar__calendar").fadeToggle();
})
$(document).click(function () {
    if ($(".b-calendar__calendar").is(":visible")) {
        $(".b-calendar__calendar").fadeOut();
    }
});

// $(document).mouseup(function(e){
//        var menu = $('.more__menu-list');
//        if (!menu.is(e.target) // The target of the click isn't the container.
//        && menu.has(e.target).length === 0) // Nor a child element of the container
//        {
//           menu.slideUp();
//        }
//     });
// $(".more__menu-list").toggleClass("more__menu-hidden");

// $('.b-calendar__text').click(function(){
// 	$(".calendar").toggleClass("b-calendar__hidden");
// });


function getToday(){
	return new Date().toLocaleDateString();
};
function getTomorrow(){
	let tomorrow = new Date();
	return new Date(tomorrow.setDate(tomorrow.getDate() + 1)).toLocaleDateString();
};

$('.calendar').pignoseCalendar({
	lang: 'ru',
	week: 1,
	format: 'DD.MM.YYYY',
    select: function (date, context) {
    	// console.log(date);
		$(".b-calendar__text").text(date[0].format('DD.MM.YYYY'));
		$(".b-calendar__calendar").fadeOut();
    }
});

$(".event-date__btn-today").click(function(){
	let d = getToday();
	$(".b-calendar__text").text(d);
	$('.calendar').pignoseCalendar('set', d);
});
$(".event-date__btn-tomorrow").click(function(){
	
	let d = getTomorrow();

	$(".b-calendar__text").text(d);
	$('.calendar').pignoseCalendar('set', d);
});

$(".b-calendar__text").text(getToday());


});
