Ext.define('Packt.view.login.Login', {
	extend: 'Ext.window.Window',

	requires: [
		'Packt.view.login.LoginController',
		'Packt.view.locale.Translation'
	],

	xtype: 'login-dialog',

	controller: 'login',

	autoShow: true,
	height: 170,
	width: 360,
	layout: {
		type: 'fit'
	},
	iconCls: 'fa fa-key fa-lg',
	title: translations.login,
	closeAction: 'hide',
	closable: false,
	draggable: false,
	resizable: false,

	items: [
		{
			xtype: 'form',
			reference: 'form',
			bodyPadding: 15,
			defaults: {
				xtype: 'textfield',
				anchor: '100%',
				labelWidth: 60,
				allowBlank: false,
				vtype: 'alphanum',
				//minLength: 3,
				msgTarget: 'under',
				listeners: {
					specialKey: 'onTextFieldSpecialKey' 
				}
			},
			items: [
				{
					name: 'user',
					fieldLabel: translations.user,
					maxLength: 25
				},
				{
					//inputType: 'password',
					name: 'password',
					fieldLabel: translations.password,
					maxLength: 15,
					vtype: 'customPass',
					msgTarget: 'side',
					id: 'password',
					enableKeyEvents: true,
					listeners: {
						keypress: 'onTextFieldKeyPress',
						specialKey: 'onTextFieldSpecialKey'
					}
				}
			],

			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'bottom',

					items: [
						{
							xtype: 'translation'
						},
						{
							xtype: 'tbfill'
						},
						{
							xtype: 'button',
							text: translations.cancel,
							iconCls: 'fa fa-times fa-lg',
							listeners: {
								click: 'onButtonClickCancel'
							}
						},
						{
							xtype: 'button',
							text: translations.submit,
							iconCls: 'fa fa-sign-in fa-lg',
							formBind: true,
							listeners: {
								click: 'onButtonClickSubmit'
							}
						}
					]
				}
			]
		}
	]
});