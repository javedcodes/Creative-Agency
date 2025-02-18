(function ($) {
	"use strict";



// -------------------------------------- sticky-header-1 --------------------------------------
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300){
			$('.sticky_header_1').addClass('sticky1');
		}
		else{
			$('.sticky_header_1').removeClass('sticky1');
		}
	});
// -------------------------------------- sticky-header-1-end --------------------------------------

// -------------------------------------- sticky-header-2 --------------------------------------
$(window).scroll(function() {
	if ($(this).scrollTop() > 300){
	$('.sticky_header_2').addClass('sticky2');
	}
	else{
	$('.sticky_header_2').removeClass('sticky2');
	}
});
// -------------------------------------- sticky-header-2-end --------------------------------------

// ----------------------------- mobile-menu-active start  -------------------------------
	$('.menu_toggle_1').on('click', function() {
		$('.offcanvas-overlay, .sidemenu_1_active').addClass('active');
	});

	$('.offcanvas-overlay, .sidemenu_close_btn').on('click', function() {
		$('.sidemenu_1_active').removeClass('active');
		$('.offcanvas-overlay').removeClass('active');
	})
// ----------------------------- mobile-menu-active end  ---------------------------------

// ----------------------------- cart-sidebar start --------------------------------------
	$('.cart_close_btn, .offcanvas-overlay').on('click', function () {
		$('.cart_sidebar').removeClass('active');
		$('.offcanvas-overlay').removeClass('active');
	});

	$('.header-cart-btn').on('click', function () {
		$('.cart_sidebar').addClass('active');
		$('.offcanvas-overlay').addClass('active');
	});

// ----------------------------- cart-sidebar end ----------------------------------------

// ----------------------------- search-popup start --------------------------------------
// search-popup
	$('.search_1_popup_toggle').on('click', function() {
		$('.search_1_popup_active').addClass('active');
	});
	$('.offcanvas-overlay, .search_1_popup_close').on('click', function() {
		$('.search_1_popup_active').removeClass('active');
	})
// ----------------------------- search-popup end ---------------------------------------

// ----------------------------- mean-menu start ----------------------------------------
	$('#mobile_menu').meanmenu({
		meanMenuContainer: '.mobile_menu',
		meanScreenWidth: "991"
	});
// ----------------------------- mean-menu end -----------------------------------------

// ----------------------------- offer-1-hover-active ----------------------------------------
// blog-3-hover-active
	$(".hpt-offer-1-item-single").on("mouseover", function(){
		var current_class = document.getElementsByClassName("hpt-offer-1-item-single active");
		current_class[0].className = current_class[0].className.replace(" active", "");
		this.className += " active";
	});
// ----------------------------- offer-1-hover-active END -----------------------------------------


// --------------------------------- testimonial-1-slider-start ---------------------------------
	let slider_thumb = new Swiper('.testimonial-1-2', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 4,
		rtl: false,
		centeredSlides: false,
		watchSlidesProgress: false,		
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,

			},
			768: {
				slidesPerView: 2,

			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		}
	});


	let tslider1 = new Swiper('.testimonial-1-1 ', {
		loop: true,
		spaceBetween: 0,
		rtl: false,
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		thumbs: {
			swiper: slider_thumb,
		},

		navigation: {
			nextEl: ".testimonial-1-next-btn",
			prevEl: ".testimonial-1-prev-btn",
		},
	});
// --------------------------------- testimonial-1-slider-end ---------------------------------


// --------------------------------- faq-1-active-class-start -------------------------------
	$(document).on('click', '.accordion-item', function(){
		$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
	})
// --------------------------------- faq-1-active-class-end -------------------------------

