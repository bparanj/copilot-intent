## Using 'this' in Top-Level Functions

```javascript
function printThis() {
  console.log(this);
}
printThis(); // window
```

## Copilot Intents

- Create a blank html file
- Add a link to app.js in the current directory

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My HTML File</title>
    <script src="app.js"></script>
  </head>
  <body>
    <h1>Javascript "this"</h1>
    <p>Inspect code</p>
  </body>
</html>
```

## Constructor Function (top level function)

### Copilot Intent

- Create a constructor function (top level function) called Fly that takes speed as input parameter

```javascript
function Fly(speed) {
  this.speed = speed;
}
Fly(1000);
console.log(this);
```

Inspect the value of 'this' in the browser console

## Use Fly as a Constructor Function

Instantiate a new object

```javascript
function Fly(speed) {
  this.speed = speed;
}

const f = new Fly(10);
console.log(f.speed); // 10
```

## Observations

- What is the value of 'this' at the top level?
- What is the value of 'this' when this has binding to an object?
