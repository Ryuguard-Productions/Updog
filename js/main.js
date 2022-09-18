'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:
	const warningScreen = document.querySelector('.warning-screen');

	warningScreen.addEventListener('click', () => {
		const allowPlayback = document.querySelector('[data-content="allow-playback"]');
		monogatari.playAmbient();
		if (allowPlayback) allowPlayback.style.display = 'none';
		onWarningScreenDone(warningScreen);
	});

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		const metLeek = localStorage.getItem('met_leek');
		const goodEndLeek = localStorage.getItem('good_end_leek');
		const mainScreen = document.querySelector('[data-screen="main"]');
		if (goodEndLeek === 'true') {
			mainScreen.style.backgroundImage = `url('./assets/scenes/Otome_BG_Leeks_Room_DAYTIME.jpg')`;
		} else if (metLeek === 'true') {
			mainScreen.style.backgroundImage = `url('./assets/scenes/Otome_Classroom.jpg')`;
		}
	});
});

function onWarningScreenDone (warningScreen) {
	if (warningScreen.style.display === 'none') return;
	const audio = new Audio('./assets/voices/classroomScene/leek/leek_intro_2.mp3');
	audio.volume = 0.5;
	audio.play();
	warningScreen.style.display = 'none';
}