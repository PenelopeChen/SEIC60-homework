function quickSort(arr){
  if (arr.length <= 1) { // base case
    return arr;
  }

  const pivot = arr.shift(); // .pop() would also work 

  // 0(2N): two loops, less code 
  const lessThan = arr.filter(element => element < pivot);
  const moreThan = arr.filter(element => element >= pivot);
}

module.exports = quickSort;