({
	shouldDeps: [
		{
			elems: [
				{ elem: 'item' , mods: { col: 'three', width: ['full', 'one-third'] } },
				{ elem: 'link', mods: { size: true } },
				'animation',
				{ elem: 'text', mods: { size: true } },
				'title',
				'subtitle',
				{ elem: 'logo', mods: { size: true } },
				{ elem: 'btn', mods: { size: true } },
				{
					elem: 'animation-text',
					mods: [
						{ size: true },
						{ bold: true },
						{ expiration: true },
						{ 'left-position': true }
					]
				},
				'select-label',
				'title-company'
			]
		},
		{ block: 'btn', mods: { color: 'red-transparent' } },
		'certificate-change'
	]
})
