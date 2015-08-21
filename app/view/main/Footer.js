Ext.define('Packt.view.main.Footer', {
	extend: 'Ext.container.Container',

	xtype: 'appfooter',

	cls: 'app-footer',
	height: 30,
	layout: 'center',

	items: [
		{
			xtype: 'component',
			componentCls: 'app-footer-title',
			width: 350,
			bind: {
				html: '{footer}'
			}
		}
	]
});