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
	"<a target='_blank' href='https://twitter.com/RyuguardP'>Ryuguard Productions</a>": {
		"Director": "<a target='_blank' href='https://twitter.com/zzzz_oz'>OZ</a>",
    "Executive Producer": "<a href='https://twitter.com/RyoheiX'>ROWJ</a>",
		"Writers": `
      <a target='_blank' href='https://twitter.com/HeroicCaster'>Caster</a>`,
    "Editors": `
      <a target='_blank' href='https://twitter.com/batalig'>Batalig</a><br>
      <a target='_blank' href='https://twitter.com/AvrosKyargath'>Avros</a><br>
      <a target='_blank' href='https://twitter.com/vonPeterhof'>VonPeterhof</a>`,
    "Programmers": `
      <a target='_blank' href='https://twitter.com/Kur0N0_'>kurokur0kurO</a><br>
      <a target='_blank' href='https://twitter.com/smolcatto69'>Vape Cat</a><br>
      <a target='_blank' href='https://twitter.com/zzzz_oz'>OZ</a><br>`,
    "UI": `Pexe`,
    "Artists": `
      <a target='_blank' href='https://www.twitch.tv/hayabusanero'>CattestChajiit</a><br>
      <a target='_blank' href='https://twitter.com/Leef_is_Absent'>Leef</a><br>
      <a target='_blank' href='https://twitter.com/KazCrz'>KazakeCraze</a><br>
      <a target='_blank' href='https://twitter.com/RyoheiX'>RowJ</a><br>
		  <a target='_blank' href='https://twitter.com/SeabasstianB'>Seabasstian</a><br>
      <a target='_blank' href='https://twitter.com/Cobalnite'>Cobalnite</a><br>
      <a target='_blank' href='https://twitter.com/MelonbreadFBP'>Melonbread</a>`,
    "Sound and Music": `
      <a target='_blank' href='https://twitter.com/crimson_king73'>Vince</a><br>
      <a target='_blank' href='https://twitter.com/TCBNmusic'>Tachibana Music</a><br>
      <a target='_blank' href='https://twitter.com/shirokuma9303'>SHIROKUMA</a>`,
    "Voice Actors": `
      <a target='_blank' href='https://twitter.com/zhngls'>Leek</a><br>
      ???<br>
      ???<br>
      ???`,
    "Video": `
      <a target='_blank' href='https://twitter.com/ItsRyesia'>Ryesia</a><br>
      <a target='_blank' href='https://twitter.com/questionablitiy'>Questia クエスティア</a><br>
      <a target='_blank' href='https://twitter.com/DGBCH11'>Colin The Ryuguard</a><br>
      <a target='_blank' href='https://twitter.com/NijiEnTako'>Tako</a>`,
    "Misc": `Finana Finclub Discord Server, OLcord and <a target='_blank' href='https://twitter.com/AvrosKyargath'>Avros</a>`
	},
	"Special Thanks to our <a target='_blank' href='https://twitter.com/FinanaRyugu'> KAMI OSHI</a> You have changed our lives more than you'll ever know and have inspired all of us to be a better person each day. WE LOVE YOU AND HAPPY BIRTHDAY!!!!" : {}
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {
	'dcl': 'dcl.ogg',
	'ow': 'ow.ogg',
	'university': 'University2.wav',
	'library': 'Library.wav',
	'leek_bad_end': 'Bad_End.wav',
	'leek_good_end': 'leekGoodEnd.wav',
	'leek_room': 'leekRoom.wav',
	'cafe': 'Cafe.wav'
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
	split_cafe_and_library: 'split_cafe_and_library.png',
	leek_room_daytime: 'Otome_BG_Leeks_Room_DAYTIME.jpg',
	leek_room_night: 'Otome_BG_Leeks_Room_Night.jpg',
	leek_room_nightlight: 'Otome_BG_Leeks_Room_NightLIGHT_Finished.jpg',
	leek_room_sunset: 'Otome_BG_Leeks_Room_SUNSET.jpg',
	leek_good_end: 'HappyEndLeek.png',
	school_gate: 'School_gate.jpg',
	sakura_street:'OTOME_BG_Sakura_Street.jpg',
	park: 'Otome_BG_Park_Kaze.jpg',
	classroom: 'Otome_Classroom.jpg',
	leek_bad_end: 'leek_bad_end.png',
	grey_bg:'greyBG.png'
});

// Define the Characters
monogatari.characters ({
	'leek': {
		name: 'Leek',
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
		'jump main_1_University_Intro_start'
	],
	...leek_2_classroom_intro,
	...leek_3_Library_1A,
	...leek_4_Room_GoodEnd,
	...leek_5_Room_2A,
	...leek_6_Cafe_1B,
	...main_1_University_Intro,
	...leek_7_Room_2B,
  ...leek_8_Room_BadEnd,
  // create-new-scene-helper
});
