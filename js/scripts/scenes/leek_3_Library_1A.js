const leek_3_Library_1A = {
  'leek_3_Library_1A_start': [
    'show scene split_cafe_and_library with fadeOut duration 2s',
    'wait 3000',
    'show scene library with fadeIn duration 2s',
    '<p class = "italicText">Both of us agree that we could stand to get a little extra studying in, along with getting out for some company, so the library seems like the perfect place for that. I walk in a few minutes before the time we agreed to meet up, just to take a look around.</p>',
    '<p class = "italicText">The library is fairly large, with some nice spaces for students to study in. Immediately though, I make my way past the groups of people to the back corner of the library where Leek said she would be</p>',
    '<p class = "italicText">There’s no windows back here to let sunlight in, but the way the lighting of the lamps shines off the wooden shelves and walls gives it a quiet, relaxed feeling. Compared to the front of the library, this area is practically empty of people.</p>',
    '<p class = "italicText">Except for the faint sound of fingers typing…</p>',
    'That must be Leek. She should be around here somewhere',
    'Oh, there she... huh?',
    '<p class = "italicText">I peek my head around a shelf, but pause for a second from what I see. Leek is sitting at one of the small tables, her laptop set up with a few loose papers and books laid out around it. She looks deep in thought as she focuses on her work and…hums?</p>',
    'leek <p class = "italicText">*soft humming...</p>',
    'Cute...',
    '<p class = "italicText">Slowly, I make my way over, trying to be as quiet as I can as Leek continues to hum.</p>',
    '<p class = "italicText">Almost...</p>',
    '<p class = "italicText">There...</p>',
    '<p class = "italicText">And...</p>',
    '<p class = "italicText">I tap her shoulder lightly.</p>',
    //i am guessing there will be an expression here
    'leek WHA-!?',
    '<p class = "italicText">She snaps out of her pleasant trance, jumping in her seat as her tired eyes go wide. Somehow, she manages to keep herself to an appropriate volume for the library, but still loud enough that I can’t help but laugh a little.</p>',
    "S-sorry, haha. I couldn't help it.",
    //expression change
    '<p class = "italicText">Leek sighs and slumps back in her seat, taking in a deep breath as she laughs a little too.</p>',
    "leek You're terrible...",
    '<p class = "italicText">I open my mouth to joke something back, but Leek manages to just cut me off with a big yawn that she struggles - and fails - to hold in.</p>',
    'Tired?',
    '<p class = "italicText">Leek shrugs, a wry smile on her face as she leans onto her study space.</p>',
    'leek Am I ever not?',
    '...Fair point.',
    'leek Hah. I just have some stuff I need to finish today.',
    '<p class = "italicText">I nod in understanding, taking a seat across from Leek and pulling out my own laptop. Time to get to work.</p>',
    //typing sfx here
    '...',
    '<p class = "italicText">The both of us chat quietly as we do our assignments and study, enjoying the other’s company. I haven’t had much luck making other friends, and Leek always seems to be too busy to try herself.</p>',
    //another sfx/bgm here
    '<p class = "italicText">Time continues to tick on in our quiet corner of the library, not another soul passing by. After a while, my mind starts to wander and my eyes flick over to where Leek is doing her own thing.</p>',
    '<p class = "italicText">She looks so focused, unlike me right now. Her hands type away at her laptop, then they write something down on a nearby notebook, move back to the keyboard, and it all repeats again. Leek makes little mumbling noises that I can’t quite make out, talking to herself as she works.</p>',
    'Cute...',
    'I guess I should put in the same effort…maybe a little less actually…that should be alright…',
    //another sfx/bgm here
    '*yawn Almost done. How about you, Leek? …Leek?',
    '<p class = "italicText">Looking up from my laptop for the first time in ages, only to find Leek with her eyes closed, her head propped up on her hands and elbows on the table. </p>',
    'How long...',
    '<p class = "italicText">Now that I think about it, she did seem to be nodding off not too long ago. She must’ve been extra tired. Maybe I should just let her rest.</p>',
    '<p class = "italicText">Wait, didn’t she say something about needing to finish something important? Was it important? I can’t remember…</p>',
    
    'jump leek_3_Library_1A_choice'
  ],
  'leek_3_Library_1A_choice': [
    {
      'Choice': {
        'Dialog': 'Taking care of herself is important too, right?',
        'Yes': {
          'Text': 'Wake her up',
          'Do': 'jump leek_3_Library_1A_Yes'
        },
        'No': {
          'Text': 'Let her rest',
          'Do': 'jump leek_3_Library_1A_No'
        }
      }
    }
  ],

  'leek_3_Library_1A_Yes':[
    'Sorry Leek...',
    '<p class = "italicText">I stand up and reach over the table, tapping her shoulder. She mumbles a little but doesn’t stir.</p>',
    'Leek. Leeeeeek',
    //sleep
    'show character leek sigh with fadeIn end-fadeOut',
    'leek:sigh Mm…hm?',
    //blink
    'show character leek sigh with end-fadeOut',
    'show character leek neutral with fadeIn end-fadeOut',
    'wait 1000',
    'show character leek sigh with fadeIn end-fadeOut',
    'show character leek neutral with fadeIn end-fadeOut',
    'wait 1000',
    'show character leek sigh with fadeIn end-fadeOut',
    'show character leek neutral with fadeIn end-fadeOut',
    '<p class = "italicText">Leek’s eyes slowly, slowly open up and she blinks as she looks around.</p>',
    //possible expression here
    'show character leek shocked with exclaim',
    'leek:shocked Wha...?',
    'I think you might’ve fallen asleep a little…',
    //blink
    'show character leek sigh with fadeIn',
    //wide eyes
    'show character leek shocked with fadeIn',
    'wait 1000',
    'show character leek sigh with fadeIn',
    'show character leek shocked with fadeIn',
    '<p class = "italicText">Her eyes blink again and then they go wide as she looks down at her computer. Her fingers tap once, twice and then she sighs.</p>',
    //relieved
    'show character leek sigh with fadeIn',
    'wait 2000',
    'show character leek smile with fadeIn',
    'leek:smile Oh my god, thank you. I think I can finish this before tonight now.',
    '<p class = "italicText">She smiles up at me with her tired eyes and I have to look back down at my hands, fingers fiddling with the keys.</p>',
    'D-don’t mention it. But uh, I think you owe me again?',
    //laugh
    'show character leek laugh with exclaim',
    'leek:laugh So we’re keeping count now?',
    //bgm here
    '<p class = "italicText">The two of us finish our study session, a little more tired and a little smarter (hopefully) than when we started.</p>',
    '<p class = "italicText">The weeks and classes continue to pass by, and Leek and I meet more and more often for…whatever really. Like when she invites me to her dorm one day…</p>',
    'show scene library with fadeOut duration 1.5s',
    'wait 2000',
    'jump leek_5_Room_2A_start'
  ],

  'leek_3_Library_1A_No':[
    '<p class = "italicText">I’m sure Leek could really use the rest. She’s more often exhausted than not. Yeah, she deserves a break.</p>',
    '<p class = "italicText">Maybe I’ll take one too…Just need to finish this…</p>',
    //typing sfx
    //bgm
    'show scene library with fadeOut duration 2s',
    'wait 2000',
   // 'show scene black_screen with fadeOut duration 2s',
    'show background library with fadeIn duration 2s',
    '...hmm?',
    '<p class = "italicText">My eyes slowly open and I lift my head, heavy and foggy, off of the table. And across from me…Leek is nowhere to be seen</p>',
    'Where did she…huh?',
    '<p class = "italicText">I catch the screen of my phone flash, a single text notification on it from Leek.</p>',
    'leek Had to go, sry!! lost time and need to finish this',
    '...shit...',
    '<p class = "italicText">I hold my phone in my hand and sigh to myself. After a minute of awkwardly trying to respond, I just pack up my things and leave the message alone.</p>',
    '<p class = "italicText">Leek and I continue to text every once in a while when we feel like chatting, but continue not to meet up very often.</p>',
    '<p class = "italicText">It’s not until I ask Leek for some help on class work that I meet up with her again, for a small study session at her place…</p>',
    'show scene library with fadeOut duration 1.5s',
    'wait 2000',
    'jump leek_5_Room_2A_start'
  ]
};
