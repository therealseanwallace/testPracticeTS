const caesar = (str: string, shiftFactor: number): string => {
  let array: string[] = str.split("");;
  let result: string = "";

  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/gu;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].match(punctuationRegex)) {
      result = result + array[i];
      continue;
    }
    let charCode = (array[i].charCodeAt(0)) + shiftFactor;
    if (charCode > 122) { charCode = (charCode - 122) + 96};
    result = result + String.fromCharCode(charCode);
  }

  return result;
  
}

export default caesar;