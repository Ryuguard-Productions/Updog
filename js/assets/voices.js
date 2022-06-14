const leekIntroVoices = generateVoices(9, 'leek', 'intro', 'classroomScene/leek', 'wav');

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
	...leekIntroVoices
});

//const leekLibrary1AVoices = generateVoices(14, 'leek', 'library1A', 'leekLibrary1A', 'wav');