$(document).ready(function() {

	// when i click on button#one I want the integer 1 to go inside output screen
	function clearAll(){
		$('#output-screen').empty();
	};
	function clearLast(){
		$('#output-screen').text(function (_,txt) {
   			 return txt.slice(0, -1);
		});
	};
	/******this was my thought process before finding jquery is a calculator******/
	// function add(){
	// 	var currentOutput = $('#output-screen').text();
	// 	var oldNumber = currentOutput; 
	// 	clearAll();
	// 	console.log(oldNumber);

	// };
	function sum(){
		var output = $('#output-screen').text();
		console.log(output);
		var sumTotal = eval(output);
		console.log(sumTotal);
		$('#output-screen').empty();
		$('#output-screen').append(sumTotal);
		$('#output-screen').css({"font-size": "3em", "text-align": "center"});
	};
	function integerOutput(currentNumber) {
		$('#output-screen').append(currentNumber);
	};
	function flashSkin(){
		$('#calculator-skin').css({
				"background": "url('img/flash_calculator_skin.jpg')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": "rgba(128, 0, 0, .8)",
			"color": "yellow",
		});
		$('#operator_button_area').css({
			"background-color": "rgba(128, 0, 0, .4)",
		});	
		$('button#equal').css({
			"background-color": "maroon",
			"color": "yellow",
		});
	}
	function batSkin(){
		$('#calculator-skin').css({
				"background": "url('img/batman_calc_skin.png')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": "rgba(0, 0, 50, .8)",
			"color": "white",
		});
		$('#operator_button_area').css({
			"background-color": "rgba(0, 0, 50, .4)",
		});	
		$('button#equal').css({
			"background-color": "rgba(0, 0, 50, .4)",
			"color": "white",
		});
	}
	function lanternSkin() {
		var primaryColor = "#025643";
		var opaqueSecond = "rgba(12,180, 100, .7)";
		$('#calculator-skin').css({
				"background": "url('img/idris_lantern.jpg')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": opaqueSecond,
			"color": "white",
		});
		$('#operator_button_area').css({
			"background-color": opaqueSecond,
		});	
		$('button#equal').css({
			"background-color": primaryColor,
			"color": "white",
		});
	}
	function jokerSkin() {
		$('#calculator-skin').css({
				"background": "url('img/leto_joker_calc_skin.png')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": "rgba(0, 0, 50, .8)",
			"color": "white",
		});
		$('#operator_button_area').css({
			"background-color": "rgba(0, 0, 50, .4)",
		});	
		$('button#equal').css({
			"background-color": "rgba(0, 0, 50, .4)",
			"color": "white",
		});
	}
	function revFlashSkin() {
		$('#calculator-skin').css({
				"background": "url('img/rev_flash_skin.jpg')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": "rgba(128, 0, 0, .8)",
			"color": "yellow",
		});
		$('#operator_button_area').css({
			"background-color": "rgba(128, 0, 0, .4)",
		});	
		$('button#equal').css({
			"background-color": "maroon",
			"color": "yellow",
		});
	}
	function sinestroSkin(){
		$('#calculator-skin').css({
				"background": "url('img/sinestro.png')",
				"-webkit-background-size": "cover",
				"background-size": "cover",
		});
		$('#output-screen').css({
			"background-color": "rgba(128, 0, 0, .8)",
			"color": "yellow",
		});
		$('#operator_button_area').css({
			"background-color": "rgba(128, 0, 0, .4)",
		});	
		$('button#equal').css({
			"background-color": "maroon",
			"color": "yellow",
		});
	}
	$('#integer-buttons button').on('click', function() {
		var buttonNumber = $(this).text();
		console.log(buttonNumber);
		integerOutput(buttonNumber);
	});
	$('.operator_text button').on('click', function() {
		var buttonNumber = $(this).text();
		console.log(buttonNumber);
		integerOutput(buttonNumber);
	});
	$('#equal').on('click', sum);
	$('#clear_all').on('click', clearAll);
	$('#clear_last').on('click', clearLast);
	$("select#character_select").on('change', function(){
		var characterSelect = $(this).val();
		console.log(characterSelect);
		if (characterSelect === "lanternSkin") {
			lanternSkin();
		} 
		if (characterSelect === "batSkin") {
			batSkin();
		}
		if (characterSelect === "flashSkin") {
			flashSkin();
		}
		if (characterSelect === "jokerSkin") {
			jokerSkin();
		}
		if (characterSelect === "revFlashSkin") {
			revFlashSkin();
		}
		if (characterSelect === "sinestroSkin") {
			sinestroSkin();
		}

	})
	$('#heroes_button').on('click', function(){
		$('#character_select').show();
		$('.hero').show();
		$('.villain').hide();
	})
	$('#villains_button').on('click', function(){
		$('#character_select').show();
		$('.hero').hide();
		$('.villain').show();
	})
	// $('button#flash').on('click', flashSkin);
	// $('button#batman').on('click', batSkin);
	// $('button#green-lantern').on('click', lanternSkin);
	// $('#joker').on('click')
});