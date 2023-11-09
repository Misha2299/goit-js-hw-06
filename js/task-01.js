const item = document.querySelectorAll('.item');
console.log('Number of categories:', item.length);

item.forEach(item => {
    // Варіант 1
    // console.log('Category:', item.querySelector('h2').textContent);
    // console.log('Elements:', item.querySelectorAll('li').length);

    // Варіант 2
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});



