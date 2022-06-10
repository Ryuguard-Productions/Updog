// Define the messages used in the game.
monogatari.action ('message').messages ({

});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'dcl': 'dcl.ogg',
	'ow': 'ow.ogg'
});

// Define the voice files used in the game.
monogatari.assets ('voices', {
	'1_leek_1': 'scene1/leek/1.mp3'
});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	cafe_interior: 'cafe-interior.jpg',
	cafe_exterior: 'cafe-exterior.jpg'
});


// Define the Characters
monogatari.characters ({
	'leek': {
		name: 'Leek',
		color: '#61CF62',
		directory: 'leek',
		sprites: {
			angry: 'angry.png',
			annoyed: 'annoyed.png',
			blush: 'blush.png',
			smile: 'smile.png',
			laugh: 'laugh.png',
			neutral: 'neutral.png',
			sad: 'sad.png',
			shocked: 'shocked.png',
			sigh: 'sigh.png'
		},
		expressions: {
			angry: 'expressions/angry.png',
			annoyed: 'expressions/annoyed.png',
			blush: 'expressions/blush.png',
			smile: 'expressions/smile.png',
			laugh: 'expressions/laugh.png',
			neutral: 'expressions/neutral.png',
			sad: 'expressions/sad.png',
			shocked: 'expressions/shocked.png',
			sigh: 'expressions/sigh.png'
		},
		default_expression: 'neutral'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'play music ow with loop with fade 20',
		'show scene cafe_exterior with fadeIn duration 1s',
		{
			'Input': {
				'Text': 'What is your name?',
				'Default': 'Feesh',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					monogatari.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					monogatari.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'jump Scene1_Start'
	],
	...scene1,
	...scene2,
	...scene3
});
