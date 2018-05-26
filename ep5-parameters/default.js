const pi = 3.14159265359;

function isRequired(param) {
  throw param + ' is required';
}

function circleArea(radius = isRequired('radius'), decimalLength=2) {
  return (pi * Math.pow(radius, 2)).toFixed(decimalLength);
}

console.log(circleArea(3, 5));
