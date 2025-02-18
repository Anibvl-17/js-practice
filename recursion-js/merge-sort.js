function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);

  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  // Concat the remaining elements of left and right
  return merged.concat(left, right);
}

console.log(mergeSort([105, 70, 100, 135]));