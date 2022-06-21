const leekIntroVoices = generateVoices(9, 'leek', 'intro', 'classroomScene/leek', 'mp3');
const leekLibrary1AVoices = generateVoices(5, 'leek', 'library1A', '1A/leek', 'mp3');
const leekRoom2AVoices = generateVoices(11, 'leek', 'room2A', '2A/leek', 'mp3');
const leekCafe1BVoices = generateVoices(3, 'leek', 'cafe1B', '1B/leek', 'mp3');
const leekRoom2BVoices = generateVoices(7, 'leek', 'room2B', '2B/leek', 'mp3');
const leekRoomBEVoices = generateVoices(6, 'leek', 'roomBE', 'BE/leek', 'mp3');
const leekRoomGEVoices = generateVoices(3, 'leek', 'roomGE', 'GE/leek', 'mp3');

function generateVoices(length, character, identifier, directory, extension = 'mp3') {
  const voices = {};

  Array.from({length}, (_, i) => i + 1).forEach((index) => {
    const key = `${character}_${identifier}_${index}`;
    voices[key] = `${directory}/${key}.${extension}`;
  });

  return voices;
}

// Define the voice files used in the game.
monogatari.assets ('voices', {
	...leekIntroVoices,
  ...leekLibrary1AVoices,
  ...leekRoom2AVoices,
  ...leekCafe1BVoices,
  ...leekRoom2BVoices,
  ...leekRoomBEVoices,
  ...leekRoomGEVoices
});