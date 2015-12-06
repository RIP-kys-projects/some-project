modules.define('jquery', function(provide, jQuery) {
	/*borschik:include:../../js/jquery.validate.min.js*/
	provide(jQuery);

});

modules.define('form', ['i-bem__dom', 'jquery'], function(provide, BEMDOM) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {
					}
				}
			}
		},
		{
			/* статические методы */
		}));
});

modules.require(['jquery', 'form'], function($, form) {

	$.validator.addMethod("mail", function(value, element) {
		var regex = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
		return regex.test(value);
	});

	$.validator.addMethod("valueNotEquals", function(t, n, r) {
		return t != r
	}, $.validator.format("Invalid val is supplied."));
	/**
	 * Валидация формы
	 * Заявки на включение компании в каталог спец.предложений
	 */
	if ($('.js-valiadate-request-special-offer').length) {
		$('.js-valiadate-request-special-offer').validate(
			{
				debug: false,
				errorPlacement: function(error, element) {
					$('.form-item').has(element).find('.form__error').html(error);
					$('.form-item').has(element).find('.form__error').show();
					$('.form-item').has(element).find('.form__hint').hide();
					$('.form-item').has(element).removeClass('valid');
				},
				success: function(element) {
					element.parent().hide();
					$('.form-item').has(element).addClass('valid');
					$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
				},
				onfocusout: function(element) {
					this.element(element);
					var errorElem = $('input.error', this.currentForm);

					for (var i = 0; i < errorElem.length; i++) {
						if ($(errorElem[i]).attr('aria-invalid') == 'true'
							|| $(errorElem[i]).attr('aria-invalid') == undefined) {
							$('.form-item').has(errorElem[i]).find('.form__error').show();
							$('.form-item').has(errorElem[i]).find('.form__hint').hide();
							$('.form-item').has(errorElem[i]).removeClass('valid');
						}
						else {
							$('.form-item').has(errorElem[i]).find('.form__error').hide();
							$('.form-item').has(errorElem[i]).addClass('valid');
						}
					}
				},
				highlight: function(element, errorClass, validClass) {
					$(element).addClass(errorClass).removeClass(validClass);
					$('.form-item').has($(element)).find('.form__error').show();
					if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
						$(element).parent().addClass('error');
					}
				},
				unhighlight: function(element, errorClass, validClass) {
					$(element).removeClass(errorClass).addClass(validClass);
					$('.form-item').has($(element)).find('.form__error').hide();
					if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
						$(element).parent().removeClass('error');
					}
				},
				ignore: ".ignore",
				focusCleanup: true,
				//TODO указать реальные имена полей
				rules: {
					city: {
						required: true
					},
					category: {
						required: true
					},
					company: {
						required: true
					},
					career: {
						required: true
					},
					'year-of-incorporation': {
						required: true
					},
					'year-of-alfabank': {
						required: true
					},
					user: {
						required: true
					},
					tel: {
						required: true,
						minlength: 13,
						maxlength: 13,
						keydown: false
					},
					mail: {
						required: true,
						mail: true
					},
					site: {
						required: true,
						url: true
					},
					'description': {
						required: true
					},
					inn: {
						required: true,
						minlength: 9,
						maxlength: 12,
						number: true
					}
				},
				messages: {
					city: {
						required: "Выберите город"
					},
					category: {
						required: "Укажите отрасль."
					},
					company: {
						required: 'Укажите название компании'
					},
					career: {
						required: 'Укажите род деятельности'
					},
					'year-of-incorporation': {
						required: 'Укажите год основания компании'
					},
					'year-of-alfabank': {
						required: 'Укажите год открытия счета в Альфа-Банке'
					},
					user: {
						required: 'Укажите контактное лицо'
					},
					tel: {
						required: "Должно быть 10 цифр, например: 901 123-45-67",
						minlength: "Телефон указан неверно, слишком короткий",
						maxlength: "Телефон указан неверно, слишком длинный "
					},
					mail: {
						required: "Формат example@mail.ru",
						mail: "Указан недопустимый email"
					},
					site: {
						required: "Например http://example.ru",
						url: 'Формат http://example.ru или https://example.ru '
					},
					'description': {
						required: 'Укажите описание спец.предложения для клиентов Альфа-Банка (скидка не менее 10%)'
					},
					'inn': {
						required: "Укажите ИНН.",
						number: "ИНН не может содержать буквы",
						minlength: "Вы указали слишком мало символов",
						maxlength: "ИНН не может превышать 12 цифр"
					}
				}
			}
		);
	}

	/**
	 * Валидация формы стать клиентом Альфа-Банка
	 * страница сервисов
	 */
	if ($('.form_validate_feedback-free').length) {
		$(".form_validate_feedback-free").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		})
	}

	if ($('.js-knopka-form').length) {
		(function(window, document, script) {

			var knopkaHost = "knopka.com";

			window._knaq = window._knaq || [];
			_knaq.push(["setKnopkaHost", knopkaHost]);
			_knaq.push(["trackPageView"]);
			_knaq.push(["loadLanding"]);

			var firstScriptElem = document.getElementsByTagName(script)[0];
			var scriptElem = document.createElement(script);
			scriptElem.type = "text/javascript";
			scriptElem.async = true;
			scriptElem.src = "//" + knopkaHost + "/external/tracker/tracker.js";
			firstScriptElem.parentNode.insertBefore(scriptElem, firstScriptElem);

		})(window, document, "script");

		$(document).ready(function() {

			var form = $('.js-knopka-form').first();
			var successCont = form.find('.knopkasuccess');
			var errorCont = form.find('.knopkaerror');

			function KnopkaShowSuccess(message) {
				errorCont.hide();
				successCont.html(message).show();
			}

			function KnopkaShowError(message) {
				successCont.hide();
				errorCont.html(message).show();
			}

			form.submit(function(e) {
				e.preventDefault();

				if (!window.knopka || !window.knopka.saveLead) {
					KnopkaShowError("Что-то пошло не так. Попробуйте позже.");
					return;
				}

				var phone = $(this).find('input[name=phone]').val();

				window.knopka.saveLead({'phone': phone}, function(error, result) {
					if (error) {
						if (error.reason === "phone") {
							KnopkaShowError("Неправильный телефон");
						}
						else {
							KnopkaShowError("Что-то пошло не так. Попробуйте позже.");
						}
					}
					else {
						KnopkaShowSuccess("Все хорошо.");
					}
				});

			});
		});
	}

	/* added on 25.11.2015 */
	/**
	 * Валидация формы на странице сервиса hh
	 */
	if($('.form_validate_hh-free').length){
		$(".form_validate_hh-free").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element){
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var  errorElem = $('input.error, div.error', this.currentForm);
						for(var i = 0; i < errorElem.length; i++){
							if($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined){
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else{
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}

					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if($(element).prop("tagName").toUpperCase() == 'SELECT'){
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if($(element).prop("tagName").toUpperCase() == 'SELECT'){
							$(element).parent().removeClass('error');
						}
					},

					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name : {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail : {
							required: true,
							mail: true
						},
						company : {
							required: true
						},
						inn : {
							required: true,
							minlength: 9,
							maxlength: 12,
							number: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name : {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий" ,
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail : {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						company : {
							required: "Укажите компанию"
						},
						inn : {
							required: "Укажите ИНН.",
							number: "ИНН не может содержать буквы",
							minlength: "Вы указали слишком мало символов",
							maxlength: "ИНН не может превышать 12 цифр"
						}
					}
				}
			)
		});

		$('select[name="region"]').change(function(){
			if(this.value.length > 0){
				$('.form-item').has(this).find('.form__error').hide();
				$('.form-item').has(this).find('.jq-selectbox').removeClass('error');
				$('.form-item').has(this).find('.form__hint').hide();
			}
		});
	}

	/**
	 * Валидация формы Nethouse
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_nethouse-discount').length) {
		$(".form_validate_nethouse-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						promo:{
							required: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						promo: {
							required: 'Укажите промо-код'
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы HeadHunters
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_hh-discount').length) {
		$(".form_validate_hh-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						}
					}
				}
			)
		})
	}

	/**
	 * Валидация формы AmoCRM
	 * страница сертификатов 26.11.2015
	 */
	if ($('.form_validate_amocrm-discount').length) {
		$(".form_validate_amocrm-discount").each(function() {
			$(this).validate(
				{
					debug: false,
					errorPlacement: function(error, element) {
						$('.form-item').has(element).find('.form__error').html(error);
						$('.form-item').has(element).find('.form__error').show();
						$('.form-item').has(element).find('.form__hint').hide();
						$('.form-item').has(element).removeClass('valid');
					},
					success: function(element) {
						element.parent().hide();
						$('.form-item').has(element).addClass('valid');
						$('.form-item').has(element).find('.jq-selectbox').removeClass('error');
					},
					onfocusout: function(element) {
						this.element(element);
						var errorElem = $('input.error', this.currentForm);

						for (var i = 0; i < errorElem.length; i++) {
							if ($(errorElem[i]).attr('aria-invalid') == 'true'
								|| $(errorElem[i]).attr('aria-invalid') == undefined) {
								$('.form-item').has(errorElem[i]).find('.form__error').show();
								$('.form-item').has(errorElem[i]).find('.form__hint').hide();
								$('.form-item').has(errorElem[i]).removeClass('valid');
							}
							else {
								$('.form-item').has(errorElem[i]).find('.form__error').hide();
								$('.form-item').has(errorElem[i]).addClass('valid');
							}
						}
					},
					highlight: function(element, errorClass, validClass) {
						$(element).addClass(errorClass).removeClass(validClass);
						$('.form-item').has($(element)).find('.form__error').show();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().addClass('error');
						}
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).removeClass(errorClass).addClass(validClass);
						$('.form-item').has($(element)).find('.form__error').hide();
						if ($(element).prop("tagName").toUpperCase() == 'SELECT') {
							$(element).parent().removeClass('error');
						}
					},
					ignore: ".ignore",
					focusCleanup: true,
					rules: {
						region: {
							required: true
						},
						name: {
							required: true
						},
						tel: {
							required: true,
							minlength: 13,
							maxlength: 13,
							keydown: false
						},
						mail: {
							required: true,
							mail: true
						},
						password: {
							required: true,
							minlength: 8
						}
					},
					messages: {
						region: {
							required: "Выберите город"
						},
						name: {
							required: 'Укажите контактное лицо'
						},
						tel: {
							required: "Должно быть 10 цифр, например: 901 123-45-67",
							minlength: "Телефон указан неверно, слишком короткий",
							maxlength: "Телефон указан неверно, слишком длинный "
						},
						mail: {
							required: "Формат example@mail.ru",
							mail: "Указан недопустимый email"
						},
						password: {
							required: "Вы не указали пароль",
							minlength: "Минимальная длина - 8 символов"
						}
					}
				}
			)
		})
	}

});