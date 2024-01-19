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
  fetch('cars.json')
    .then(response => response.json())
    .then(cars => {
      const output = document.getElementById('output');

      cars.forEach(car => {
        const brandCard = document.createElement('div');
        brandCard.className = 'car-brand-card';

        const brandName = document.createElement('h2');
        brandName.textContent = car.brand;
        brandCard.appendChild(brandName);

        const modelsList = document.createElement('ul');
        modelsList.className = 'models-list';

        car.models.forEach(model => {
          const modelItem = document.createElement('li');
          modelItem.textContent = model;
          modelsList.appendChild(modelItem);
        });

        brandCard.appendChild(modelsList);
        output.appendChild(brandCard);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
