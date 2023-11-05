const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;

  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const resultObj = {
    email,
    password,
  };

  console.log(resultObj);
  form.reset();
});
