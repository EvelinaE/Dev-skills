/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').onclick = function () {
      fetch('https://api.github.com/users')
        .then(function (response) {
          return response.json();
        })
        .then(function (users) {
          const output = document.getElementById('output');
          output.innerHTML = ''; // Clear the initial message
  
          for (let i = 0; i < users.length; i++) {
            const user = users[i];
            let userInfo = `
              <div class="user-card">
                  <img src="${user.avatar_url}" alt="${user.login}">
                  <p>Login: ${user.login}</p>
              </div>`;
  
            output.innerHTML += userInfo;
          }
        })
        .catch(function (error) {
          console.error('Error ', error);
          output.innerHTML = '<p>Try again.</p>';
        });
    };
  });
  