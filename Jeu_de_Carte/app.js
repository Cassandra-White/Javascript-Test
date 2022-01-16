const deck = {
  suits: ["Coeurs", "As", "Piques", "Carreaux"],
  valeurs: "2,3,4,5,6,7,8,9,10,V,D,R,A",
  deck: [],
  drawnCard: [],
  initializeDeck() {
    const { valeurs, suits, deck } = this;
    for (let valeur of valeurs.split(",")) {
      for (let suit of suits) {
        deck.push({ valeur, suit });
      }
    }
  },
  drawACard() {
    const drawedCard = this.deck.pop();
    this.drawnCard.push(drawedCard);
    return drawedCard;
  },
  drawMultiple(nbrCards){
      const cards = [];
      for(let i = 0; i < nbrCards; i++){
          cards.push(this.drawACard());
      }
      return cards;
  },

  shuffle(){
      const {deck} = this;
      for(let i = deck.length - 1; i > 0 ; i--){
          let j = Math.floor(Math.random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
      }
  },

  shuffleMultiple(nbrShuffle){
    let i = 0;
    while(i < nbrShuffle){
        this.shuffle();
        i++;
    }
  }
};
