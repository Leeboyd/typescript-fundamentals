/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs, Diamonds, Hearts, Spades
}

export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

type Card = [Suit, CardNumber]

let c: Card = [Suit.Clubs, CardNumber.Seven]

function createDeck(): Card[] {
  let cards: Card[] = [];
  for (let s = 0; s < Object.keys(Suit).length; s+=2) {
    for (let n = 0; n < Object.keys(CardNumber).length; n+=2) {
      cards.push([s/2, n/2]);
    }
  }
  return cards
}

export class Dealer {
  cards: Card[] = []
  constructor() {
    this.cards = createDeck()
  }
 
  // deals 5 cards [Suit(0-3), Number(0-12)]
  dealHand(numCards: number): Card[] {
    return []
  }
  // number of cards left in the deck
  getLength(): number {
    return this.cards.length
  }
  readCard(card: Card): string {
    return ''
  }
}

