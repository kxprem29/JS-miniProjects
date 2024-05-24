const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = 'Enter valid height.';
  }
  if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = 'Enter valid weight.';
  }
  const bmi = ((weight / (height * height)) * 10000).toFixed(2);

  // result.innerHTML = `<span>BMI for the given data is ${bmi}.</span>`;
  result.appendChild(document.createTextNode(`BMI is: ${bmi}`));
  if (bmi < 18.6) {
    result.appendChild(document.createTextNode(', BMI Guide: Under Weight'));
  } else if (bmi >= 18.8 && bmi <= 24.9) {
    result.appendChild(document.createTextNode('Normal Weight'));
  } else {
    result.appendChild(document.createTextNode('Over Weight'));
  }
});
