
$("#input1").change(function () {
	if ($("#input1")[0].value.length > 3) {
		of_labels()
		$(".in1").css("opacity", "0");
		form_val.name = $("#input1")[0].value;
	} else {
		$(".in1").css("opacity", "1");
	}

});
$("#input2").change(function () {
	if ($("#input2")[0].value.length > 3) {
		of_labels()
		$(".in2").css("opacity", "0");
		form_val.com_name = $("#input2")[0].value;
	} else {
		$(".in2").css("opacity", "1");
	}
});
$("#input3").change(function () {
	if ($("#input3")[0].value.length > 3) {
		of_labels()
		$(".in3").css("opacity", "0");
		form_val.email = $("#input3")[0].value;
	} else {
		$(".in3").css("opacity", "1");
	}
});
$("#input4").change(function () {
	if ($("#input4")[0].value.length > 3) {
		of_labels()
		$(".in4").css("opacity", "0");
		form_val.phone = $("#input4")[0].value;
	} else {
		$(".in4").css("opacity", "1");
	}
});
$("#input5").change(function () {
	if ($("#input5")[0].value.length > 3) {
		of_labels()
		$(".in5").css("opacity", "0");
		form_val.message = $("#input5")[0].value;
	} else {
		$(".in5").css("opacity", "1");
	}
});
var form_val = {
	name: "",
	com_name: "",
	email: "",
	phone: "",
	message: "",
}

// label effects
var all_inputs = new TimelineMax();
function of_labels() {
	all_inputs
		.to(
			".label-helper", 1, {
				opacity: 0
			})
};

function input_name(el) {
	of_labels();
	var i_n = new TimelineMax();
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
	var i_c_n = new TimelineMax();
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
	var i_e = new TimelineMax();
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
	var i_ph = new TimelineMax();
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
	var i_m = new TimelineMax();
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
document.getElementsByClassName('blue_btn')[0].addEventListener('click', function () {
	if (form_val.name == "" || form_val.com_name == "" || form_val.email == "" || form_val.phone == "" || form_val.message == "") {

		location.href = './error.html';

	} else {
		location.href = './thanks.html';
	}

})
