const SwapElements = (arrayToSwap, index1, index2) => {
  arrayToSwap[index1] = arrayToSwap.splice(index2, 1, arrayToSwap[index1])[0];
};

export default SwapElements;
