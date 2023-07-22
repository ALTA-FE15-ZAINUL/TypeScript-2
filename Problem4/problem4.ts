const findMaxSumSubArray = (k: number, arr: number[]) => {
  let result = 0;

  // penjumlahan dari window pertama dengan parameter k
  for (let i = 0; i < k; i++) {
    result += arr[i];
  }

  // melanjutkan penjumlahan nilai yang dimulai dengan index k
  let currentSum = result;
  for (let j = k; j < arr.length; j++) {
    currentSum += arr[j] - arr[j - k];
    result = Math.max(result, currentSum);
  }
  return result;
};

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

/*
  >> jika nilai n < k maka invalid;
  if (n < k) {
  document.write("Invalid");
  return -1;
  }
  */
