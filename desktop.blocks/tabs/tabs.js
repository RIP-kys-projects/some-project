modules.define('tabs', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
	provide(BEMDOM.decl(this.name, {
		//методы экземпляра блока
		onSetMod: {
			'js': {
				'inited': function() {
					var self = this,
						$elemBtn;
					//Если табы выполняют функцианал js
					//data-bem="{"tabs":{"tabs":true}}
					this._currentValue = '';

					if (this.params.tabs) {

						console.log('this: ', this);/*-----------------*/

						this.bindTo(this.elem('btn'), 'click', function(e) {

							console.log("this.elem('btn'): ", this.elem('btn'));/*-----------------*/

							this.delMod(this.elem('btn'), 'selected');
							this.itemOnclick(e);
						});

						for (var i = 0; i < this.elem('btn').length; i++) {
							$($(this.elem('btn')[i]).attr('href')).css('display', 'none');
						}

						$($(this.elem('btn', 'selected')[0]).attr('href')).css('display', 'block');
						this.setCurrentValue($(this.elem('btn', 'selected')[0]).attr('href'));
						this.bemBlock = 'tabs-' + this.params.type;
						this._dataAttr = 'data-' + this.params.type;
						this.emit('change');
					}

					if (this.params.controls) {

						$elemBtn = this.elem('btn').map(function(i, elem) {
							if (elem.getAttribute('data-js') !== 'none') {
								return elem;
							}
						});

						this.bindTo($elemBtn, 'click', function(e) {
							this.delMod(this.elem('btn'), 'selected');
							this.itemOnclick(e);
						});

						this.setCurrentValue($(this.elem('btn', 'selected')[0]).attr('href'));
						this.bemBlock = 'tabs-' + this.params.type;
						this._dataAttr = 'data-' + this.params.type;
						this.emit('change');
					}

					/*If tabs frame nav*/
					if (this.params.frame) {
						this._boolMod = true;
						this._coordsTab = this._getCoords().top;
						this.heightHeader = this.findBlockOutside('page').findBlockInside('top-navigation').domElem[0].offsetHeight;
						this._paddingTop = parseInt(this.getStyle(this.domElem[0], "padding-top"), 10);
						this._pageScroll();

						$(window).scroll(function() {
							self._pageScroll();
						});

					}

					this.bindTo(this.elem('btn'), 'mouseover', function(e) {
						this.itemMouseover(e);
					});

					this.bindTo(this.elem('btn'), 'mouseout', function(e) {
						this.itemMouseOut(e);
					});

					if (this.params.hashchange) {
						this._hashchangeInit();
					}

					$(window).resize(function() {
						self._coordsTab = self._getCoords().top;
					});

				}
			}
		},
		/**
		 * Getting the coordinates tab relative to the window
		 * @returns {{top: number}}
		 * @private
		 */
		_getCoords: function() {
			var box = this.domElem[0].getBoundingClientRect(),
				body = document.body,
				top,
				docEl = document.documentElement,
				scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop,
				clientTop = docEl.clientTop || body.clientTop || 0;

			top = box.top + scrollTop - clientTop;

			return {
				top: top
			};

		},
		/**
		 * Event window scroll
		 * @private
		 */
		_pageScroll: function() {
			var top = window.pageYOffset || document.documentElement.scrollTop,
				HEIGHT_HEADER = this.findBlockOutside('page').findBlockInside('top-navigation').domElem[0].offsetHeight;

			top += HEIGHT_HEADER;

			if (this._boolMod && top >= this._coordsTab) {
				this._boolMod = false;
				this.setMod('scrolled');
			} else if (top <= this._coordsTab) {
				this.delMod('scrolled');
				this._boolMod = true;
			}
		},

		itemOnclick: function(e) {
			var eventTarget = e.target || e.srcElement,
				top = $(window).scrollTop(),
				href = $(eventTarget).attr('href');

			this.setCurrentValue(href);
			this.emit('change'); /* /KYS-comment:\ we generate this BEM-event to have possibilities in future */
			$(eventTarget).addClass('tabs__btn_selected');

			for (var i = 0; i < this.elem('btn').length; i++) {
				$($(this.elem('btn')[i]).attr('href')).css('display', 'none');
			}

			$(href).css('display', 'block');

			if (this.params.hashchange) { /* /KYS-comment:\ russian -  http://y3x.ru/2011/06/hashchange/ */
				window.location.hash = href;
				$(window).scrollTop(top);
				e.preventDefault();
				return false;
			}

			if (this.params.frame) {
				this.scrollToTab(eventTarget);
			}
			e.preventDefault();
			return false;
		},

		/* /KYS-comment:\ "itemMouseover" works only for element, that is not selected */
		itemMouseover: function(e) {
			var eventTarget = e.target || e.srcElement;

			if (!$(eventTarget).hasClass('tabs__btn tabs__btn_selected')) {
				$(this.findElem('btn', "selected", true)[0]).addClass('tabs__btn_hover_none');
				$('.tabs__btn_hover').removeClass('tabs__btn_hover');
				$(eventTarget).addClass('tabs__btn_hover');

				//console.log('itemMouseOver has worked');
			}
		},

		itemMouseOut: function(e) {
			$('.tabs__btn_hover_none').removeClass('tabs__btn_hover_none');
			$('.tabs__btn_hover').removeClass('tabs__btn_hover');

			//console.log('itemMouseOut has worked');
		},

		_hashchangeInit: function() {
			var hash = window.location.hash,
				top = $(this.domElem[0]).offset().top - (86 + 35);

			if (hash) {
				for (var i = 0; i < this.elem('btn').length; i++) {
					$($(this.elem('btn')[i]).attr('href')).css('display', 'none');
					if (hash == '#' + $(this.elem('btn')[i].href.split('#'))[1]) { /* /KYS-comment:\ зачем Андрей сплитил? */
						$('.tabs__btn_selected').removeClass('tabs__btn_selected');
						$($(this.elem('btn')[i])).addClass('tabs__btn_selected');
					}
				}

				$(hash).css('display', 'block');

				if (top) {
					this._animate({
						duration: 500,
						delta: this._delta,
						delay: 15,
						scrollTop: function(progress) {
							window.scrollTo(0, top * progress);
						}
					});
				}
			}

		},
		/**
		 * Scroll window to tab content
		 * @param eventTarget
		 */
		scrollToTab: function(eventTarget) {
			var href = eventTarget.href,
				idTab = href.slice(href.indexOf('#') + 1),
				windowScroll = window.pageYOffset || document.documentElement.scrollTop,
				top = document.getElementById(idTab).getBoundingClientRect().top,
				HEIGHT_HEADER = this.findBlockOutside('page')
						.findBlockInside('top-navigation').domElem[0].offsetHeight + this._paddingTop;

			if (top <= HEIGHT_HEADER) {
				this._animate({
					duration: 300,
					delta: this._delta,
					delay: 15,
					scrollTop: function(progress) {
						var val = windowScroll + (top * progress) - HEIGHT_HEADER;
						window.scrollTo(0, val);
					}
				});
			}
		},
		/**
		 * Get computed style
		 * @param oElm
		 * @param strCssRule
		 * @returns {string}
		 */
		getStyle: function(oElm, strCssRule) {
			var strValue = "";
			if (document.defaultView && document.defaultView.getComputedStyle) {
				strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
			}
			else if (oElm.currentStyle) {
				strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
					return p1.toUpperCase();
				});
				strValue = oElm.currentStyle[strCssRule];
			}
			return strValue;
		},

		_delta: function(progress) {
			return progress;
		},

		_animate: function(opts) {

			var start = new Date();

			var timer = setInterval(function() {

				var progress = (new Date() - start) / opts.duration;

				if (progress > 1) {
					progress = 1;
				}

				// отрисовать анимацию
				opts.scrollTop(opts.delta(progress));

				if (progress === 1) {
					clearInterval(timer);
				}

			}, opts.delay || 10);


		},
		/**
		 * Set current value tabs
		 * in private property
		 * @param value
		 */
		setCurrentValue: function(value) {
			this._currentValue = value.slice(1);

			//console.log('setCurrentValue ', this._currentValue);
		},
		/**
		 * Return current value tabs
		 * in private property
		 * @returns {*|_currentValue}
		 */
		getCurrentValue: function() {
			//console.log('getCurrentValue ', this._currentValue);
			return this._currentValue;
		},
		/**
		 * Return data attribute
		 * filter name
		 * @returns {string}
		 */
		getDataAttr: function() {
			//console.log('getDataAttr ', this._dataAttr);
			return this._dataAttr;
		}
	}))
});