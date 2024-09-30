// src/components/SortingVisualizer.js
import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

// Helper functions for sorting
import { getBubbleSortAnimations } from '../sortingAlgorithms/BubbleSort';
import { getSelectionSortAnimations } from '../sortingAlgorithms/SelectionSort';
import { getInsertionSortAnimations } from '../sortingAlgorithms/InsertionSort';
import { getQuickSortAnimations } from '../sortingAlgorithms/QuickSort';
import { getMergeSortAnimations } from '../sortingAlgorithms/MergeSort';
import { getHeapSortAnimations } from '../sortingAlgorithms/HeapSort';

const ANIMATION_SPEED_MS = 10;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = 'teal';
const SECONDARY_COLOR = 'red';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Generate a new random array on component mount
  useEffect(() => {
    resetArray();
  }, []);

  // Function to generate a new random array
  const resetArray = () => {
    const newArr = Array.from({ length: NUMBER_OF_ARRAY_BARS }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArr);
  };

  // Visualize Bubble Sort
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array);
    animateSorting(animations);
  };

  // Visualize Selection Sort
  const selectionSort = () => {
    const animations = getSelectionSortAnimations(array);
    animateSorting(animations);
  };

  // Visualize Insertion Sort
  const insertionSort = () => {
    const animations = getInsertionSortAnimations(array);
    animateSorting(animations);
  };

  // Visualize Quick Sort
  const quickSort = () => {
    const animations = getQuickSortAnimations(array);
    animateSorting(animations);
  };

  // Visualize Merge Sort
  const mergeSort = () => {
    const animations = getMergeSortAnimations(array);
    animateSorting(animations);
  };

  // Visualize Heap Sort
  const heapSort = () => {
    const animations = getHeapSortAnimations(array);
    animateSorting(animations);
  };

  // Function to animate sorting algorithms
  const animateSorting = (animations) => {
    const arrayBars = document.getElementsByClassName('array-bar');
  
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
  
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx]?.style;
        const barTwoStyle = arrayBars[barTwoIdx]?.style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
  
        setTimeout(() => {
          if (barOneStyle) barOneStyle.backgroundColor = color;
          if (barTwoStyle) barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx]?.style;
  
          if (barOneStyle) {
            barOneStyle.height = `${newHeight}px`;
          }
        }, i * ANIMATION_SPEED_MS);
      }
    }

    // Reset all bar colors to PRIMARY_COLOR after sorting is complete
    setTimeout(() => {
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
      }
    }, animations.length * ANIMATION_SPEED_MS);
  };
  
  return (
    <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div>
        <button onClick={resetArray}>Generate New Array</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={selectionSort}>Selection Sort</button>
        <button onClick={insertionSort}>Insertion Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={mergeSort}>Merge Sort</button>
        <button onClick={heapSort}>Heap Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
