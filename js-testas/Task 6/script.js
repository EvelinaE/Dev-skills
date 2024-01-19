/* ------------------------------ TASK 6 -----------------------------------
Turimas "products" masyvas. 

Parašykite funkcijas, kurios atliks nurodytas užduotis:
1. funkcija "getAveragePrice" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" vidutinę kainą kaip skaičių.
2. funkcija "getProductsNames" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų "products" pavadinimus naujame masyve pvz., ['Product 1', 'Product 2', ...].
3. funkcija "getUniqueCategories" - kaip argumentą priims masyvą ir duoto masyvo
atveju grąžins visų unikalių "products" kategorijų sąrašą.
-------------------------------------------------------------------------- */

const products = [
  { id: '1', name: 'Product 1', price: 10, category: 'Electronics' },
  { id: '2', name: 'Product 2', price: 20, category: 'Books' },
  { id: '3', name: 'Product 3', price: 30, category: 'Clothing' },
  { id: '4', name: 'Product 4', price: 40, category: 'Electronics' },
  { id: '5', name: 'Product 5', price: 50, category: 'Books' },
];

function getAveragePrice(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

function getProductsNames(products) {
  let names = [];
  for (let i = 0; i < products.length; i++) {
    names.push(products[i].name);
  }
  return names;
}

function getUniqueCategories(products) {
  let categories = [];
  for (let i = 0; i < products.length; i++) {
    if (!categories.includes(products[i].category)) {
      categories.push(products[i].category);
    }
  }
  return categories;
}


console.log(getAveragePrice(products)); 
console.log(getProductsNames(products)); 
console.log(getUniqueCategories(products)); 
