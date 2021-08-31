// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
if (x == 23) console.log('hello');
const calcAge = birthyear => 2037 - birthyear;
console.log(45);
console.log(45);
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree celsius:'),
  };
  console.log(measurement.value);
  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
