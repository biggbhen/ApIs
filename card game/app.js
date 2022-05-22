const nameInput1 = document.querySelector('#player1-name');
const nameInput2 = document.querySelector('#player2-name');
let deckId = '';
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((res) => res.json())
  .then((data) => {
    deckId = data.deck_id;
  })
  .catch((err) => {
    console.log(`error${err}`);
  });

document
  .querySelector("input[type='submit']")
  .addEventListener('click', (e) => {
    const nameInput1Val = nameInput1.value;
    const nameInput2Val = nameInput2.value;
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector('.player1-card').src = data.cards[0].image;
        document.querySelector('.player2-card').src = data.cards[1].image;
      })
      .catch((err) => {
        console.log(`error${err}`);
      });

    document.querySelector(
      '.player1-win'
    ).innerText = `${nameInput1Val} : Wins!`;
    document.querySelector(
      '.player2-win'
    ).innerText = `${nameInput2Val} : Wins!`;

    e.preventDefault();
  });
