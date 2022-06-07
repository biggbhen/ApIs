const logData = document.querySelector('.button');
const word = document.querySelector('.advice');
const adviceId = document.querySelector('.adviceId');
const adv = new Advice();
// const store = new Store();

// const advData = store.getAdviceData();
// document.addEventListener('DOMContentLoaded', adv.getAdvice);
logData.addEventListener('click', () => {
  adv.getAdvice().then((data) => {
    // console.log(data);
    word.textContent = data.response.slip.advice;
    adviceId.textContent = `#${data.response.slip.id}`;
  });
});
