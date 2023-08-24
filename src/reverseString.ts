const reverseString = (str: string): string => {
  const strSplit = str.split("");
  const reverseArray = strSplit.reverse();
  return reverseArray.join("");
}

export default reverseString;