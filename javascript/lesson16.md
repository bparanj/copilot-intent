## Step 1

Create the jsconfig.json in the root of the project.

```json
{
  "compilerOptions": {
    "checkJs": true
  },
  "include": [
    "*.js" // This includes all JS files in the root. Adjust if your structure is different.
  ]
}
```

## Step 2

Press: Cmd + Shift + P and enter 'Reload Window' and select: 'Developer: Reload Window'.

## Step 3

```javascript
/**
 * @param {number} x
 * @returns {string}
 */
// Write a function to convert a given input number to a string.
function convertToString(x) {
  return x.toString();
}
console.log(convertToString("12"));
```

Hover over the string argument "12" in VS code. It will now be underlined with red squiggly line to indicate error for the input type.
