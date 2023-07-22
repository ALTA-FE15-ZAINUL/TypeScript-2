let char = "c";

let newChar = char.toUpperCase();
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let index = "";
let result = "";
let i = 0;

for (; i <= alphabet.length; i++) {
  if (alphabet[i] == newChar) {
    alphabet[i + 1];
  }
  console.log(alphabet[i]);
}

for (let j = 1; j <= i; j++) {
  if (j !== 0) result += "\n";
  for (let k = 1; k <= i - j; k++) {
    result += ".";
  }
  for (let l = 0; l < 2 * j - 1; l++) {
    result += alphabet[0 + j];
  }
  for (let m = 1; m <= i - j; m++) {
    result += ".";
  }
}
console.log(result);

for (let j = 1; j <= i - 1; j++) {
  if (j !== 0) result += "\n";
  for (let k = 0; k < j; k++) {
    result += ".";
  }
  for (let l = (i - j) * 2 - 1; l > 0; l--) {
    result += alphabet[0 + j];
  }
  for (let m = 0; m < j; m++) {
    result += ".";
  }
}
console.log(result);