// --------------------------------- dropdown-menu-start ----------------------------------
	$('.has-dropdown').on("click" , function(){
		$(this).next('.submenu').slideToggle();
		$(this).find('.icon').toggleClass('iconrotete')
	})
	$('.mega-dropdown').on("click" , function(){
		$(this).next('.submenu').slideToggle();
		$(this).find('.icon').toggleClass('iconrotete')
	})
	if($('.h1-sidebar-menu li.dropdown ul').length){
		$('.h1-sidebar-menu li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-down"></span></div>');
		$('.h1-sidebar-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}
	$(".dropdown-btn").on("click", function () {
		$(this).toggleClass("toggle-open");
	});
// --------------------------------- dropdown-menu-end ----------------------------------

// -------------------------------- testimonial-2-start -----------------------------

	var Testi_nav = new Swiper(".testimonial-2", {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 5,
		centeredSlides: true,
		navigation: {
			nextEl: ".testimonial-next_4",
			prevEl: ".testimonial-prev_4",
		},
		breakpoints: {  
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	var swipet1 = new Swiper(".hpt-testimonial-slider-for-4 ", {
		loop: true,
		spaceBetween: 10,
    // effect: 'fade',
		navigation: {
			nextEl: ".testimonial-next_4",
			prevEl: ".testimonial-prev_4",
		},
		thumbs: {
			swiper: Testi_nav,
		},
	});
// -------------------------------- testimonial-2-end -----------------------------


// -------------------------------- hero-slider-1-start -----------------------------
	function sliderActive_hero3() {

		if (jQuery(".hero_2_slider_active").length > 0) {
			let sliderActive1 = '.hero_2_slider_active';
			let sliderInit1 = new Swiper(sliderActive1, {
				slidesPerView: 1,
				paginationClickable: true,
				loop: true,
				effect: "fade",
				pagination: {
					el: ".horo-2-pagination",
					clickable: true,
				},

			});

			function animated_swiper(selector, init) {
				let animated = function animated() {
					$(selector + ' [data-animation]').each(function () {
						let anim = $(this).data('animation');
						let delay = $(this).data('delay');
						let duration = $(this).data('duration');

						$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
					});
				};
				animated();
			// Make animated when slide change
				init.on('slideChange', function () {
					$(sliderActive1 + ' [data-animation]').removeClass('animated');
				});
				init.on('slideChange', animated);
			}

			animated_swiper(sliderActive1, sliderInit1);
		}}

		sliderActive_hero3();
// -------------------------------- hero-slider-1-end -----------------------------

// ----------------------------- video-popup start ---------------------------------------
		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
// ----------------------------- video-popup end ---------------------------------------


// data background
		$("[data-background]").each(function(){
			$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
		})

// data width
		$("[data-width]").each(function(){
			$(this).css("width",$(this).attr("data-width"))
		})

// data background color
		$("[data-bg-color]").each(function(){
			$(this).css("background-color",$(this).attr("data-bg-color"))
		})

//for menu active class
		$('.portfolio_nav button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});



		var backtotop = $('.scroll-top');

		$(window).scroll(function() {
			if ($(window).scrollTop() > 300) {
				backtotop.addClass('show');
			} else {
				backtotop.removeClass('show');
			}
		});

		backtotop.on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({scrollTop:0}, '700');
		});

// WOW active
		new WOW().init();

// -------------------------------------- custom-gsap-start ---------------------------------

// smooth-scroll-start 
		gsap.registerPlugin(ScrollTrigger , ScrollSmoother);

// let smoother = ScrollSmoother.create({
// 	wrapper: '#main',
// 	content: '#smooth-content',
// 	smooth: 1,
// 	smoothTouch: 0
// })
// smooth-scroll-end
// -------------------------------------------------------
// skewEffect-start
		let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

    ScrollTrigger.create({
    	onUpdate: (self) => {
    		let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    		if (Math.abs(skew) > Math.abs(proxy.skew)) {
    			proxy.skew = skew;
    			gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    		}
    	}
    });

// make the right edge "stick" to the scroll bar. force3D: true improves performance
    gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});
// skewEffect-end
// ---------------------------------------------------------
// splitType-start
    gsap.registerPlugin(ScrollTrigger)

    const splitType = document.querySelectorAll('.reveal-type')

    splitType.forEach((char,i) => {
    	const text = new SplitType(char, { type: 'chars,words'})

    	gsap.from(text.chars, {
    		scrollTrigger: {
    			trigger: char,
    			start: 'top 90%',
    			end: 'top 50%',
    			scrub: true,
    			markers: false
    		},
    		opacity: .1,
    		stagger: .1

    	})

    } )

    const splitType2 = document.querySelectorAll('.reveal-type-2')

    splitType2.forEach((char,i) => {
    	const text = new SplitType(char, { type: 'chars,words'})

    	gsap.from(text.chars, {
    		scrollTrigger: {
    			trigger: char,
    			start: 'top 90%',
    			end: 'top 50%',
    			scrub: true,
    			markers: false
    		},
    		opacity: 0,
    		stagger: .1

    	})

    } )







// -------------------------------------- custom-gsap-end ---------------------------------


  })(jQuery);