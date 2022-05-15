document.querySelector('.get-jokes').addEventListener('click', GetJokes);
function GetJokes(e) {
  // get the value out of the input
  const number = document.querySelector('input[type="number"]').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let output = '';
      if (response.type === 'success') {
        console.log(response);
        response.value.forEach((x) => {
          output += `<li>${x.joke}</li>`;
        });
      } else {
        output += '<li>something went wrong</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };
  xhr.send();

  e.preventDefault();
}
