const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById("ingredients");

// Варіант 1
// ingredients.forEach(ingredient => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//   ul.appendChild(li);
// });

// Варіант 2

const li = document.createElement("li");
const markup = ingredients.map((item) => `
<li class="item-ingredients">${item}</li>`)
  .join("");

  ul.innerHTML = markup;