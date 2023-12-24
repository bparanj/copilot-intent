```javascript
/**
 * @param {string} s
 * @returns {string}
 */
// Write a function called capitalize that takes a string and returns the captialized string.
// capitalize('whoop') // 'Whoop'
// capitalize('oh hey gurl') // "Oh Hey Gurl"
function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
console.log(capitalize("whoop"));
console.log(capitalize("oh hey gurl"));
```
