```javascript
// Write a function validateMealPlan that accepts a callback parameter.

const { error } = require("console");

// The callback parameter is an error handler
function validateMealPlan(mealPlan, errorHandler) {
  // If the fat content is high
  if (mealPlan.fat > 50) {
    // Call the error handler
    errorHandler("Too much fat!");
  } else {
    return "Meal plan is valid!";
  }
}

lunchPlan = {
  fat: 40,
  protein: 20,
  carbs: 20,
};

let result = validateMealPlan(lunchPlan, (error) => console.log(error));
console.log(result);
```
