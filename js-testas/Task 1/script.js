/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (e) {
      e.preventDefault();
  
      const kg = parseFloat(document.getElementById('search').value);
  
      if (isNaN(kg)) {
        document.getElementById('output').innerHTML = '<p style="background-color: #feffdb; color: #4d2801; border-radius: 10px; padding: 15px; margin-top: 10px; width: 65%; margin-left: auto; margin-right: auto;">Error</p>';
        return;
      }
  
      const pounds = kg * 2.20462; // 1 kg = 2.20462 lb
      const grams = kg * 1000;     // 1 kg = 1000 g
      const ounces = kg * 35.274;  // 1 kg = 35.274 oz
  
      document.getElementById('output').innerHTML = `
              <p style="background-color: #feffdb; color: #4d2801; border-radius: 10px; padding: 15px; margin-top: 10px; width: 65%; margin-left: auto; margin-right: auto;">${kg} kg = ${pounds.toFixed(2)} lb</p>
              <p style="background-color: #feffdb; color: #4d2801; border-radius: 10px; padding: 15px; margin-top: 10px; width: 65%; margin-left: auto; margin-right: auto;">${kg} kg = ${grams.toFixed(2)} g</p>
              <p style="background-color: #feffdb; color: #4d2801; border-radius: 10px; padding: 15px; margin-top: 10px; width: 65%; margin-left: auto; margin-right: auto;">${kg} kg = ${ounces.toFixed(2)} oz</p>`;
    });
  });
  