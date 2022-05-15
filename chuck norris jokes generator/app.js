document.querySelector('.get-jokes').addEventListener('click', GetJokes);
function GetJokes(e) {
  // get the value out of the input
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
    }
  };
  xhr.send();

  e.preventDefault();
}
