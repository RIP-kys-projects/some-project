/**
 * Created by andreiGladkov on 20.08.15.
 */
modules.define('popup-open', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup) {
	provide(BEMDOM.decl(this.name,
		{
			/* методы экземпляра */
			onSetMod: {
				'js': {
					'inited': function() {
						var i, lengthPopup;

						this._popups = this.findBlockOutside('page').findBlocksInside('popup');
						lengthPopup = this._popups.length;

						for (i = 0; i < lengthPopup; i++) {
							if (this._popups[i].params.popup === this.params.popup) {
								this._currentPopup = this._popups[i];
								break;
							}
						}

						this.bindTo('click', function(e) {
							this._onClick(e);
						});
					}
				}
			},
			/**
			 * Open popup in i-bem params
			 * this.params.popup - current popup to open
			 * @param e
			 * @private
			 */
			_onClick: function(e) {
				var self = this;

				popup.open(this._currentPopup);

				/**
				 * Closing Event popup by clicking on background.
				 * It is common for all the popup.
				 */
				$('.popup__background').on('click', function() {

					popup.close(self._currentPopup);
					$('.popup__background').off('click');
				});
			}
		}))
});

