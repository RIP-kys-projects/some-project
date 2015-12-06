/**/
/*-------------------------------------------- Иммитация изменение из Php --------------------------------------------*/
/**/
modules.define('popup-load-first', ['i-bem__dom', 'jquery', 'popup'], function(provide, BEMDOM, $, popup) {
    provide(BEMDOM.decl(this.name,
        {
            /* методы экземпляра */
            onSetMod: {
                'js': {
                    'inited': function() {

                        var k = this.findBlockInside('main-pop');
                        k.setMod('come-on-baby');
                    }
                }
            }
        }))
});

