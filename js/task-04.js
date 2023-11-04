const counterValue = document.querySelector("#value");
const btnD = document.querySelector('[data-action="decrement"]');
const btnI= document.querySelector('[data-action="increment"]');

let value = 0;

btnD.addEventListener("click", () => {
    value -= 1;
    counterValue.textContent = value;
});

btnI.addEventListener("click", () => {
    value += 1;
    counterValue.textContent = value;

});