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
	"" : "",
	"<a href=\"https://twitter.com/RyuguardP\">Ryuguard Productions</a> ": {
		"": "", 
	},
	"Director: <a href=\"https://twitter.com/zzzz_oz\">OZ</a>": {
		"": "",
	},
	"Editors:": {
		"": "",
	},
	"<a href=\"https://twitter.com/batalig\">Batalig</a>, <a href=\"https://twitter.com/AvrosKyargath\">Avros</a>, <a href=\"https://twitter.com/zzzz_oz\">OZ, <a href=\"https://twitter.com/vonPeterhof\">VonPeterhof</a>": {
		"": "",
	},
	"Writing Team": {
		"Ryuwriters": "<a href=\"https://twitter.com/HeroicCaster\">Caster</a>", 
		"": "<a href=\"https://twitter.com/LapisRoseVtuber\">Lapis Rose</a>",  
		"": "<a href=\"https://twitter.com/keekispecial\">Keektang</a>",
		"": "<a href=\"https://twitter.com/zzzz_oz\">OZ</a>",
	},
	"Programming": {
		"RyuTech": "<a href=\"https://twitter.com/Kur0N0_\">Kuro</a>", 
		"": "<a href=\"https://twitter.com/smolcatto69\">Vape Cat</a>",  
		"": "<a href=\"https://twitter.com/DevilRightHands\">MaouHands</a>",
		"": "<a href=\"https://twitter.com/zzzz_oz\">OZ</a>",
	},
	"Art Team": {
		"RyuArts": "<a href=\"https://www.twitch.tv/hayabusanero\">CattestChajiit</a>",
		"": "<a href=\"https://twitter.com/KazCrz\">KazakeCraze</a>",
		"": "<a href=\"https://twitter.com/Leef_is_Absent\">Leef</a>",
		"": "<a href=\"https://twitter.com/Cobalnite\">Cobalnite</a>",
		"Assets": "<a href=\"https://twitter.com/MelonbreadFBP\">Melonbread</a>",
	},
	"Sound and Music": {
		"Ryusound": [
			"<a href=\"https://twitter.com/crimson_king73\">Vince</a>", "<a href=\"https://twitter.com/TCBNmusic\">Tachibana Music</a>",
		],
		"RyuVA": [
			"<a href=\"https://twitter.com/zhngls\">LEEK</a>", "?????????", "????????????,????????????????"
		],
	},
	"A/V Team": {
		"RyuFilm": "<a href=\"https://twitter.com/ItsRyesia\">Ryesia</a>", 
		"": "<a href=\"https://twitter.com/DGBCH11\">Colin The Ryuguard</a>",  
		"": "<a href=\"https://twitter.com/NijiEnTako\">Tako</a>",
		"": "<a href=\"https://twitter.com/questionablitiy\">Questia クエスティア</a>",
	},
	"Special Thanks to our <a href=\"https://twitter.com/FinanaRyugu\"> KAMI OSHI</a> You have changed our lives more than you'll ever know and have inspired all of us to be a better person each day. WE LOVE YOU AND HAPPY BIRTHDAY!!!!"  : {
		"Further thanks to": ["Finana Finclub Server “Finacord” and  Avros 'DadVros' Kyargath"], 
		"OMEN!?- - - - -  -  -  - - - -    >": ["click me, Kya~"],
	}
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
	'1_leek_1': 'scene1/leek/1.mp3',
	'leek_intro1':'classroomScene/leek/Leek_Intro_1.wav',
	'leek_intro2' : 'classroomScene/leek/Leek_Intro_2_ver2.wav',
	'leek_intro3' : 'classroomScene/leek/Leek_Intro_3.wav',
	'leek_intro4' : 'classroomScene/leek/Leek_Intro_4_ver2.wav',
	'leek_intro5' : 'classroomScene/leek/Leek_Intro_5.wav',
	'leek_intro6' : 'classroomScene/leek/Leek_Intro_6.wav',
	'leek_intro7' : 'classroomScene/leek/Leek_Intro_7.wav',
	'leek_intro8' : 'classroomScene/leek/Leek_Intro_8.wav',
	'leek_intro8_2' : 'classroomScene/leek/Leek_Intro_8_ver2.wav'
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
	cafe_exterior: 'cafe-exterior.jpg',
	chatting_leek: 'chatting-leek.png',
	science_building: 'science-building.png',
	library: 'library.jpg',
	split_cafe_and_library: 'split_cafe_and_library.png'
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
		//'jump Scene1_Start'
		'jump leek_2_Classroom_intro_Start'
	],
	...scene1,
	...scene2,
	...leek_2_Classroom_intro
});
