const leek_2_classroom_intro = {
  'leek_2_classroom_intro_start': [
    '??? <p class = "boldedText">Thank you so much!!! Can you come to Lecture Hall A at the Sciences Building, I’m still in class rn</p>',
    'Great! Let’s see, that building is over…',
    '<p class = "italicText">I pull up the university map on my phone and take a look to see how far away the building is. Not too far by the looks of it, so I should be able to make it there and then to my next class.</p>',
    '<p class = "italicText">With my phone in hand to make sure I don’t get lost, I start to make my way over while taking a look around campus.</p>',
    'show scene science_building with fadeIn duration 1s',
    'Ah, there’s the building entrance.',
    '<p class = "italicText">A lot of the students coming in and out of the building seem…smarter? It’s hard to describe I guess, but they give off the vibe of people who definitely belong here. Oh god, I hope I’m not standing out too much.</p>',
    '<p class = "italicText">It seems like a lot of people are leaving right now. Maybe the class just ended? I should hurry inside before I miss them.</p>',
    '<p class = "italicText">Speaking of which, I wonder what kind of person they are. They seemed nice when they texted, but I’m still a little nervous…</p>',
    'show scene classroom with fadeIn duration 1s',
    'Huh? There’s only one person here?',
    'show character leek sigh with fadeIn duration 1s',
    '<p class = "italicText">At one of the seats is a white haired girl typing away at a laptop, a focused and concerned expression on her face.</p>',
    'Wow, she’s really pretty. But…kind of intimidating too…',
    '<span class = "italicText">Here goes nothing…<br></span> Um, excuse me?',
    '<p class = "italicText">The girl seems absorbed in whatever she’s doing and doesn’t notice me. I guess I should try again?</p>',
    'H-hello?',
    'show character leek shocked with exclaim',
    'play voice leek_intro_1',
    function () {
      const mainScreen = document.querySelector('[data-screen="main"]');
			mainScreen.style.backgroundImage = `url('./assets/scenes/Otome_Classroom.jpg')`;
      localStorage.setItem('met_leek', 'true');
      return true;
    },
    'leek:shocked Hm? Oh!',
    'show character leek neutral',
    '<p class = "italicText">She seems to finally notice me, shooting up in surprise. Her face loosens up a little and suddenly she seems a lot less scary. Her accent is cute too. Australian, I think?</p>',
    'play voice leek_intro_2',
    'leek Sorry, I didn’t see you there. Can I help you with something?',
    'Y-yeah, I’m trying to return this phone I found and-',
    'show character leek shocked with exclaim',
    'play voice leek_intro_3',
    'leek:shocked OH! Yes, yes, that’s mine! Do you have it right now?',
    '<p class = "italicText">The girl practically jumps to her feet, eyes wide. Even though I’m below average height, she still only comes up to my shoulder</p>',
    'Oh, uh, yes, here.',
    '<p class = "italicText">I hand over the lost phone and she takes it from me, opening it up and scrolling through it for a moment. She breathes a huge sigh of relief, like a weight has been taken off her shoulders, and takes my hand suddenly with a smile on her face.</p>',
    'show character leek sigh with exclaim',
    'show character leek smile with fadeIn',
    'play voice leek_intro_4',
    'leek Oh my god, thank you SO much, you’re a lifesaver.',
    'Oh, y-yeah, no problem. Just trying to be helpful, you know.',
    '<p class = "italicText">She laughs a little and lets go of my hand, though I can still feel how it was a little cold. Looking at her a little more closely, she has some serious eye bags, and even the way she laughed seemed a little exhausted. I guess she must put in a lot of work.</p>',
    'play voice leek_intro_5',
    'leek Well, I owe you one for sure now. Ah, I’m Leek, by the way.',
    'play voice leek_intro_6',
    'leek You…seem a little new here…wait, that was rude, haha. Sorry, I guess I’m kinda tired.',
    'Don’t worry about it, haha. I guess I’m just that obvious.',
    'play voice leek_intro_7',
    'leek Well, I could show you around since I do owe you one now. Though, I guess the only places I hang out at are the library and the cafe…',
    'Oh, that’s alright! I don’t really get out much either.',
    'show character leek laugh with exclaim',
    'play voice leek_intro_8',
    'leek:laugh Haha, I guess we have that in common already. Here, let me give you my number, the one you texted was just my friend.',
    'Sure!',
    'show character leek smile with fadeIn',
    '<p class = "italicText">I hand Leek my phone and she adds herself to my tiny list of contacts. Taking it back, I can see that she added herself as “Leek” with a little emoji of a green onion next to her name. It makes me giggle a little bit, until I see the time at the top of the screen.</p>',
    'Oh! I need to get going to my class! Um, should I-',
    'play voice leek_intro_9',
    'leek:smile Don’t worry, I’ll let you know when I’m available. You try not to fail on your first day.',
    '<p class = "italicText">She waves me off and I quickly make my way out of the building at a quick pace, a smile stuck to my face. My first friend came easier than I expected.</p>',
    'show scene school_gate with fadeIn duration 1s',
    '<p class = "italicText">I ended up chatting with Leek a few times over the next week or so, but I still haven’t met up with her yet. She said she’s a biomedical engineering major, which sounds…complicated, to say the least.</p>',
    '<p class = "italicText">She is a couple years above me and seems busy with schoolwork and studying, even though it’s only the beginning of the year.</p>',
    '<p class = "italicText">Eventually, she lets me know that she’d be down to meet up over the weekend, just to chill somewhere.</p>',
    'jump leek_2_classroom_intro_choice'
  ],
  'leek_2_classroom_intro_choice':[
    'show scene split_cafe_and_library with showScene duration 1s',
    {
      'Choice': {
        'Dialog': '<p class = "italicText">She wants to know which place works best for me…</p>',
        'Yes': {
          'Text': 'Library',
          'Do': 'jump leek_3_Library_1A_start'
        },
        'No': {
          'Text': 'Cafe',
          'Do': 'jump leek_6_Cafe_1B_start'
        }
      }
    }
  ]
};
