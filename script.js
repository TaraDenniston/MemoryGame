const gameContainer = document.getElementById("game");

let cardsTurnedOver = 0;
let cardOne = "";
let cardTwo = "";
let unmatchedIDs = [];
let matchedIDs = [];
let totalMatches = 0;
const newGameButton = document.getElementById("new_game");

const images = [
  {image:"images/bear.jpg", alt:"bear", creditName:"🇸🇮 Janko Ferlič", creditLink:"https://unsplash.com/@itfeelslikefilm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/brown-puppy.jpg", alt:"brown puppy", creditName:"Joy Christian", creditLink:"https://unsplash.com/@jchr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/bunny.jpg", alt:"bunny", creditName:"Guillermo Casales", creditLink:"https://unsplash.com/@gcasales?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/chameleon.jpg", alt:"chameleon", creditName:"Hasmik Ghazaryan Olson", creditLink:"https://unsplash.com/@find_something_pretty_everyday?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/chick.jpg", alt:"chick", creditName:"Darius Cotoi", creditLink:"https://unsplash.com/@dariuscotoi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/cow.jpg", alt:"cow", creditName:"Carter Yocham", creditLink:"https://unsplash.com/@carteryocham?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/deer.jpg", alt:"deer", creditName:"jean wimmerlin", creditLink:"https://unsplash.com/@jwimmerli?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/duck.jpg", alt:"duck", creditName:"Kerin Gedge", creditLink:"https://unsplash.com/@tunebasics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/elephant.jpg", alt:"elephant", creditName:"Maurits Bausenhart", creditLink:"https://unsplash.com/@maur1ts?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/fox.jpg", alt:"fox", creditName:"Nikolay Tchaouchev", creditLink:"https://unsplash.com/@nxn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/frog.jpg", alt:"frog", creditName:"David Clode", creditLink:"https://unsplash.com/@davidclode?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/gecko.jpg", alt:"gecko", creditName:"Andy Holmes", creditLink:"https://unsplash.com/es/@andyjh07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/goslings.jpg", alt:"goslings", creditName:"Jan Meeus", creditLink:"https://unsplash.com/@janmeeus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/gray-kitten.jpg", alt:"gray kitten", creditName:"Slavy Dorozhkin", creditLink:"https://unsplash.com/@hashtaglilac?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/hamster.jpg", alt:"hamster", creditName:"Ricky Kharawala", creditLink:"https://unsplash.com/@sweetmangostudios?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/horse.jpg", alt:"horse", creditName:"Soledad Lorieto", creditLink:"https://unsplash.com/@sool_lorieto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/husky.jpg", alt:"husky", creditName:"Ignacio R", creditLink:"https://unsplash.com/es/@blueskiesburning?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/kitten.jpg", alt:"kitten", creditName:"Tobias", creditLink:"https://unsplash.com/@tobiash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/koala.jpg", alt:"koala", creditName:"Kerin Gedge", creditLink:"https://unsplash.com/@tunebasics?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/lamb.jpg", alt:"lamb", creditName:"Bill Fairs", creditLink:"https://unsplash.com/@moonboyz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/llama.jpg", alt:"llama", creditName:"Raoul Droog", creditLink:"https://unsplash.com/@raouldroog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/monkey.jpg", alt:"monkey", creditName:"Benjamin Wong", creditLink:"https://unsplash.com/@ben_wong_31?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/owls.jpg", alt:"owls", creditName:"Dave Lowe", creditLink:"https://unsplash.com/@davelowephoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/panda.jpg", alt:"panda", creditName:"billow926", creditLink:"https://unsplash.com/@billow926?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/penguin.jpg", alt:"penguin", creditName:"Crina-Miriam Cretu", creditLink:"https://unsplash.com/@crinamiriam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/pig.jpg", alt:"pig", creditName:"Christopher Carson", creditLink:"https://unsplash.com/@bhris1017?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/racoon.jpg", alt:"racoon", creditName:"Gary Bendig", creditLink:"https://unsplash.com/@kris_ricepees?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/retriever.jpg", alt:"retriever", creditName:"Vander Films", creditLink:"https://unsplash.com/es/@vanderfilms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/rhino.jpg", alt:"rhino", creditName:"Roman Nguyen", creditLink:"https://unsplash.com/@march08?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/seal.jpg", alt:"seal", creditName:"Adam King", creditLink:"https://unsplash.com/@4damk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/snail.jpg", alt:"snail", creditName:"Klaus Steinberg", creditLink:"https://unsplash.com/@on_earth_in_space?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/white-kitten.jpg", alt:"white kitten", creditName:"Amy Chen", creditLink:"https://unsplash.com/@spdumb2025?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/squirrel.jpg", alt:"squirrel", creditName:"Yuriy Mayatnikov", creditLink:"https://unsplash.com/@halofourteen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/turtle.jpg", alt:"turtle", creditName:"Jeremy Bezanger", creditLink:"https://unsplash.com/@unarchive?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}, 
  {image:"images/tiger.jpg", alt:"tiger", creditName:"Kurt Cotoaga", creditLink:"https://unsplash.com/@kydroon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText", sourceName:"Unsplash", sourceLink:"https://unsplash.com/s/photos/baby-animal?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}
]


// Create array of 12 random images

function randomImagesArray() {
  const numImages = 12;  
  let randomIndexes = [];
  // Choose random numbers from 0 to 34
  while (randomIndexes.length < numImages) {
    let randomNum = Math.floor(Math.random() * 34);
    if (!randomIndexes.includes(randomNum)) {
      randomIndexes.push(randomNum);
    }
  }

  //double the array elements
  for (i = 0; i < numImages; i++) { 
    randomIndexes.push(randomIndexes[i]);
  }

  return randomIndexes;
}

let randomImages = randomImagesArray();


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledImages = shuffle(randomImages);


// create a card for each element of the array
// add an event listener for a click for each card
let internalID = 0;

function createDivsForImages(indexArray) {
  for (let index of indexArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(index);
    newDiv.classList.add("card");
    newDiv.dataset.imageIndex = index;
    newDiv.dataset.identifier = internalID;

    // create a child img element for the new div
    const newImg = document.createElement("img");
    newImg.src = images[index].image;
    newImg.alt = images[index].alt;
    newImg.dataset.imageIndex = index;
    newImg.dataset.identifier = internalID;
    newDiv.append(newImg);
    internalID++;

    // create overlay text attributing photographer
    const textOverlay = document.createElement("div");
    textOverlay.className = "transparent";
    const spanOne = document.createElement("span");
    spanOne.textContent = "Photo by ";
    textOverlay.append(spanOne);
    const photographer = document.createElement("a");
    photographer.textContent = images[index].creditName;
    photographer.href = images[index].creditLink;
    textOverlay.append(photographer);
    const spanTwo = document.createElement("span");
    spanTwo.textContent = " on ";
    textOverlay.append(spanTwo);
    const platform = document.createElement("a");
    platform.textContent = images[index].sourceName;
    platform.href = images[index].sourceLink;
    textOverlay.append(platform);
    newDiv.append(textOverlay);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


// TODO: Implement this function!
function handleCardClick(event) {

  // only proceed if the identifier of the clicked card is in neither array
  if ((!unmatchedIDs.includes(event.target.dataset.identifier)) &&
      (!matchedIDs.includes(event.target.dataset.identifier))) {
    cardsTurnedOver++;
  } else {
    return;
  }

  // add the identifier to unmatchedIDs
  unmatchedIDs.push(event.target.dataset.identifier);

  // turn card face up
  if ((cardsTurnedOver < 3)) {
    event.target.classList.add("face_up");
  } else {
    return;
  }

  // if only one card is turned over
  if (cardsTurnedOver === 1) {
    // store the element for later use
    cardOne = event.target;
  }

  // if two cards are turned over
  if (cardsTurnedOver === 2) {
    cardTwo = event.target;

    // compare image-index to see if they match
    // if so, leave them facing up and record the match
    if ((cardOne.dataset.imageIndex === cardTwo.dataset.imageIndex) &&
        (cardOne.dataset.identifier !== cardTwo.dataset.identifier)) {
      totalMatches++;

      // track the identifiers in matchedIDs and remove them from unmatchedIDs
      matchedIDs.push(cardOne.dataset.identifier);
      matchedIDs.push(cardTwo.dataset.identifier);
      let indexOne = unmatchedIDs.indexOf(cardOne.dataset.identifier);
      unmatchedIDs.splice(indexOne, 1);
      let indexTwo = unmatchedIDs.indexOf(cardTwo.dataset.identifier);
      unmatchedIDs.splice(indexTwo, 1);

      // and reset the variables
      cardOne = "";
      cardTwo = "";
      cardsTurnedOver = 0;

      // if all matches have been found, show the New Game button
      if (totalMatches === 12) {
        newGameButton.style.visibility = "visible";
      }

    // if not, turn them back over after a second
    } else if ((cardOne.dataset.imageIndex !== cardTwo.dataset.imageIndex) &&
               (cardOne.dataset.identifier !== cardTwo.dataset.identifier)) {
      
      setTimeout(function() {
        // turn over the cards
        cardOne.classList.remove("face_up");
        cardTwo.classList.remove("face_up");

        // and reset the variables
        cardOne = "";
        cardTwo = "";
        cardsTurnedOver = 0;
        unmatchedIDs = [];
      }, 1000);    

    } else {
      return;
    }
  }
}


function newGame() {
  // reset variables
  cardsTurnedOver = 0;
  cardOne = "";
  cardTwo = "";
  unmatchedIDs = [];
  matchedIDs = [];
  totalMatches = 0;

  // clear game board
  gameContainer.innerHTML = "";

  // choose new random images and shuffle cards
  randomImages = randomImagesArray();
  shuffledImages = shuffle(randomImages);

  // create new game board
  createDivsForImages(shuffledImages);

  newGameButton.style.visibility = "hidden";
}


newGameButton.addEventListener("click", function(event) {
  newGame();
});


// when the DOM loads
createDivsForImages(shuffledImages);

/* */