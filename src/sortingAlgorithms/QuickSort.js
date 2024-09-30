export const getQuickSortAnimations = (array) => {
    const animations = [];
    const auxiliaryArray = array.slice();
    quickSort(auxiliaryArray, 0, auxiliaryArray.length - 1, animations);
    return animations;
};

const quickSort = (array, low, high, animations) => {
    if (low < high) {
        const pi = partition(array, low, high, animations);
        quickSort(array, low, pi - 1, animations);
        quickSort(array, pi + 1, high, animations);
    }
};

const partition = (array, low, high, animations) => {
    const pivot = array[high]; // Choosing the last element as the pivot
    let i = low - 1;
  
    for (let j = low; j <= high - 1; j++) {
      // Push comparison animations
      animations.push([j, high]);
      animations.push([j, high]);

      if (array[j] < pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];  // Perform the swap
        // Push the swap animations
        animations.push([i, array[i]]);
        animations.push([j, array[j]]);
      }
    }

    // Swap pivot into its correct place
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    animations.push([i + 1, array[i + 1]]);
    animations.push([high, array[high]]);
  
    return i + 1;
};
