```javascript
// Use function constructor to convert gallons to liters
// 1 gallon = 3.78541 liters
// 1 liter = 0.264172 gallons

const convertToLiters = Function("gallons", "return gallons * 3.78541");
console.log(convertToLiters(2));
```
