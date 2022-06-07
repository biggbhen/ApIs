// class Store {
//   constructor() {
//     this.advice;
//     this.adviceId;
//     this.defaultAdvice = 'Always make sure to keep living';
//     this.defaultAdviceId = '#1';
//   }
//   getAdviceData() {
//     if (localStorage.getItem('advice') === null) {
//       this.advice = this.defaultAdvice;
//     } else {
//       this.advice = localStorage.getItem('advice');
//     }
//     if (localStorage.getItem('adviceId') === null) {
//       this.adviceId = this.defaultAdviceId;
//     } else {
//       this.adviceId = localStorage.getItem('adviceId');
//     }
//     return {
//       advice: this.advice,
//       adviceId: this.adviceId,
//     };
//   }
//   setAdviceData(advice, adviceId) {
//     localStorage.setItem('advice', advice);
//     localStorage.setItem('adviceId', adviceId);
//   }
// }
