// [10, 20, 14, 16, 18]
// [30, 23, 54, 33, 96]

function smallestDiff(arr1, arr2) {
  let resultArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      resultArr.push(arr1[j] - arr2[i]);
      console.log(`${arr1[j]} - ${arr2[i]} = `,(arr1[j] - arr2[i]))
    }
  }
  resultArr = resultArr.map(Math.abs);
  result = Math.min(...resultArr);

  return result;
}

console.log(smallestDiff([10, 20, 14, 16, 18], [30, 23, 54, 33, 96]));
