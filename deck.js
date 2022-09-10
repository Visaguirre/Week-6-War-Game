

const SUITS = ["♠'s", "♣'s", "♥'s", "♦'s"]   // difference between static variable and const? 
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
]
// Map object used to coorrelate a pair of values
const  valuesMap = {
'A': 1,
'2': 2,
'3': 3,
'4': 4,
'5': 5,
'6': 6,
'7': 7,
'8': 8,
'9': 9,
'10': 10,
'Jack': 11,
'Queen': 12,
'King': 13,
}



class Card {

  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Player {

  constructor(name) {
    this.name = prompt ('Enter Players Name');
    this.playerDeck = [];
    this.playerScore = 0;
  }

  addNewDeck(deck) {
    this.playerDeck = deck;
  }
}

class Deck {

  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  //getter function used to assign a property to a function or instance of a class
  get numberOfCards() {
    return this.cards.length;
  }
  
  shuffle() {
    
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      
      const newIndex = Math.floor(Math.random() * (this.numberOfCards));
      
      const oldValue = this.cards[newIndex];
      
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

// flat.Map returns simplified array from [[1,2][3,4]] - [1,2,3,4]
function freshDeck() {
  
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value);
    });
  });
}


function setupGame(player1, player2) {
  
  const deck = new Deck();
  
  deck.shuffle();

  
  const middleOfDeck = (deck.numberOfCards / 2);

  player1.addNewDeck(deck.cards.slice(0, middleOfDeck));
  
  player2.addNewDeck(deck.cards.slice(middleOfDeck, deck.numberOfCards));
 

} 


function roundOutput(player1, player2, roundNum) {
  console.log(`${player1.name} played: ${player1.playerDeck[roundNum].value} of ${player1.playerDeck[roundNum].suit}
  `);
  console.log(`${player2.name} played: ${player2.playerDeck[roundNum].value} of ${player2.playerDeck[roundNum].suit}
  `);
}


function playRoundResults(player1, player2) {
  
  for (let i = 0; i < player1.playerDeck.length; i++) {
      roundOutput(player1, player2, i);
    if (valuesMap[player1.playerDeck[i].value] >valuesMap[player2.playerDeck[i].value]) {
      player1.playerScore += 1;
      console.log(`${player1.name} wins this round`);
    } else if (valuesMap[player1.playerDeck[i].value] <valuesMap[player2.playerDeck[i].value]) {
      player2.playerScore += 1;
      console.log(`${player2.name} wins this round`);
    } else {
      console.log("Tie Round");
    }
  }
}


function finalScore(player1, player2) {
  if (player1.playerScore > player2.playerScore) {
    console.log(`${player1.name} has won this round with a total score of: ${player1.playerScore}`);
  } else if (player1.playerScore < player2.playerScore) {
    console.log(`${player2.name} has won this round with a total score of: ${player2.playerScore}`);
  } else {
    console.log(`${player1.name} and ${player2.name} have tied!`);
  }
} 

let John = new Player("John");
let Jane = new Player("Jane");


setupGame(John, Jane);

playRoundResults(John, Jane);

finalScore(John, Jane)