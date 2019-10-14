document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')  

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
  }

  form.addEventListener('submit', (event) => {
    let username = document.getElementById('name-input').value
    event.preventDefault();
    if (username !== "") {
      fetchJoke()
      .then(res => res.json())
      .then(jokeData => {
        let joke = jokeData.joke
        let newJokeLi = document.createElement('li')
        newJokeLi.innerHTML = `
          <span class="username">${username} says:</span> ${joke}
        `
        jokeList.appendChild(newJokeLi)
      });
    }
  })
})
