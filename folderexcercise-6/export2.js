export const addNumber = (...numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
  };