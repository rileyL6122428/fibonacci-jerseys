function getFibonacciNumber(index) {
  let number;
  if (index === 1) {
    number = 0;
  } else if (index === 2) {
    number = 1;
  } else {
    number = getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2);
  }
  return number;
}