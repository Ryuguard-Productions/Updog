const leek_7_Room_2B = {
  'leek_7_Room_2B_start': [
    'show scene leek_room_nightlight with fadeIn duration 2s',
    'play music leek_room with loop fade 5',
    '<p class = "italicText">Leek’s dorm is on campus, just a short distance away from the main gate. It’s a nice building that they built recently and she seems to have a room to herself.</p>',
    '<p class = "italicText">So it’s just the two of us in her dorm, with our study session just barely coming to a close well after dusk; night has settled outside Leek’s window and both of us are starting to feel a little tired.</p>',
    'show character leek sigh with fadeIn',
    '<p class = "italicText">With the last bit of study material out of the way, Leek stretches out in the chair at her desk, sighing to herself.</p>',
    'show character leek neutral',
    'play voice leek_room2B_1',
    'leek Think you got it now?',
    'Yeah...hopefully.',
    '<p class = "italicText">I close up the notebook in my hands and shuffle it back into my bag. I can feel my head still bursting from the amount of knowledge crammed into it, all with the help of Leek.</p>',
    'Thanks for the pointers. I’ll put them to good use.',
    'show character leek sigh with exclaim',
    '<p class = "italicText">She just shrugs in response. Although we’ve been at this for a while, we haven’t made much small talk…</p>',
    'show character leek neutral',
    'play voice leek_room2B_2',
    'leek Yeah, don’t mention it. You’re the one putting in all the work. I’m just…being helpful, I guess.',
    'play voice leek_room2B_3',
    'leek Besides, you’re doing me a favor too. Could always use the company around here.',
    'show character leek sad with fadeIn',
    '<p class = "italicText">Leek starts to put away her own materials as well, neatly organizing them into their place at her desk and drawers. She looks out the window at the darkened sky, pausing for a second.</p>',
    'leek:sad ...', 
    'Something up?',
    'show character leek shocked with fadeIn',
    'wait 1000',
    'show character leek sigh with fadeIn',
    'wait 1000',
    'show character leek neutral',
    'wait 1000',
    '<p class = "italicText">Leek seems like she wants to say something, but just as her mouth begins to move, she just shakes her head.</p>',
    'play voice leek_room2B_4',
    'leek Nah, don’t worry about it. You should probably head back, it’s getting pretty late.',
    '<p class = "italicText">She’s right, but…</p>',
    '<p class = "italicText">Leek seems a little…lonely. We haven’t been talking or meeting up as much recently, and I’m not sure if Leek has any other friends.</p>',
    '<p class = "italicText">She looks more tired too. Has she been working on more stuff to distract herself?</p>',
    
    'jump leek_7_Room_2B_choice'
  ],
  'leek_7_Room_2B_choice': [
    {
      'Choice': {
        'Dialog': '<p class = "italicText">I want to ask her about it, but would that be too much? Leek is still more put together than I am, and she does have a point about me needing to leave soon…</p>',
        'Yes': {
          'Text': 'Let Leek have her space.',
          'Do': 'jump leek_7_Room_2B_Yes'
        },
        'No': {
          'Text': 'Push and see what’s wrong.',
          'Do': 'jump leek_7_Room_2B_No'
        }
      }
    }
  ],
  'leek_7_Room_2B_Yes':[
    '<p class = "italicText">With my things packed, I just nod along with Leek’s suggestion.</p>',
    'Um, if you need anything, just let me know, yeah?',
    'play voice leek_room2B_5',
    'leek ...yeah, sure.',
    'show character leek neutral with fadeOut',
    'wait 1500',
    'hide character leek',
    '<p class = "italicText">And with that, I leave Leek’s dorm while she stares at her computer, opening something to work on.</p>',
    '<p class = "italicText">I make a note to myself to start hanging out with Leek more often. I’m sure we’ll meet up again soon.</p>',
    '<p class = "italicText">Right?</p>',
    'show scene leek_room_nightlight with fadeOut duration 2s',
    'stop music leek_room with fade 2',
    'wait 4000',
    'jump leek_8_Room_BadEnd_start',
    'end'
  ],
  'leek_7_Room_2B_No':[
    'If it’s alright with you, I kinda want to stay and hang out.',
    'show character leek shocked with fadeIn',
    '<p class = "italicText">Leek pauses in her seat as the words leave my mouth. She shifts a little, as if the way the thought bounces inside her head was making her actually move.</p>',
    'show character leek sad with fadeIn',
    'play voice leek_room2B_6',
    "leek:sad You…you know I’m just going to work on stuff right? Like I always do?",
    '<p class = "italicText">She says that last part a little bitterly, as if it were something said by someone else instead.</p>',
    'And I don’t mind that one bit. Come on, let’s order some food, that study session left me starving.',
    'show character leek shocked with fadeIn',
    'wait 2000',
    '<p class = "italicText">Leek does that thing again, where she opens her mouth to say something but just changes her mind. Though this time, she sighs and laughs.</p>',
    'show character leek sigh',
    'wait 2000',
    'show character leek laugh with exclaim',
    'play voice leek_room2B_7',
    'leek:laugh Yeah, sure…thanks.',
    'show scene leek_room_nightlight with fadeOut duration 2s',
    'stop music leek_room with fade 2',
    'wait 4000',
    'jump leek_4_Room_GoodEnd_start'
  ]
};
