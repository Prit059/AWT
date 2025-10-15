function* evenNumberGenerator() {
  let num = 0;
  while (true) {
    yield num;
    num += 2;
  }
}

const evenGen = evenNumberGenerator();
// console.log(evenGen.next().value);
// console.log(evenGen.next().value);
// console.log(evenGen.next().value);

const evens = evenNumberGenerator();
for (let i = 0; i < 5; i++) {
  console.log(evens.next().value);
}

