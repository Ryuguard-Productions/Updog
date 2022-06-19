const leek_5_Room_2A = {
  'leek_5_Room_2A_start': [
    'show scene leek_room_daytime with fadeIn duration 1.5s',
    //change BGM
    '<p class = "italicText">Leek’s dorm is on campus, just a short distance away from the main gate. It’s a nice building that they built recently and she seems to have a room to herself.</p>',
    'show character leek neutral with fadeIn',
    '<p class = "italicText">So it’s just the two of us hanging out in her room on a quiet afternoon, with Leek at her computer while I sit by her bed, idly browsing my phone.</p>',
    '<p class = "italicText">To be honest, I think we were supposed to go out and do something, but with summer already here and the heat rising, the both of us were too tired to leave the room. Not that either of us really minded…</p>',
    //Fill more dialogue
    'show character leek annoyed with fadeIn',
    '<p class = "italicText">A ping comes from Leek’s computer, bringing her attention away from our conversation.</p>',
    'show character leek sad with fadeIn',
    'leek:sad I…sorry, let me just-',
    'Yeah, of course, don’t worry about it.',
    'show character leek smile with fadeIn',
    '<p class = "italicText">Leek smiles at me and paces over to her desk, leaning over it as she clicks on a few things. Slowly, I can see her face start to sink.</p>',
    'show character leek angry with exclaim',
    'leek:angry <p class = "italicText">No, no, that should’ve been…oh, you bunch of…</p>',
    'Leek? Something wrong?',
    '<p class = "italicText">She frowns, pulling out her chair and taking a seat at her desk.</p>',
    'leek:angry Apparently my group is made out of <span class="italicText">idiots</span> and nothing that’s supposed to be done is done, and I need to do all this stuff and…',
    '<p class = "italicText">Her hands start to gesture frantically, frustrated by this turn of events.</p>',
    'show character leek sad with fadeIn',
    'leek:sad I-I’m really sorry but I need to do this today and I know we’re supposed to be hanging out…',
    '<p class = "italicText">I open my mouth to say something…but I don’t really know what to say. I should tell her that it’s alright if she needs to do this.</p>',
    '<p class = "italicText">But still… it kind of sucks.</p>',
    'jump leek_5_Room_2A_choice'
  ],
  'leek_5_Room_2A_choice': [
    {
      'Choice': {
        'Dialog': '<p class = "italicText">Maybe I should just give her the time to work if she really needs it…</p>',
        'Yes': {
          'Text': 'Wait for her to finish.',
          'Do': 'jump leek_5_Room_2A_Yes'
        },
        'No': {
          'Text': 'Leave and let her focus on her work.',
          'Do': 'jump leek_5_Room_2A_No'
        }
      }
    }
  ],
  'leek_5_Room_2A_Yes':[
    'Leek. I don’t mind really. To be honest, being around you is more than enough.',
    'If you don’t mind, I can just stay here until you’re finished. I’ll be quiet, I promise.',
    'show character leek shocked with fadeIn',
    '<p class = "italicText">Leek looks at me like my eyes just fell out of my skull.</p>',
    'leek:shocked Are you…sure? You don’t have to…',
    'I want to.',
    'show character leek blush with fadeIn',
    '<p class = "italicText">I’m not sure if it’s the way the light comes through the window, but I swear there’s a little blush on her face after I say that.</p>',
    'leek:blush Well…um, sure. I don’t mind.',
    'show character leek neutral',
    '<p class = "italicText">And with that, she gets into work mode like a switch was flipped in her head.</p>',
    //Typing sfx
    '<p class = "italicText">I feel like I’ve been hearing that a lot recently: the sound of Leek’s hands, typing away at her keyboard. I like it.</p>',
    //Time change SFX
    'show scene leek_room_sunset with fadeIn 2s',
    'show character leek sigh with fadeIn',
    '<p class = "italicText">A few hours past and Leek is still knee deep in her work. She stretches out with a stifled yawn, reaching for her empty cup.</p>',
    'show character leek neutral with fadeIn',
    'leek Oh, damn it…',
    'I got it. What do you want?',
    'show character leek smile with fadeIn',
    'leek:smile Oh, uh, black tea. It should be out on the counter.',
    'Got it. Keep up the good work.',
    '<p class = "italicText">I take the cup from her hands, briefly brushing up against them.</p>',
    'show character leek blush with fadeIn',
    'leek:blush Thanks. For, uh…you know. Sticking around.',
    'show character leek neutral with fadeIn',
    'Y-yeah, of course. I’ll be sticking around a lot, so…',
    '<p class = "italicText">I trail off, not really knowing where the rest of that sentence was going. Leek just laughs and gets back to her work.</p>',
    'show character leek laugh with exclaim',
    'leek:laugh At this rate, I’m going to need to owe you another, haha. Remember, black tea.',
    "Yes, ma’am.",
    'show character leek smile with fadeIn',
    '<p class = "italicText">A smile on my face, I briefly step out of the room, making my way to get Leek her cup of tea.</p>',
    'show scene leek_room_sunset with fadeOut duration 2s',
    'wait 4000',
    'jump leek_4_Room_GoodEnd_start'
  ],
  'leek_5_Room_2A_No':[
    'Hey, if you need to do it, you should focus on that. We can just, you know, plan for another day.',
    'show character leek shocked with fadeIn',
    'wait 1500',
    'show character leek sad with fadeIn',
    'leek:sad Sorry...',
    'Don’t worry about it. Good luck with your work.',
    'show scene school_gate with fadeIn duration 1s',
    '<p class = "italicText">I leave her dorm, making my way off campus. I hope Leek gets whatever that is done. I wonder when she’ll be available next…</p>',
    'show scene school_gate with fadeOut duration 2s',
    'wait 2500',
    '*move to Bad End',
    'end'
  ]
};
