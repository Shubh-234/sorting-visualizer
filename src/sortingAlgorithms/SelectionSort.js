// src/sortingAlgorithms/selectionSort.js
export const getSelectionSortAnimations = (array) => {
    const animations = [];
    const auxiliaryArray = array.slice();
    selectionSort(auxiliaryArray, animations);
    return animations;
  };
  
  const selectionSort = (array, animations) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        animations.push([j, minIdx]);  // Color change for comparison
        animations.push([j, minIdx]);  // Revert color
        if (array[j] < array[minIdx]) {
          minIdx = j;  // Found new minimum
        }
      }
      // Swap the minimum element with the first unsorted element
      animations.push([i, array[minIdx]]);  // Height update
      animations.push([minIdx, array[i]]);  // Height update
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
  };
  