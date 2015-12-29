([
	{
		mustDeps: { block: 'i-bem', elem: 'dom' },
		shouldDeps: { elem: 'jquery' }
	},
	{
		tech: 'js',
		mustDeps   : [
			{
				block: 'calendar-events',
				elem: 'slide',
				tech: 'bemhtml'
			},
			{
				block: 'events-list',
				tech: 'bemhtml'
			},
			{
				block: 'calendar-events-list',
				elem: 'months',
				tech: 'bemhtml'
			},
			{
				block: 'calendar-events-list',
				elem: 'slide',
				tech: 'bemhtml'
			},
			{
				block: 'img',
				tech: 'bemhtml'
			}
		]
	}
])
