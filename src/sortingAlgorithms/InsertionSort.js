// src/sortingAlgorithms/insertionSort.js
export const getInsertionSortAnimations = (array) => {
    const animations = [];
    const auxiliaryArray = array.slice();
    insertionSort(auxiliaryArray, animations);
    return animations;
  };
  
  const insertionSort = (array, animations) => {
    const n = array.length;
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;
  
      // Move elements greater than key to one position ahead
      while (j >= 0 && array[j] > key) {
        // Color change when comparing
        animations.push([j, j + 1]);  // Color change
        animations.push([j, j + 1]);  // Revert color
        // Push height update
        animations.push([j + 1, array[j]]);
        array[j + 1] = array[j];
        j--;
      }
      
      // Color change when placing the key in its correct position
      animations.push([j + 1, i]);  // Color change for placement
      animations.push([j + 1, i]);  // Revert color
      animations.push([j + 1, key]);  // Push height update for the key
      array[j + 1] = key;
    }
  };
  