'use strict';

$(document).ready(function () {

	"use strict";

	var objStr = localStorage.getItem('ProgrammingTest');
	var testBase = JSON.parse(objStr);

	var htmlText = $('#guestTempl').html();
	var content = tmpl(htmlText, testBase);
	$('body').append(content);

	$('.rez__button').click(Rez); // проверить результаты теста

	function Rez() {

		var ansAll = $("input:radio:checked");

		var flag = 0;

		if (ansAll.length == testBase.qBase.length) {
			flag = 1;
		} else {
			alert('Вы ответили не на все вопросы. Выберите вариант ответа.');
			return;
		};

		for (var i = 0; i < testBase.qBase.length; i++) {

			var rightOtv = testBase.qBase[i].ansId; // номер правильного ответа
			var rightOtvId = '' + i + rightOtv; // id правильного ответа

			rightOtv -= 1; // потому что индекс массива начинается с 0

			if (rightOtvId == $(ansAll[i]).attr('id')) {

				testBase.result += 1;
				testBase.log += '<p> ' + testBase.qBase[i].qText + ': ' + testBase.qBase[i].answers[rightOtv] + ' </p>';
			}
		}

		if (testBase.result == 0) {

			$('#modal_text').html('<p><b>Ваш балл - 0.</b></p><br><p>Тест не пройден!</p>');
		} else {

			$('#modal_text').html('<p><b>Ваш балл -  ' + testBase.result + '.</b></p>\n\t\t\t\t\t\t\t\t\t   <p>Правильные ответы:</p>  ' + testBase.log);
		}

		$('#overlay').fadeIn(400, function () {
			$('#modal_form').css('display', 'block').animate({ opacity: 1, top: '50%' }, 200);
		});

		$('#modal_close, #overlay').click(function () {
			$('#modal_form').animate({ opacity: 0, top: '45%' }, 200, function () {
				$(this).css('display', 'none');
				$('#overlay').fadeOut(400);
			});

			$('#modal_text').html('');
			testBase.result = 0;
			testBase.log = '';
			$("input:radio").attr('checked', false); // обнулили радиобоксы
		});
	};
});
