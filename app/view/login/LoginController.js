Ext.define('Packt.view.login.LoginController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.login',

	requires: [
		'Packt.util.Util',
		'Packt.view.login.CapsLockTooltip',
		'Packt.util.SessionMonitor'
	],

	onTextFieldSpecialKey: function(field, e, options) {},
	onTextFieldKeyPress: function(field, e, options){ },
	onButtonClickCancel: function(button, e, options){
		this.lookupReference('form').reset();
	},
	onButtonClickSubmit: function(button, e, options){
		var me = this,
			form = this.lookupReference('form');

		if(form.isValid()) {
			me.doLogin();
		}
	},
	doLogin: function() {
		var me = this,
			form = me.lookupReference('form'),
			view = me.getView();

		view.mask('Authenticating, please wait... moj tekst');

		form.submit({
			clientValidation: true,
			url: 'php/security/login.php',
			scope: me,
			success: 'onLoginSuccess',
			failure: 'onLoginFailure'
		});
	},
	onLoginFailure: function(form, action) {
		console.log(action);

		// var result = Ext.JSON.decode(action.response.responseText, true);

		// if( ! result) {
		// 	result = {};
		// 	result.success = false;
		// 	result.msg = action.response.responseText;
		// }

		var result = Packt.util.Util.decodeJSON(action.response.responseText),
			view = this.getView();

		view.unmask();

		switch(action.failureType) {
			case Ext.form.action.Action.CLIENT_INVALID:
				Packt.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
			break;
			case Ext.form.action.Action.CONNECT_FAILURE:
				Packt.util.Util.showErrorMsg(action.response.responseText);
			break;
			case Ext.form.action.Action.SERVER_INVALID:
				Packt.util.Util.showErrorMsg(result.msg);
		}

		// switch(action.failureType) {
		// 	case Ext.form.action.Action.CLIENT_INVALID:
		// 		Ext.Msg.show({
		// 			title: 'Error!',
		// 			msg: 'Form fields may not be submitted with invalid values',
		// 			icon: Ext.Msg.ERROR,
		// 			buttons: Ext.Msg.onTextFieldKeyPress
		// 		});
		// 	break;
		// 	case Ext.form.action.Action.CONNECT_FAILURE:
		// 		Ext.Msg.show({
		// 			title:'Error!',
		// 			msg: 'Form fields may not be submitted with invalid values',
		// 			icon: Ext.Msg.ERROR,
		// 			buttons: Ext.Msg.OK
		// 		});
		// 	break;
		// 	case Ext.form.action.Action.SERVER_INVALID:
		// 		Ext.Msg.show({
		// 			title:'Error!',
		// 			msg: result.msg,
		// 			icon: Ext.Msg.ERROR,
		// 			buttons: Ext.Msg.OK
		// 		});
		// }
	},

	onLoginSuccess: function(form, action) {
		var view = this.getView();
		view.unmask();

		this.getView().close();

		Ext.create('Packt.view.main.Main');
		Packt.util.SessionMonitor.start();
	},

	onTextFieldSpecialKey: function(field, e, options) {
		if(e.getKey() === e.ENTER) {
			this.doLogin();
		}
	},

	onTextFieldKeyPress: function(field, e, options) {
		var charCode = e.getCharCode();
			me = this;

		if((e.shiftKey && charCode >= 97 && charCode <= 122) || ( ! e.shiftKey && charCode >= 65 && charCode <= 90)) {
			if(me.capsLockTooltip === undefined) {
				me.capsLockTooltip = Ext.widget('capslocktooltip');
				console.log('t5');
			}
			me.capsLockTooltip.show();
		} else {
			if(me.capsLockTooltip !== undefined) {
				me.capsLockTooltip.hide();
			}
		}
	}
});