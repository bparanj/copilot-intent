```javascript
/**
 * @param {number} gallons
 * @returns {number} liters
 */

let result = convertGallonsToLiters(1);
// Write a function that converts gallons to liters. There are 3.78541 liters in a gallon.
function convertGallonsToLiters(gallons) {
  return gallons * 3.78541;
}
console.log(result);
```

You can see that the function is called before it is defined. It still works. This is hoisting.
