In Javascript primitive data types are immutable. In the following example, `name.toUpperCase()` call does not modify the value of name. It creates a new String object.

```javascript
const name = "John Doe";
console.log(name);
const newString = name.toUpperCase();
console.log(name);
console.log(newString);
```

Fix for camelcase issue: change new_string to newString. Fix for name is deprecated, change it to first:

```javascript
const first = "John";
console.log(first);
const newString = first.toUpperCase();
console.log(first);
console.log(newString);
```

Another option to disable TypeScript errors in a JavaScript file in Visual Studio Code:

Change VS Code Settings

For a more global approach, you can change the settings in VS Code:

- Open Settings (`Ctrl` + `,` or `Cmd` + `,` on Mac).
- Search for `JavaScript validation`.
- Uncheck the `JavaScript > Validate: Enable` option.

```javascript
const name = "John Doe";
console.log(name);
const newString = name.toUpperCase();
console.log(name);
console.log(newString);
```

This code will not give the error for name constant.
