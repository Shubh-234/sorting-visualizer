// src/sortingAlgorithms/heapSort.js
export const getHeapSortAnimations = (array) => {
    const animations = [];
    const auxiliaryArray = array.slice();
    heapSort(auxiliaryArray, animations);
    return animations;
  };
  
  const heapSort = (array, animations) => {
    const n = array.length;
  
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i, animations);
    }
  
    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
      // Swap current root (largest) with end of the heap
      animations.push([0, array[i]]);    // Swap root with last element
      animations.push([i, array[0]]);    // Revert color
      animations.push([0, array[i]]);    // Height update
      [array[0], array[i]] = [array[i], array[0]];
  
      // Heapify the reduced heap
      heapify(array, i, 0, animations);
    }
  };
  
  const heapify = (array, n, i, animations) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    // If left child is larger than root
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    // If right child is larger than largest so far
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
      animations.push([i, largest]);  // Color change for comparison
      animations.push([i, largest]);  // Revert color
      animations.push([i, array[largest]]);  // Height update
      animations.push([largest, array[i]]);  // Height update
      [array[i], array[largest]] = [array[largest], array[i]];
  
      // Recursively heapify the affected subtree
      heapify(array, n, largest, animations);
    }
  };
  