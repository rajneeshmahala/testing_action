const { add } = require("../app");

function assertEqual(actual, expected) {
  if (actual !== expected) {
    console.error(`❌ Test failed: ${actual} !== ${expected}`);
    process.exit(1);
  }
}

console.log("Running tests...");

assertEqual(add(2, 3), 5);
assertEqual(add(1, 1), 2);

console.log("✅ All tests passed");


