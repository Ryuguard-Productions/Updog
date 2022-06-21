const leek_8_Room_BadEnd = {
  'leek_8_Room_BadEnd_start': [
    'play music leek_bad_end with loop fade 5',
    'play voice leek_roomBE_1',
    'leek:none Hm…almost done…',
    '*phone notif sfx*',
    'play voice leek_roomBE_2',
    'leek:none Alright, then next is…',
    '*phone notif sfx but louder*',
    'play voice leek_roomBE_3',
    'leek:none Huh?',
    'show scene leek_bad_end with fadeIn duration 2s',
    'wait 2000',
    'play voice leek_roomBE_4',
    'leek:none It’s them…',
    'leek:none ...',
    'play voice leek_roomBE_5',
    'leek:none ‘Sorry’... ‘Can’t go’ … ‘Busy.’',
    '<p class = "italicText">(Leek sighs and makes a stretching noise. She seems exhausted, even more so than in the main route, to the point where it appears to be mental and emotional exhaustion, not just physical)</p>',
    'play voice leek_roomBE_6',
    'leek:none Back to work…',
    function(){
      this.element().find('[data-component="text-box"]').hide()
    },
    'show scene leek_bad_end with fadeOut duration 3s',
    'stop music leek_bad_end with fade 2',
    'wait 2000',
    'show video credits immersive with close',
    'end'
  ]
};
