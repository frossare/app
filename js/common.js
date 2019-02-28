$(function () {

	//PRELOADER
	setTimeout(function () {
		document.getElementsByClassName("preloader")[0].className = "dis_none";
		titleEffect(0);
	}, 2000);
	//PRELOADER END

	// SLIDER 
	var viewportWidth = $(window).width();
	if (viewportWidth > 770) {
		var Rows = 2;
	} else if (viewportWidth < 769) {
		var Rows = 1;
	}

	var $slider = $('.slider');
	var $progressBar = $('.progress');
	$slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		if (Rows == 2) {
			var calc = 10 + ((nextSlide) / (slick.slideCount - 3)) * 90;

		} else {
			var calc = 10 + ((nextSlide) / (slick.slideCount - 1)) * 90;
		}

		$progressBar
			.css('background-size', calc + '% 100%')
	});
	$slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		if (Rows == 2) {
			document.getElementById('current_slide').innerHTML = "0" + (1 - (-currentSlide / 3));
			if (document.getElementsByClassName("slider_element").length > (currentSlide * 4)) {
				sliderEffect((currentSlide * 2), (currentSlide * 4));
			} else {
				sliderEffect((currentSlide * 2), document.getElementsByClassName("slider_element").length);
			}
		} else {
			if (currentSlide < 9) {
				document.getElementById('current_slide').innerHTML = "0" + (currentSlide + 1);
				sliderEffect(currentSlide, currentSlide + 1);
			} else {
				document.getElementById('current_slide').innerHTML = currentSlide + 1;
				sliderEffect(currentSlide, currentSlide + 1);
			}
		}
	});
	function slidsCount() {
		var s_count = document.getElementsByClassName("slider_element").length;
		if (Rows == 2) {
			if ((s_count / 6) < 9) {
				if ((Math.round(s_count / 6)) < (s_count / 6)) {
					document.getElementById('max_num_slide').innerHTML = "0" + (Math.round(s_count / 6) + 1);
				} else {
					document.getElementById('max_num_slide').innerHTML = "0" + (Math.round(s_count / 6));
				}
			} else {
				if ((Math.round(s_count / 6)) < (s_count / 6)) {
					document.getElementById('max_num_slide').innerHTML = (Math.round(s_count / 6) + 1);
				} else {
					document.getElementById('max_num_slide').innerHTML = (Math.round(s_count / 6));
				}
			}
		} else {
			if (s_count < 10) {
				document.getElementById('max_num_slide').innerHTML = "0" + s_count;
			} else {
				document.getElementById('max_num_slide').innerHTML = s_count;
			}
		}
	}
	slidsCount();
	$slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

	});
	$('.slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		rows: Rows,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false,
					dots: false
				}

			}
		]
	});
	document.getElementById('slider_nxt').addEventListener('click', function () {
		$('.slider').slick('slickNext');
	})
	document.getElementById('slider_prv').addEventListener('click', function () {
		$('.slider').slick('slickPrev');
	})
//SLIDER END


//SCROLLIFY
	$.scrollify({
		section : ".sections_scrollify",   
		sectionName : "section-name",
		interstitialSection : "#Contacts",
		easing: "easeOutExpo",
		scrollSpeed: 200,
		 offset : 0,
		scrollbars: true,
	standardScrollElements: "",
	setHeights: true,
	overflowScroll: true,
	updateHash: true,
	touchScroll:true,
	before:function() {},
	after:function() {},
	afterResize:function() {},
	afterRender:function() {}
	});
