const calculateAverage = (array: number[]): number => {
  let total = 0;
  let average = 0;
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  average = total / array.length;
  return average;
}

const calculateMin = (array: number[]): number => {
  let min = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) { min = array[i] };
    if (array[i] < min) { min = array[i] };
  }
  return min;
}

const calculateMax = (array: number[]): number => {
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) { max = array[i] };
    if (array[i] > max) { max = array[i] };
  }
  return max;
}

const analyzeArray = (
  array: number[]
): { average: number; min: number; max: number; length: number } => {
  type Analysis = {
    average: number,
    min: number,
    max: number,
    length: number

  };
  const objToReturn: Analysis = {
    average: calculateAverage(array),
    min: calculateMin(array),
    max: calculateMax(array),
    length: array.length
  }
  return objToReturn;
};

export default analyzeArray;
