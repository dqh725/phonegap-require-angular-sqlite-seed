define(['angularjs'],function(angularjs){

	var DB_CONFIG = {
		name: 'DB',
		tables:[
			{
				name: "any table name",
				columns: [
					{name: 'id', type :'integer primary key'},
					{name: 'field1', type: 'text'},
					{name: 'description', type: 'text'},
					{name: 'field2', type: 'integer'},
					{name: 'date', type: 'integer'}
				]
			}
		]
	};
	return DB_CONFIG;
});