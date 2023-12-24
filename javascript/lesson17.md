Setting up a linter in a simple JavaScript project in Visual Studio Code typically involves using ESLint, a popular linting tool for JavaScript. Here's a step-by-step guide to set it up:

1. **Install Node.js and npm:**
   Ensure you have Node.js and npm (Node Package Manager) installed. You can download them from [Node.js official website](https://nodejs.org/).

2. **Initialize Your Project:**
   If your project doesn't already have a `package.json` file, initialize it by running:

   ```bash
   npm init -y
   ```

3. **Install ESLint:**
   Install ESLint in your project as a dev dependency:

   ```bash
   npm install eslint --save-dev
   ```

4. **Set Up ESLint:**
   Configure ESLint by running:

   ```bash
   npx eslint --init
   ```

   Follow the prompts to set up ESLint according to your preferences (coding style, environments, etc.).

5. **Configure ESLint:**
   After initialization, ESLint will create a `.eslintrc` file in your project directory. You can modify this file to customize rules. For example:

   ```json
   {
     "rules": {
       "eqeqeq": "warn",
       "curly": "error",
       "quotes": ["error", "double"]
     }
   }
   ```

6. **Install the ESLint Extension for VS Code:**

   - Open VS Code.
   - Go to Extensions (`Ctrl+Shift+X`).
   - Search for `ESLint` and install it.

7. **Configure VS Code Settings:**
   Optionally, you can modify your VS Code settings to further integrate ESLint. Open the command palette (`Ctrl+Shift+P`), type `Preferences: Open Settings (JSON)`, and add or ensure these settings:

   ```json
   {
     "eslint.validate": ["javascript"],
     "eslint.autoFixOnSave": true
   }
   ```

8. **Lint Your Code:**
   You can now lint your JavaScript files. Errors and warnings will appear in the 'Problems' pane in VS Code. You can also fix many issues automatically by saving the file (if `autoFixOnSave` is enabled).

9. **Run ESLint from the Command Line (Optional):**
   To lint your code from the command line, you can use:

   ```bash
   npx eslint yourfile.js
   ```

   Replace `yourfile.js` with the path to the JavaScript file you want to lint.

10. **Add ESLint Scripts to `package.json` (Optional):**
    You can add scripts in your `package.json` to easily run ESLint on your project:
    ```json
    {
      "scripts": {
        "lint": "eslint ."
      }
    }
    ```
    Then you can run `npm run lint` to lint your entire project.

That's it! Your VS Code environment is now set up with ESLint, which will help you identify and fix issues in your JavaScript code according to the rules you've specified.

```javascript
console.log(number); // Attempting to use 'number' before it's declared
const number = 10;
```
