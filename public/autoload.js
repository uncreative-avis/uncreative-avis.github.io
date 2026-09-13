fetch('nav.html')
  .then(response => response.text())
  .then(html => {
    const navContainer = document.getElementById('nav-container');
    navContainer.innerHTML = html;
  }
);

// https://natclark.com/tutorials/javascript-reduced-motion/
const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  
window.addEventListener('scroll', () => {
  if (!isReduced) {
    document.body.style.backgroundPositionY = `${window.scrollY * -0.25}px`;
  }
});

function getDateShit() {
  const modifiedDate = new Date(document.lastModified);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateText = document.getElementById('lastUpdateDate')
  if (!dateText) {
    return;
  }
  dateText.textContent = modifiedDate.toLocaleDateString('en-GB', options);
};

function showAO3Warning() {
  const text = `Heads up: My AO3 has (or at least *will* have) some works that have selfshipping and some potentially upsetting themes. Tags are your friend!\n\nPress OK to proceed or Cancel to go back.`;

  const link = "https://archiveofourown.org/users/avis_just_exists/";

  if (confirm(text) === true) {
    window.open(link, "_blank");
  }
};

const googleDocCount = 0;

const randomSplashMessages = [
  // ANIMALS
  `just a cat, meow meow`, `just a dog, bark bark`, `just a mouse, squeak squeak`, `just a bird, sQUACK`,
  
  // PAWBS
  `made with my own two paws!`, `my paws!`, `plutchie in my paws`,
  `my paws r okay-sized for the keyboard :|`,
  `my paws r 2 big for the keyboard :(`,
  `my paws r 2 small for the keyboard :(`,
  `my paws r correctly sized for the keyboard :)`,
  `baps u in the face with my big fluffy fucking paws`,
  `baps u on the snout with my big fluffy fucking paws`,
  `pets u on the head with my big fluffy fucking paws`,
  
  // SEAM......
  `seam deltarune my beloved`, `#1 seam deltarune enjoyer`, `plutchie......`,
  `love that plutchie cat`, `married to seam deltarune real`, `See you again... Or not. Ha ha ha ha...`,
  `Should they have a large fluffy tail? Or, maybe it was torn off, by cruel and loving hands.`,
  `"The power of lost dreams."`,
  
  // FUN
  `undertale taught me gay people exist and look at me now`,
  `if you read this, you are gay lmao`,
  `[♪ amen break sample plays]`,
  `it is 5am on August 20th, 2026 as i type this i need to go to bed`,
  `y'know maybe the name "uncreative avis" isn't the most accurate...`,
  `did u know you can press F5 to refresh the page? come back later for more computer's tip's!`,
  `oh hey the html and css are -- oh. oh damn they're really going at it. oh shit and js is joining?!`,
  `*SQUEAKY TOY NOISE*`, `:rivet:`, `:terror:`, `YOU FUCKING IDIOT /ref`, `horses dni`,
  `ugly rat.jpg and cheese.jpeg are the doomed yaoi on my desktop`,

  // SOFTWARE RECS
  `use localsend to transfer files between your devices!`, `use ren'py to make a visual novel easily!`,
  `use photopea for image editing!`, `use godot to make a video game!`, `use audacity for audio editing!`,
  `use neocities to host a website!`, ``,
  
  // LYRICS
  `♪ WE GOTTA GET YOU WORKING OVERTiME / NO SECOND GUESSING WHEN YOUR LIFE'S ON THE LINE ♪`, // atsuover - OVERTiME
  `♪ I've been everywhere / Through every undefended door ♪`, // Ninajirachi & Porter Robinson - WannaCry
  `♪ I've got a song that nobody knows / I put it on when nobody's home ♪`, // Ninajirachi - iPod Touch
  `♪ I love your puppy-dog head / But I wanna know what's under it ♪`, // passengerprincess - HEADLESS LOUNGE
  `♪ Love to take it slow / (ROLL THE KATAMARI) ♪`, // Femtanyl - KATAMARI
  `♪ There are wires overhead and there are wires in your hands ♪`, // Femtanyl - GIRL HELL 1999
  `♪ You say too late to start, got your heart in a headlock ♪`, // Imogen Heap - Headlock
  `♪ don't touch / don't be patronizing / i'll be / self-coffinizing ♪`, // KITCALIBER - HALCYONDAZE - SELF​-​COFFINIZING
  `♪ She's a Mew Mew girl with a magic AK! ♪`, // chat t. leaves! - Cutie Mew Mew Magic (Gun Version)

  // REFERENCES
    // Scarlet Hollow
    // `Tip: Dialogue options marked (Romance) will start a romantic arc with the character you're talking to, and will lock you out of romantic arcs with other characters.`,
      `Dammit, kid, you're makin' it sound all queer!`, // Julius, Episode 5
      `Stella, stop sneaking into my mines. Please, I am literally begging you.`, // Tabitha, Episode 2
      `• (Lie) "I'm allergic to soap and can't wash my hands."`, // Player choice, Episode 3
    // Slay the Princess
      `You're on a path in the woods. And at the end of that path is a cabin. And in the basement of that cabin is a princess. You're here to slay her. If you don't, it will be the end of the world.`,
      `Heart. Lungs. Liver. Nerves.`,
    // DELTARUNE
      // Flowery
      `We could even call it a "pacifist root".`, `Jarona!`, `Ja-orange!`, `Just-- kidding!`, `It's my Jarona!`,
      `Ten feet twenty the flower man`,
      // Aqua
      `Hee hee! What's going on!? Is the whole world revolving!?`,
      // Seth
      `What the book are you guys doing here!?`, `THOSE WERE MY TACTICAL DIAGRAMS!!!`,
      // Yellow
      `Seth, I found them creams. They's steam.`,
      // That one fuckass Floradinn with the big fluffy $$$$-ing tail
      `(Swishes my big fluffy $$$$-ing tail)`, `W-woah!!! (destroys buildings because it's so big) YOU GUYS!!!`,
  
  // INSIDE JOKES
  `i keep accidentally typing lesbian instead of vegan i need to go to bed`,
  `RITA DON'T MOVE`, `NOT MY ONE DOLLAR MAKEUP SET`, `It's okay! ALSO HELP I'M TRAPPED IN THE VENDINF MACHINE`,
  `⭐ Avis Star of Approval`,
  `Let's go get our genders back!`,
  `don't let us drown in mud and tar`,
  `i am genocides about these things`,
  `i am neutral about these things`,
  `i am true pacifists about these things`,
  `envy kills a man to get her Tesco Meal Deal`,
  `fell into aperture science blender`,
  `So...many..."HUNGRY" MIDDLE-AGED WOMEN!!! #FiftyShadesofAwkward`, // that one matpat tweet
  `Nods my big beautiful head`,
  `Holy macaroni! Mmm... macaroni!`,
  `noo, they cut my head off and turned me into a robot!`, // bumdibblerousgoosiac on tiktok
  
  // ENCOURAGEMENT
  `make a website it's actually worth it`, `you've got this`, `"there is still time" - I Saw the TV Glow (2024)`,
  `as long as you're not harming anyone, do whatever you want forever`,
  `cringe culture is dead do whatever you want forever`, `you don't need ai to do it for you, you've got this`,
  
  // MIGHT BE A 'LIL TOO EDGY, MAY REMOVE
  `google docs made about me: ${googleDocCount}`,
  
  // QUOTES
  `"why on god's green earth would eggs be a vegetable." - Avis @ Riley, July 7th 2024`,
  `"I would donate my ovulation to you if I could." - Riley, June 26th 2025, 7:40 pm`,
  `"Haha, that's so true! Us whites *love* a realistic panic attack!" - Riley, April 1st 2026, 6:32 pm`,
  `"avis. avis there will soon be ghosts in your living room" - Hazel @ Avis, April 6th 2026, 1:30 am`,
  `"did you see the face of god (not the white woman)" - Avis, April 6th 2026, 1:34 am`,
  `"Me when my dad orders fast food after a week but I trip on the stairs" - Riley, March 20th 2025, 11:19 pm`,
  `"RUNNNN THAT MF IS LIDL JEFF THE KILLER" - Riley, March 4th 2025, 11:08 pm`,
  `"AT LEAST HE DOESNT LOOK LIKE HE'D DISSOLVE BY BEING HIT BY A LIGHT BREEZE" - Avis, November 20th 2023, 7:52 am`,
  
  // THE COMMENTED OUT SECTION OF DEATH AND DESPAIR
  /*
  `witch's cauldron to be turned into a yummy stew with various vegetables`,
  `since the deer lord/specimen 8 from spooky's jumpscare mansion doesn't have a specified gender, i am choosing to see them as a gender-neutral parent who loves their deer children (since they do say during their chase that your flesh will sustain their children so like,,,,,)`,
  */
];

// https://ryangjchandler.co.uk/posts/get-a-random-element-from-a-javascript-array
function randomizeSplashText() {
  const splashText = document.getElementById('splash');
  if (!splashText) {
    return;
  }
  const selectedMessage = randomSplashMessages[[Math.floor(Math.random() * randomSplashMessages.length)]];
  splashText.innerText = selectedMessage;
};

getDateShit();
randomizeSplashText();