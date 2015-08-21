Ext.define('Packt.model.menu.TreeNode', {
	extend: 'Ext.data.Model',

	fields: [
		{
			name: 'id', type: 'int'
		},
		{
			name: 'text'
		},
		{
			name: 'iconCls'
		},
		{
			name: 'className'
		},
		{
			name: 'patent_id', mapping: 'menu_id'
		}
	]
});