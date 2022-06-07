class Advice {
  async getAdvice() {
    const getadv = await fetch('https://api.adviceslip.com/advice');
    const response = await getadv.json();

    return {
      response,
    };
  }
}