//SCROLLIFY END


	var Section1 = document.querySelectorAll('#About')[0].offsetTop;
	var Section2 = document.querySelectorAll('#Projects')[0].offsetTop;
	var Section3 = document.querySelectorAll('#Design_Process')[0].offsetTop;
	var Section4 = document.querySelectorAll('#Contacts')[0].offsetTop;
	var EffectChek = [true, true, true, true];
	var SliderEffectChek = [];

	window.onscroll = function () { scrollChecking() };
	window.onresize = function () {	};

	var it = $('.s_h1');
	var staticProp = "position: absolute; background-color: #000000; top: 0; height: 47px; left: 0;  width:100%;";


	var widthValue = 0;

	function addTitleEffects() {
		for (var i = 0; i < it.length; i++) {
			var posTopValue = 0;
			var h1Text = it[i].innerText;
			var innerText = h1Text.slice(0, h1Text.search(" "))
			var testElemen = document.querySelectorAll('#test');
			testElemen[0].innerHTML = innerText;
			widthValue = testElemen[0].offsetWidth;
			while (testElemen[0].offsetWidth < it[i].clientWidth) {
				if (h1Text.search(" ") == -1) {
					if (testElemen[0].offsetWidth <= it[i].clientWidth) {
						testElemen[0].innerHTML = innerText + "a";
						widthValue = testElemen[0].offsetWidth;
						var para = document.createElement("span");
						var widthProp = "Width: " + widthValue + "px;";
						var posTopProp = "top: " + posTopValue + "px;";
						var styleProp = staticProp + posTopProp + widthProp;
						para.setAttribute("style", styleProp);
						var cl = "bgN" + i;
						para.setAttribute("class", cl);
						it[i].appendChild(para);
					}
					break;
				}
				h1Text = h1Text.slice(h1Text.search(" ") + 1, h1Text.length);
				innerText = innerText + " " + h1Text.slice(0, h1Text.search(" "));
				testElemen[0].innerHTML = innerText;
				if (testElemen[0].offsetWidth < it[i].clientWidth) {
					widthValue = testElemen[0].offsetWidth;
				} else {
					var para = document.createElement("span");
					var widthProp = "Width: " + widthValue + "px;";
					var posTopProp = "top: " + posTopValue + "px;";
					var styleProp = staticProp + posTopProp + widthProp;
					para.setAttribute("style", styleProp);
					var cl = "bgN" + i;
					para.setAttribute("class", cl);
					it[i].appendChild(para);
					innerText = h1Text.slice(0, h1Text.search(" "));
					testElemen[0].innerHTML = innerText;
					widthValue = testElemen[0].offsetWidth;
					posTopValue = posTopValue + 47;
				}
			}
		}
	}


	// SECTION 4 circles ef

	var Brief = new Vivus('Brief', { duration: 100 });
	var Product_Discovery = new Vivus('Product_Discovery', { duration: 100 });
	//var User_flow = new Vivus('User_flow', { duration: 100 });
	//var User_flow_half = new Vivus('User_flow', { duration: 100 });

	var Concept = new Vivus('Concept', { duration: 100 });
	var Moodboard = new Vivus('Moodboard', { duration: 100 });
	var Revisions = new Vivus('Revisions', { duration: 100 });
	var Presenation = new Vivus('Presenation', { duration: 100 });
	var Delivery_files = new Vivus('Delivery_files', { duration: 100 });

	function resetAll() {
		Brief.stop();
		Product_Discovery.stop();
		Concept.stop();
		Moodboard.stop();
		Revisions.stop();
		Presenation.stop();
		Delivery_files.stop();
		Brief.reset();
		Product_Discovery.reset();
		Concept.reset();
		Moodboard.reset();
		Revisions.reset();
		Presenation.reset();
		Delivery_files.reset();
		c_n_rem_blue();
	}

	function circle_start_point(e, width, SVG_target, SVG_cx_cy) {
		var pecent = 90 / width;
		var r = width / 2;
		var rect = e.target.getBoundingClientRect();
		var x = e.clientX - rect.left; //x position within the element.
		var y = e.clientY - rect.top;  //y position within the element.
		if (x < r && y < r) {
			if (x > y) {
				var rotate = "rotate(" + (45 + (x * pecent)) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			} else {
				var rotate = "rotate(" + (45 - y * pecent) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			}
		}
		if (x > r && y < r) {
			if ((x - r) > (y * 2)) {
				var rotate = "rotate(" + (90 + ((x - r) * pecent)) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			} else {
				var rotate = "rotate(" + (135 + y * pecent) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			}
		}

		if (x < r && y > r) {
			if ((x * 2) > y - r) {
				var rotate = "rotate(" + (270 + ((r - x) * pecent)) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			} else {

				var rotate = "rotate(" + (315 + (2 * r - y) * pecent) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			}
		}
		if (x > r && y > r) {
			if (x < y) {
				var rotate = "rotate(" + (270 + ((r - x) * pecent)) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			} else {
				var rotate = "rotate(" + (135 + y * pecent) + ", " + SVG_cx_cy + ")";
				document.getElementById(SVG_target).setAttribute("transform", rotate);
			}
		}
	}

	var c_n_revisions = document.getElementById('c_n_revisions');
	var c_n_moodboard = document.getElementById('c_n_moodboard');
	var c_n_concept = document.getElementById('c_n_concept');
	function c_n_to_blue() {
		c_n_revisions.className = "circle_name blue_font_color";
		c_n_moodboard.className = "circle_name blue_font_color";
		c_n_concept.className = "circle_name blue_font_color";
	}
	function c_n_rem_blue() {
		c_n_revisions.className = "circle_name ";
		c_n_moodboard.className = "circle_name ";
		c_n_concept.className = "circle_name ";
	}
	document.getElementById("Brief_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 100, "Brief_svg", "50, 50");
		Brief.play();
	})
	document.getElementById("Brief_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	document.getElementById("Product_Discovery_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 144, "Product_Discovery_svg", "71, 71");
		Product_Discovery.play();
	})
	document.getElementById("Product_Discovery_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	document.getElementById("Concept_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 182, "Concept_svg", "90, 90");
		circle_start_point(e, 180, "Moodboard_svg", "90, 90");
		circle_start_point(e, 180, "Revisions_svg", "90, 90");
		c_n_to_blue();
		Concept.play();
		Moodboard.play();
		Revisions.play();
	})
	document.getElementById("Concept_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	document.getElementById("Moodboard_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 182, "Concept_svg", "90, 90");
		circle_start_point(e, 180, "Moodboard_svg", "90, 90");
		circle_start_point(e, 180, "Revisions_svg", "90, 90");
		c_n_to_blue();
		Concept.play();
		Moodboard.play();
		Revisions.play();
	})
	document.getElementById("Moodboard_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	document.getElementById("Revisions_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 182, "Concept_svg", "90, 90");
		circle_start_point(e, 180, "Moodboard_svg", "90, 90");
		circle_start_point(e, 180, "Revisions_svg", "90, 90");
		c_n_to_blue();
		Concept.play();
		Moodboard.play();
		Revisions.play();
	})
	document.getElementById("Revisions_circle").addEventListener('mouseleave', function () {
		resetAll();;
	})

	document.getElementById("Presenation_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 128, "Presenation_svg", "64, 64");

		Presenation.play();
	})
	document.getElementById("Presenation_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	document.getElementById("Delivery_files_circle").addEventListener('mouseover', function (e) {
		resetAll();
		circle_start_point(e, 88, "Delivery_files_svg", "44, 44");

		Delivery_files.play();
	})
	document.getElementById("Delivery_files_circle").addEventListener('mouseleave', function () {
		resetAll();
	})

	function addRedLine(i) {
		document.getElementsByClassName('nav_links')[i].className = "nav_links line_add";
	}
	function remRedLine() {
		$(".nav_links").removeClass("line_add");
	}
	// SECTION 4 circles ef END


	var page_numb = document.getElementById("current_number");
	function scrollChecking() {
		if (document.body.scrollTop < Section1 || document.documentElement.scrollTop < Section1) {
			page_numb.innerHTML = "01";
			remRedLine()
		}
		if (document.body.scrollTop > Section1 - 100 || document.documentElement.scrollTop > Section1 - 100) {
			page_numb.innerHTML = "02";
			titleEffect(1);
			remRedLine()
			addRedLine(0);
			rail_cont_move(document.body.scrollTop, document.documentElement.scrollTop);
		}
		if (document.body.scrollTop > Section2 - 100 || document.documentElement.scrollTop > Section2 - 100) {
			page_numb.innerHTML = "03";
			titleEffect(2);
			resetAll();
			if (Rows == 2) {
				sliderEffect(0, 6);
			} else {
				sliderEffect(0, 1);
			}
			remRedLine()
			addRedLine(1);
		}
		if (document.body.scrollTop > Section3 - 100 || document.documentElement.scrollTop > Section3 - 100) {
			page_numb.innerHTML = "04";
			titleEffect(3);
			remRedLine()
			addRedLine(2);
		}
		if (document.body.scrollTop > Section4 - 300 || document.documentElement.scrollTop > Section4 - 300) {
			page_numb.innerHTML = "05";
			remRedLine()
			addRedLine(3);
		}
	}

	function titleEffect(i) {
		if (EffectChek[i] == true) {
			var tl = new TimelineLite({ delay: 0.2 }),
				firstBg = document.querySelectorAll('.bgN' + i),
				word = document.querySelectorAll('.words' + i);
			tl
				.to(firstBg, 0.3, { scaleX: 1, transformOrigin: "0% 100%" })
				.to(word, 0.2, { opacity: 1 })
				.to(firstBg, 0.3, { scaleX: 0, transformOrigin: "100% 0%" })
			EffectChek[i] = false;
		}
	}

	function sliderEffect(from, to) {
		sliderBg = document.querySelectorAll('.slider_el_bg');
		sliderImg = document.querySelectorAll('.slider_el_img');
		if (SliderEffectChek[from] == undefined) {
			for (var i = from; i < to; i++) {
				SE(sliderBg[i], sliderImg[i]);
				SliderEffectChek[i] = true;
			}
		}
		function SE(bg_el, img_el) {
			var sl = new TimelineLite({ delay: 0.2 });
			sl
				.to(bg_el, 0.3, { scaleX: 1, transformOrigin: "0% 100%" })
				.to(img_el, 0.2, { opacity: 1 })
				.to(bg_el, 0.3, { scaleX: 0, transformOrigin: "100% 0%" })
		}
	}
	var to_left = new TimelineMax();
	var to_right = new TimelineMax();
	var scrollPrevPos = 0;



	function rail_cont_move(pos1, pos2) {
		if (pos1 > 0) {
			if (scrollPrevPos < pos1) {
				move_left();
			} else {
				move_right();
			}
			scrollPrevPos = pos1;
		} else {
			if (scrollPrevPos < pos2) {
				move_left();
			} else {
				move_right();
			}
			scrollPrevPos = pos2;
		}
	}
	function move_right() {

		to_left.pause();
		to_right.play();
		to_right.staggerTo(
			".rail_group-container", 45, {
				cycle: {
					x: [2400]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
		setTimeout(function () {
			to_right.timeScale(1);
		}, 200);
		to_right.timeScale(1.8);
	}
	function move_left() {
		to_right.pause();
		to_left.play();
		to_left.staggerTo(
			".r_g_c", 45, {
				cycle: {
					x: [-2400]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
		setTimeout(function () {
			to_left.timeScale(1);
		}, 200);
		to_left.timeScale(1.8);
	}
	var tl3 = new TimelineMax();
	tl3.staggerTo(
		"#arrow_down", 3, {
			cycle: {
				y: [40]
			},
			repeat: -1,
			repeatDelay: 0,
			yoyo: false,
		},
		0.5
	);

	var mob_menu_is_hide = true;
	$('.nav_links').click(function () {
		hide_mob_menu();
	});
	function show_mob_menu() {
		var Smm = new TimelineMax();
		Smm
			.staggerTo("#mob_menu", 0.1, {
				top: "59px",
			})
			.to("#mob_menu_btn_svg", 0, {
				opacity: 0,
			})
			.to("#close_mob_menu_btn", 0.3, {
				opacity: 1,
			});
	}
	function hide_mob_menu() {
		var Smm = new TimelineMax();
		Smm
			.staggerTo("#mob_menu", 0, {
				top: "-1000px",
			})
			.to("#close_mob_menu_btn", 0, {
				opacity: 0,
			})
			.to("#mob_menu_btn_svg", 0.3, {
				opacity: 1,
			});
	}

	document.getElementById('mob_menu_btn').addEventListener('click', function () {
		if (mob_menu_is_hide) {
			show_mob_menu();
			mob_menu_is_hide = false;
		} else {
			hide_mob_menu();
			mob_menu_is_hide = true;

		}
	});

	addTitleEffects();

	window.onload = function () {
		scrollChecking();
		resetAll();
	}

});
