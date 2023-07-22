function buff(val: any): any {
  let buff = "";
  let pad = 3 - val;
  while (pad-- > 0) buff += " ";
  return buff;
}

const cetakTablePerkalian = (number: number) => {
  let result = "";

  for (let i = 0; i <= number; i++) {
    if (i !== 0) result += "\n";
    for (let j = 0; j <= number; j++) {
      if (i > 0 && j > 0) {
        result += i * j + buff((i * j + "").length);
      }
    }
  }
  return result;
};

console.log(cetakTablePerkalian(9));
