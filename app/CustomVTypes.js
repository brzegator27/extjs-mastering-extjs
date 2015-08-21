Ext.apply(Ext.form.field.VTypes, {
	customPass: function(val, field) {
		return true; // /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{6,20})/.test(val);
	},
	customPassText: 'Mój custoPassText: Not a valid password. Length must be at least 6 characters and maximum of 20. Password must contain one digit, one letter lowercase, one letter uppercase, one special symbol @#$% and between 6 and 20 characters.'
});