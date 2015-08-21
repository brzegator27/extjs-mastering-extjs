Ext.define('Packt.model.menu.Accordion', {
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
		}
	],

	hasMany: {
		model: 'Packt.model.menu.TreeNode',
		foreignKey: 'parent_id',
		name: 'items'
	}
});