const leek_6_Cafe_1B = {
  'leek_6_Cafe_1B_start': [
    'show scene split_cafe_and_library with fadeOut duration 2s',
    'wait 3000',
    'show scene cafe_exterior with fadeIn duration 2s',
    '<p class="italicText">While there are more than a few cafes and coffee shops on or near the campus, Leek decides to show me towards one a little farther away. Nearly there, with the sun beating down on me, I remind myself about the promise of cool drinks at the destination.</p>',
    '<p class="italicText">The small, white building at the corner of the street is easy to spot with its open front and the sign attached to the awning that spelled out “RainPuff Cafe” in big black letters.</p>',
    'show scene cafe_interior with fadeIn duration 1s',
    '<p class="italicText">It was certainly cute, just like Leek said. And surprisingly empty, something I notice as I step into the cool interior of the building.</p>',
    '<p class="italicText">Seems like Leek isn’t here yet. Maybe I should send her a message and ask how far away she is.</p>',
    '<p class="italicText">Would that be too rude though? I guess I might be a little early.</p>',
    '<p class="italicText">Waiting a little won’t hurt, right?</p>',
    //Time passage sfx
    '<p class="italicText">10 minutes now...</p>',
    '<p class="italicText">…Maybe something happened? I guess I’ll shoot her a message.</p>',
    '<p class="boldedText">Hey leek, im at the cafe! you almost here?</p>',
    '<p class="italicText">A few moments pass by while I nervously stare at my screen, idly sipping at the drink that I had ordered. Leek definitely knew her stuff; this was probably the best I’ve had since moving here.</p>',
    '<p class="italicText">A couple more minutes pass by before…</p>',
    //Phone text sfx
    'leek:none <p class="boldedText">Im so sorry i got busy with something, ill be there soon!!!</p>',
    '<p class="italicText">Huh. Did she…forget?</p>',
    '<p class="italicText">Well, I can’t exactly blame her, having missed some stuff before because of…well, that’s not important.</p>',
    'jump leek_6_Cafe_1B_choice'
  ],
  'leek_6_Cafe_1B_choice': [
    {
      'Choice': {
        'Dialog': '<p class="italicText">I wonder how long she’ll be though. She didn’t really say…and I do have my own work I should probably be doing too…</p>',
        'Yes': {
          'Text': 'Reschedule for another time.',
          'Do': 'jump leek_6_Cafe_1B_Yes'
        },
        'No': {
          'Text': 'Give her some time and wait.',
          'Do': 'jump leek_6_Cafe_1B_No'
        }
      }
    }
  ],
  'leek_6_Cafe_1B_Yes':[
    '<p class="boldedText">Its okay!! lets just do this another time then</p>',
    '<p class="italicText">Leek is quick to respond, just replying with a quick</p>',
    'leek:none <p class="boldedText">Sure, np</p>',
    '<p class="italicText">I feel…a little bad, but if she’s that busy, then I guess we have time later…</p>',
    '<p class="italicText">I leave the cafe with my phone in one hand and an empty drink cup in the other. At least the recommendation was nice, even if Leek wasn’t there.</p>',
    //GREY BG
    'show background cafe_interior with fadeOut duration 1s',
    'wait 1500',
    'show background grey_bg with fadeIn duration 1s',
    'wait 1000',
    '<p class="italicText">Leek and I continue to text every once in a while when we feel like chatting, but continue not to meet up very often.</p>',
    '<p class="italicText">It’s not until I ask Leek for some help on class work that I meet up with her again, for a small study session at her place…</p>',
    '*Go to 2B',
    'end'
  ],
  'leek_6_Cafe_1B_No':[
    '<p class="italicText">I’d feel bad about reminding her to come and then just leaving…</p>',
    '<p class="italicText">Snapping a quick picture of my drink, I reply to her panicked message.</p>',
    '<p class="boldedText">ill be waiting!! this is a nice place to hang out anyways :)</p>',
    //Time passage sfx
    '<p class="italicText">Sure enough, Leek is here within a few minutes, sweat clinging to her face as she practically jogs around the corner and into the building.</p>',
    'show character leek blush with backInRight',
    'wait 1500',
    'show character leek sigh with pulse',
    'wait 1500',
    'show character leek blush with pulse',
    'wait 1000',
    'leek:blush Oh my god, I’m sooo sorry, I was just doing some work at my place and I didn’t even realize how-',
    '<p class="italicText">I try to hold it in because she just sounds so sincere, but I can’t help but laugh a little at just how fast the normally tired Leek is talking.</p>',
    'D-don’t worry about it, haha. As long as you’re okay to be here.',
    'show character leek sigh',
    'wait 1500',
    'show character leek blush',
    'leek:blush Yeah of course',
    'show character leek laugh with exclaim',
    'leek:laugh I didn’t think you’d still be here, haha. Thanks.',
    'show character leek smile',
    '<p class="italicText">She smiles at me as she takes a seat across the table, resting her head on her hands.</p>',
    '<p class="italicText">We have a nice chat and some good drinks while Leek cools down, taking a break from the business in both of our schedules. Before we notice it, the day ticks by and soon we make our own way.</p>',
    'show character leek smile with fadeOut',
    '<p class="italicText">The weeks and classes continue to pass by, and Leek and I meet more and more often for…whatever really. Like when she invites me to her dorm one day…</p>',
    'show scene cafe_interior with fadeOut duration 2s',
    'wait 3000',
    'jump leek_5_Room_2A_start'
  ]
};
