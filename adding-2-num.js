// Simple JavaScript: Find the greatest of two numbers
// Usage (Node): node adding-2-num.js 5 10

function greatest(a, b) {
  const x = Number(a);
  const y = Number(b);

  if (Number.isNaN(x) || Number.isNaN(y)) {
    return NaN; // simple behavior for non-numeric input
  }

  return x > y ? x : y;
}

// CLI support
if (typeof require !== 'undefined' && require.main === module) {
  const [,, a, b] = process.argv;
  if (a === undefined || b === undefined) {
    console.log('Usage: node adding-2-num.js <num1> <num2>');
    process.exit(1);
  }
  const result = greatest(a, b);
  if (Number.isNaN(result)) {
    console.log('Please provide two numeric values.');
    process.exit(2);
  }
  console.log(`Greater of ${a} and ${b} is ${result}`);
}

// Export for reuse
if (typeof module !== 'undefined') module.exports = { greatest };