import React from 'react';

const ControlPanel = ({ onBubbleSort, onSelectionSort, onQuickSort, onMergeSort }) => {
  return (
    <div className="control-panel">
      <button onClick={onBubbleSort}>Bubble Sort</button>
      <button onClick={onSelectionSort}>Selection Sort</button>
      <button onClick={onQuickSort}>Quick Sort</button>
      <button onClick={onMergeSort}>Merge Sort</button>
    </div>
  );
};

export default ControlPanel;
