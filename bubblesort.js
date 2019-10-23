function bubbleSort (arr) {
  if (arr.length === 0) return arr;

  for (var index = 0; index < arr.length; index++) {
    if (arr[index+1] === undefined){
      return arr;
    }
    else{
      if (arr[index] < arr[index+1]){
        continue;
      }
      else{
        let firstElement = arr[index];
        arr[index] = arr[index+1];
        arr[index+1] = firstElement;
        swapCount();
      }
    }
  }
}

const swapCount = () => {
  let count = 0;
  count++;
  return count;
};
