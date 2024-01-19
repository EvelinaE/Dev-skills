/* ------------------------------ TASK 8 -------------------------------------------
Sukurkite klasę "AdvancedCalculator" (naudokite ES6), kuri sukuria objektus su šiais metodais:
1. power() - priima du skaičius (bazę ir laipsnį) ir grąžina bazės pakėlimą laipsniu.
2. squareRoot() - priima vieną skaičių ir grąžina jo kvadratinę šaknį.
3. modulo() - priima du skaičius ir grąžina pirmojo skaičiaus liekaną padalijus iš antrojo.
4. factorial() - priima vieną skaičių ir grąžina jo faktorialą.
------------------------------------------------------------------------------------ */

class AdvancedCalculator {

    power(base, exponent) {
      return Math.pow(base, exponent);
    }
  
    squareRoot(number) {
      return Math.sqrt(number);
    }
  
    modulo(number1, number2) {
      return number1 % number2;
    }
  
    factorial(number) {
      if (number === 0 || number === 1) {
        return 1;
      }
      let result = 1;
      for (let i = 2; i <= number; i++) {
        result *= i;
      }
      return result;
    }
  
  }
  
  // Test
  const advancedCalculator = new AdvancedCalculator();
  console.log(advancedCalculator.power(2, 3));        // Result: 8
  console.log(advancedCalculator.squareRoot(16));     // Result: 4
  console.log(advancedCalculator.modulo(10, 4));      // Result: 2
  console.log(advancedCalculator.factorial(5));       // Result: 120
  