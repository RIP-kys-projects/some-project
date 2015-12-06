({
	shouldDeps: [
		{ block: 'products', elem: 'item' },
		{ block: 'products', elem: 'item', mods: { 'unique': true } },
		{ block: 'products', elem: 'title' },
		{ block: 'products', elem: 'section' },
		{ block: 'products', elem: 'section', mods: { second: true } },
		{ block: 'products', elem: 'description' },
		{ block: 'products', elem: 'img' },
		{ block: 'img' }
	],
	mustDeps : [
		{ block: 'clear' }
	]
})