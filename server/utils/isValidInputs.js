export const isValidInputs = (inputArray) => {
  return inputArray?.every((input) => input?.length >= 4);
};
