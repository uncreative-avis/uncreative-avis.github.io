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
  document.getElementById('lastUpdateDate').textContent = modifiedDate.toLocaleDateString('en-GB', options);
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
  
  // SEAM......
  `seam deltarune my beloved`, `#1 seam deltarune enjoyer`, `plutchie......`,
  `love that plutchie cat`, `married to seam deltarune real`,
  
  // FUN
  `cringe culture is dead do whatever you want forever`,
  `undertale taught me gay people exist and look at me now`,
  `if you read this, you are gay lmao`,
  `♪ we gotta get you working overtime / no second guessing when your life's on the line ♪`, // atsuover - OVERTiME
  `[♪ amen break sample plays]`,
  `it is 5am on August 20th, 2026 as i type this i need to go to bed`,
  
  // INSIDE JOKES
  `i keep accidentally typing lesbian instead of vegan i need to go to bed`,
  `RITA DON'T MOVE`,
  `⭐ Avis Star of Approval`,
  `Let's go get our genders back!`,
  
  // ENCOURAGEMENT
  `make a website it's actually worth it`, `you've got this`, `"there is still time" - I Saw the TV Glow (2024)`,
  
  // MIGHT BE A 'LIL TOO EDGY, MAY REMOVE
  `google docs made about me: ${googleDocCount}`,
  
  // QUOTES
  `"why on god's green earth would eggs be a vegetable." - Avis @ Riley, July 7th 2024`,
  `"I would donate my ovulation to you if I could." - Riley, June 26th 2025, 7:40 pm`,
  `"Haha, that's so true! Us whites *love* a realistic panic attack!" - Riley, April 1st 2026, 6:32 pm`,
  `"avis. avis there will soon be ghosts in your living room" - Hazel @ Avis, April 6th 2026, 1:30 am`,
  `"did you see the face of god (not the white woman)" - Avis, April 6th 2026, 1:34 am`,
  
  // THE COMMENTED OUT SECTION OF DEATH AND DESPAIR
  /*
  `witch's cauldron to be turned into a yummy stew with various vegetables`,
  `since the deer lord/specimen 8 from spooky's jumpscare mansion doesn't have a specified gender, i am choosing to see them as a gender-neutral parent who loves their deer children (since they do say during their chase that your flesh will sustain their children so like,,,,,)`,
  */
];

// https://ryangjchandler.co.uk/posts/get-a-random-element-from-a-javascript-array
function randomizeSplashText() {
  const splashText = document.getElementById('splash');
  const selectedMessage = randomSplashMessages[[Math.floor(Math.random() * randomSplashMessages.length)]];
  splashText.innerText = selectedMessage;
};

getDateShit();
randomizeSplashText();