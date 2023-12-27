The utils.js:

```javascript
export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return Math.sqrt(square(x) + square(y));
}
```

The app.js:

```javascript
import { square, diag } from "./utils.js";
console.log(square(4)); // 16
console.log(diag(4, 3)); // 5
```

The `{ }` brackets in ES Modules are used for importing named exports. When you use named exports in a module, you can export multiple values (functions, objects, variables, etc.) and each one has a specific name. The `{ }` brackets are used when importing these named exports to specify exactly which named values you want to import from the module.

In the `utils.js` example, even though there's only one function (`square`), it is exported as a named export:

```javascript
// utils.js
export function square(number) {
  return number * number;
}
```

When importing a named export, you need to use `{ }` to specify the name of the export you want to import, like this:

```javascript
// main.js
import { square } from "./utils.js";
```

**Named vs. Default Exports**:

1. **Named Exports**: You can have multiple named exports in a single module. They are useful when a module exports several things, and you want to only import a few of them. For example:

   ```javascript
   // utils.js
   export function square(number) { ... }
   export function cube(number) { ... }
   ```

   Importing named exports:

   ```javascript
   // main.js
   import { square, cube } from "./utils.js";
   ```

2. **Default Exports**: Each module can have one default export. Default exports are useful when a module exports a single value or when there's a primary functionality being exported. For example:

   ```javascript
   // utils.js
   export default function square(number) { ... }
   ```

   Importing a default export does not require `{ }`:

   ```javascript
   // main.js
   import square from "./utils.js";
   ```

In summary, the `{ }` brackets are used for named exports to explicitly specify which parts of the module you're importing. They're necessary even if there's only one function being exported as a named export. For a single primary export, you might consider using a default export instead, which does not require `{ }` during import.
