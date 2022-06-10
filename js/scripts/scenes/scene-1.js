const scene1 = {
  'Scene1_Start': [
		'show character leek neutral with fadeIn duration 1s',
		'leek Hi {{player.name}}',
		'leek It is I, Leek and I’m the VA for Leek in the Updog Project, if you see this OZ is messing with the code HELP, HELP  I SAY',
		'play voice 1_leek_1',
		'leek Do you wanna go to a cafe? I have some time',
		'show background cafe_interior with showScene',
		'show character leek neutral with fadeIn duration .5s',
		'wait 500',
		'show character leek laugh with exclaim',
		'leek:laugh So many vegetables here!',
		'jump Scene1_Choice'
	],

	'Scene1_Choice': [
		'show character leek laugh',
		{
			'Choice': {
				'Dialog': 'leek:laugh Do you know my favorite vegetable?',
				'Yes': {
					'Text': 'Leek?',
					'Do': 'jump Scene1_Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump Scene1_No'
				}
			}
		}
	],

	'Scene1_Yes': [
		'show character leek laugh with exclaim',
		'leek:laugh Thats awesome!',
    'jump Scene2_Start'
	],

	'Scene1_No': [
		'show character leek shocked with exclaim',
		'leek:shocked Huh?',
		'show character leek sigh',
		'leek:sigh *sigh*',
		'show character leek angry with exclaim',
		'leek:angry Are you serious?',
		'show character leek annoyed',
		'leek:annoyed But we\'ve been playing Valorant everyday...',
		'show character leek sad with deject',
		'leek:sad How can you say you don\'t know the answer?',
		'show character leek blush with assert',
		'leek:blush No way right? I\'ll you ask again',
		'jump Scene1_Choice'
	]
};
