({
	block: 'page',
	mods: { 'sticky-push': 'none'},
	title: 'Плитки ЛК',
	head: [
		{
			elem : 'meta',
			attrs : { name : 'viewport', content: 'width=1260' },
		},
		{ elem: 'css', url: '../merged/_merged.css' }
	],
	scripts: [
		{
			elem : 'conditional-comment',
			condition : '< IE 9',
			content : [
				{ elem : 'js', url : '//yastatic.net/es5-shims/0.0.1/es5-shims.min.js' },
				{ elem : 'js', url : '/js/modernizr-html5shiv-respond.min.js' },
				{ elem : 'js', url : '/js/polifil_event.js' }
			]
		},
		{ elem: 'js', url: '../merged/_merged.js' }
	],
	content: [
		{
			block: 'blur',
			js: true,
			url: '/img/background-blur/background-gradient-cabinet.jpg'
		},
		{
			block: 'image-fixed',
			js: true,
			url: '/img/service/background/smart-reading©-bg.jpg'
		},
		{
			block: 'content',
			mods: {type: 'transparent'},
			content: {
				elem: 'inner',
				mods: { 'padding-bottom': 'min' },
				content: [
					{
						block: 'row',
						content: [
							{
								block: 'col-md-offset-2',
								mix: {block: 'col-md-8'},
								content: [
									{
										block: 'article',
										elem: 'title',
										mods: {color: 'white', 'certificate-page': true},
										content: 'Личный кабинет'
									},
									{
										block: 'list',
										mods: { inline: true, link: 'pseudo', margin: 'certificate' },
										mix: { block: 'fonts', mods:{ size: '17'}},
										js: true,
										list: [
											{
												url: '#1',
												content: 'Профиль'
											},
											{
												url: '#2',
												content: 'Сертификаты'
											}
										]
									}
								]
							}
						]
					},
					{
						block: 'row',
						content: [
							{
								block: 'col-md-3',
								mix: { block: 'tiles-certificate', elem: 'select-label', elemMods: { mg: true } },
								content: {
									block: 'content',
									mix: { block: 'tiles-certificate', elem: 'select-label', elemMods: { align: true } },
									elem: 'text',
									content:'Сертификаты для компании'
								}
							},
							{
								block: 'col-md-4',
								content: {
									block: 'content',
									mix: { block: 'tiles-certificate', elem: 'title-company' },
									elem: 'text',
									content:'OOO \"Золото Транссиба\"'
								}
							}
						]
					},
					{
						block: 'row',
						content: [
							{
								block: 'col-md-3',
								mix: { block: 'tiles-certificate', elem: 'select-label', elemMods: { mg: true } },
								content: {
									block: 'content',
									mix: { block: 'tiles-certificate', elem: 'select-label', elemMods: { align: true } },
									elem: 'text',
									content:'Сертификаты для компании'
								}
							},
							{
								block: 'col-md-4',
								content: [
									{
										block: 'form-select-wrapper',
										content: {
											block: 'form-select',
											mods: {autocomplete: true, color: 'white-transparent'},
											name: "company-name",
											js: {
												type: 'company-name',
												bemJSON: {
													block: 'select-autocomplite',
													mods: {color: 'white-transparent'},
													mix: {block: 'select-autocomplite', mods: {width: 'full'}},
													js: true,
													item: [
														{
															val: 'ОАО \"Объединенная авиастроительная корпорация\"',
															content: 'ОАО \"Объединенная авиастроительная корпорация\"',
															mixBlock: {
																block: 'certificate-change',
																js: {
																	newBemJSON: {
																		block: 'tiles-certificate',
																		'tiles-certificate': [
																			{
																				title: 'Новые клиенты через интернет',
																				url: '/',
																				mods: { width: 'full', visible: true},
																				modsLink: { size: 'xl' },
																				modsText: { size: 'xl' },
																				subTitle : 'Дарим до 9 000 рублей на первую рекламную кампанию для вашего бизнеса!',
																				img: '/img/certificate/yandex-direct-logo.png',
																				modsImg: { size: 'l' },
																				mixBtn: [ { block: 'btn', mods: {color: 'red-transparent'} },{ block: 'tiles-certificate' ,elem: 'btn' } ],
																				sideContent: [
																					{
																						content:{
																							block: 'tiles-certificate',
																							elem: 'animation-text',
																							mods: { size: 'l'},
																							content: [
																								{
																									tag: 'span',
																									content: 'Выгода '
																								},
																								{
																									block: 'inexistant-block',
																									tag: 'span',
																									mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'large' } },
																									content: '4 000'
																								},
																								{
																									tag: 'span',
																									content: ' руб.'
																								},
																							]
																						}
																					},
																					{
																						tag:'span',
																						content: [
																							{
																								tag: 'span',
																								content: 'Истекает '
																							},
																							{
																								tag: 'span',
																								content: '28.11.2015'
																							}
																						]
																					}
																				]
																			}
																		]

																	}
																}
															}
														},
														{
															val: 'OOO \"Золото Транссиба\"',
															content: 'OOO \"Золото Транссиба\"',
															selected: true,
															mixBlock: {
																block: 'certificate-change',
																js: {
																	parameter: 'trololo'
																}
															}
														},
														{
															val: 'OOO \"Снег Севера\"',
															content: 'OOO \"Снег Севера\"',
															mixBlock: {
																block: 'certificate-change',
																js: {
																	parameter: 'trololo'
																}
															}
														}
													]
												}
											},
											/* this parameter is for real select (when JS is disabled) */
											item: [
												{
													val: 'ОАО \"Объединенная авиастроительная корпорация_реал_вал\"',
													content: 'ОАО \"Объединенная авиастроительная корпорация_реал_конт\"',
													selected: true
												},
												{
													val: 'OOO \"Золото Транссиба_реал_вал\"',
													content: 'OOO \"Золото Транссиба_реал_конт\"'
												},
												{
													val: 'OOO \"Снег Севера_реал_вал\"',
													content: 'OOO \"Снег Севера_реал_конт\"'
												}
											]
										}
									}
								]
							}
						]
					}
				]
			}
		},
/*------------------------------------------------- main content part -------------------------------------------------*/
		{
			block: 'content',
			mods: { type: 'opaque'},
			content: {
				elem: 'inner',
				content: [
					{
						block: 'row',
						content:[
							{
								block: 'tiles-control',
								js: true,
								mix: [{ block: 'col-md-10'}, {block: 'col-md-offset-2' }],
								content:[
									{
										block: 'tiles-certificate',
										'tiles-certificate': [
											{
												title: 'Новые клиенты через интернет',
												url: '/',
												mods: { width: 'full', visible: true},
												modsLink: { size: 'xl' },
												modsText: { size: 'xl' },
												subTitle : 'Дарим до 9 000 рублей на первую рекламную кампанию для вашего бизнеса!',
												img: '/img/certificate/yandex-direct-logo.png',
												modsImg: { size: 'l' },
												mixBtn: [ { block: 'btn', mods: {color: 'red-transparent'} },{ block: 'tiles-certificate' ,elem: 'btn' } ],
												sideContent: [
													{
														content:{
															block: 'tiles-certificate',
															elem: 'animation-text',
															mods: { size: 'l'},
															content: [
																{
																	tag: 'span',
																	content: 'Выгода '
																},
																{
																	block: 'inexistant-block',
																	tag: 'span',
																	mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'large' } },
																	content: '4 000'
																},
																{
																	tag: 'span',
																	content: ' руб.'
																},
															]
														}
													},
													{
														tag:'span',
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											/* second line */
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '3 450'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url: '/',
												mods: { visible: true},
												modsLink: { size: 'l' },
												modsText: { size: 'l' },
												subTitle : 'Дарим до 3 450 рублей на первую рекламную кампанию для вашего бизнеса!',
												img: '/img/certificate/rostelekom.png',
												modsImg: { size: 'l' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',
														block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																block: 'inexistant-block',
																mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: 'date'} },
																content: '28.11.2015'
															}
														]
													}
												]
											},
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '4 000'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { visible: true},
												modsLink: { size: 'l' },
												modsText: { size: 'l' },
												subTitle : 'Подарок на 3 месяца. Бесплатный сервис.',
												img: '/img/certificate/yandex-direct-logo.png',
												modsImg: { size: 'l' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',
														block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																block: 'inexistant-block',
																mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: 'date'} },
																content: '28.11.2015'
															}
														]
													}
												]
											},
											/* third line */
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '3 450'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true},
												modsLink: { size: 'm' },
												modsText: { size: 'm' },
												img: '/img/certificate/yandex-direct-logo.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '4 000'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true},
												modsLink: { size: 'm' },
												modsText: { size: 'm' },
												img: '/img/certificate/olimar.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '700'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true},
												modsLink: { size: 'm' },
												modsText: { size: 'm' },
												img: '/img/certificate/kit-finance.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',
														block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											/* fourth-line */
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '2 200'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true},
												modsLink: { size: 's' },
												modsText: { size: 's' },
												img: '/img/certificate/avtodor.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '5 100'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true},
												modsLink: { size: 's' },
												modsText: { size: 's' },
												img: '/img/certificate/kit-finance.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '6 500'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { col: 'three', visible: true },
												modsLink: { size: 's' },
												modsText: { size: 's' },
												img: '/img/certificate/lukoil.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											},
											/* last line */
											{
												title: {
													content: [
														{
															tag: 'span',
															content: 'Выгода '
														},
														{
															block: 'inexistant-block',
															tag: 'span',
															mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: { bold: 'normal' } },
															content: '9 000'
														},
														{
															tag: 'span',
															content: ' руб.'
														},
													]
												},
												url : '/',
												mods: { width: 'one-third', visible: true },
												modsLink: { size: 's'},
												modsText: { size: 's'},
												img: '/img/certificate/alphabank.png',
												modsImg: { size: 'm' },
												mixBtn: [
													{
														block: 'btn',
														mods: {color: 'red-transparent'}
													},
													{
														block: 'tiles-certificate' ,
														elem: 'btn',
														mods: { size: 'small' }
													}
												],
												sideContent: [
													{
														tag:'span',block: 'inexistant-block',
														mix: { block: 'tiles-certificate' ,elem: 'animation-text', mods: {expiration: true} },
														content: [
															{
																tag: 'span',
																content: 'Истекает '
															},
															{
																tag: 'span',
																content: '28.11.2015'
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					},
				]
			}
		}
	]
});
