function generateArray(start, end) {
  const direction = start < end ? 1 : -1;
  const result = [];
  for (let i = start; i !== end; i += direction) {
    result.push(i);
  }
  result.push(end);
  return result;
}

console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]