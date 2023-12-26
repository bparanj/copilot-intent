function introduce(name, age, hobby) {
  console.log(
    "My name is " +
      name +
      ", I'm " +
      age +
      " years old, and I love " +
      hobby +
      "!"
  );
}

let person = ["John", 20, "reading"];
introduce.apply(null, person);
