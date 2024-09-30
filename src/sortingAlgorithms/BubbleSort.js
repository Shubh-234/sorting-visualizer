// src/sortingAlgorithms/bubbleSort.js
export const getBubbleSortAnimations = (array) => {
    const animations = [];
    const auxiliaryArray = array.slice(); // Copy the original array
    bubbleSort(auxiliaryArray, animations);
    return animations;
  };
  
  const bubbleSort = (array, animations) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Step 1: Compare the two elements, change their color
        animations.push([j, j + 1]);  // Color change for comparison
        
        // Step 2: Revert the color back after comparison
        animations.push([j, j + 1]);  // Revert color back to normal
  
        if (array[j] > array[j + 1]) {
          // Step 3: Perform the swap (update heights)
          animations.push([j, array[j + 1]]);  // Update height of bar j to j+1's value
          animations.push([j + 1, array[j]]);  // Update height of bar j+1 to j's value
  
          // Swap the actual elements in the array
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        } else {
          // If no swap happens, push height updates to keep the process consistent
          animations.push([j, array[j]]);      // No swap, keep same height
          animations.push([j + 1, array[j + 1]]);  // No swap, keep same height
        }
      }
    }
  };
  