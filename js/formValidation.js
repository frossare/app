$(function () {
	$("#input1").change(function () {
		if ($("#input1")[0].validity.valid == true) {
			of_labels()
			$(".in1").css("opacity", "0");
			form_val.name = $("#input1")[0].value;
		} else {
			$(".in1").css("opacity", "1");
			form_val.name = "";
		}
	});
	$("#input2").change(function () {
		if ($("#input2")[0].validity.valid == true) {
			of_labels()
			$(".in2").css("opacity", "0");
			form_val.com_name = $("#input2")[0].value;
		} else {
			$(".in2").css("opacity", "1");
			form_val.com_name = "";
		}
	});
	$("#input3").change(function () {
		if ($("#input3")[0].validity.valid == true) {
			of_labels()
			$(".in3").css("opacity", "0");
			form_val.email = $("#input3")[0].value;
		} else {
			$(".in3").css("opacity", "1");
			form_val.email = "";
		}
	});
	$("#input4").change(function () {
		if ($("#input4")[0].value.length > 3) {
			of_labels()
			$(".in4").css("opacity", "0");
			form_val.phone = $("#input4")[0].value;
		} else {
			$(".in4").css("opacity", "1");
			form_val.phone = "";
		}
	});
	$("#input5").change(function () {
		if ($("#input5")[0].validity.valid == true) {
			of_labels()
			$(".in5").css("opacity", "0");
			form_val.message = $("#input5")[0].value;
		} else {
			$(".in5").css("opacity", "1");
			form_val.message = "";
		}
	});
	var form_val = {
		name: "",
		com_name: "",
		email: "",
		phone: "",
		message: "",
	}

	document.getElementsByClassName('blue_btn')[0].addEventListener('click', function () {
		if (form_val.name == "" || form_val.com_name == "" || form_val.email == "" || form_val.phone == "" || form_val.message == "") {
			location.href = './error.html';
		} else {
			location.href = './thanks.html';
		}
	})

});



// label effects
var input_lable_name = ["#name_l", "#com_name_l", "#email_l", "#phone_l", "#message_l"];

var i_n = new TimelineMax();
var i_c_n = new TimelineMax();
var i_e = new TimelineMax();
var i_ph = new TimelineMax();
var i_m = new TimelineMax();
var all_inputs = new TimelineMax();
function of_labels() {
	for (var i = 0; i < input_lable_name.length; i++) {
		if ($("#input" + (i + 1))[0].value.length == 0) {
			all_inputs
				.to(
					input_lable_name[i], 0, {
						opacity: 0,
					});
		};
	};

	i_n.stop(); i_c_n.stop(); i_e.stop(); i_ph.stop(); i_m.stop();
};

function input_name(el) {
	of_labels();
	i_n.play();
	i_n
		.to(
			"#name_l", 1, {
				opacity: 1
			})
		.staggerTo(
			"#name_l", 1, {
				cycle: {
					y: [-5]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
};
function input_com_name() {
	of_labels();
	i_c_n.play();
	i_c_n
		.to(
			"#com_name_l", 1, {
				opacity: 1
			})
		.staggerTo(
			"#com_name_l", 1, {
				cycle: {
					y: [-5]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
}
function input_email() {
	of_labels();
	i_e.play();
	i_e
		.to(
			"#email_l", 1, {
				opacity: 1
			})
		.staggerTo(
			"#email_l", 1, {
				cycle: {
					y: [-5]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
}
function input_phone() {
	of_labels();
	i_ph.play();
	i_ph
		.to(
			"#phone_l", 1, {
				opacity: 1
			})
		.staggerTo(
			"#phone_l", 1, {
				cycle: {
					y: [-5]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
}
function input_message() {
	of_labels();
	i_m.play();

	i_m
		.to(
			"#message_l", 1, {
				opacity: 1
			})
		.staggerTo(
			"#message_l", 1, {
				cycle: {
					y: [-5]
				},
				repeat: -1,
				repeatDelay: 0,
				yoyo: false,
			},
			0.1
		);
}
// label effects	END


