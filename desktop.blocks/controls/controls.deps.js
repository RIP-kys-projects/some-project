([
	{
		mustDeps: [
			{ block: 'i-bem', elem: 'dom' },
			{ block: 'tabs'},
			{ block: 'form-select'}
		],
		shouldDeps: [
			{ elem: 'jquery' },
			{ block: 'events', elem: 'message' }
		]
	},
	{
		tech: 'js',
		mustDeps: [
			{
				block: 'abstract-section-list',
				mods: { wrapper: 'none'},
				tech: 'bemhtml'
			},
			{
				block: 'abstract-section-list',
				elem: 'item',
				tech: 'bemhtml'
			}
		]
	}
])
