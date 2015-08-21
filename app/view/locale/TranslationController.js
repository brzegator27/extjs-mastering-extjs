Ext.define('Packt.view.locale.TranslationController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.translation',

	onMenuItemClick: function(item, e, options) {
		console.log('tat');
		var menu = this.getView();	// Scope this to menu, czyli podobiekt obiektu button - wniosek na postawie button = this.getView(); z funkcji init z tego obiektu

		menu.setIconCls(item.iconCls);
		menu.setText(item.text);

		localStorage.setItem("user-lang", item.iconCls);

		window.location.reload();
	},

	init: function() {
		var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en',
			button = this.getView();

		button.setIconCls(lang);

		if (lang == 'en') {
			button.setText('English');
		} else if (lang == 'es') {
			button.setText('Espaniol');
		} else if (lang == 'pt_BR') {
			button.setText('Portugues');
		}
	}
});