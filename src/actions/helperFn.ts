export const getNumberInFormat = (num: number): string | number => {
  if (num > 100_000) {
    const units = ["", "K", "M", "B", "T", "Q"];
    const unitIndex = Math.floor(Math.log10(num) / 3);
    const unitDivisor = Math.pow(10, unitIndex * 3);
    const formattedValue = num / unitDivisor;

    // Format the number with a single decimal place if it's not an integer
    const roundedValue =
      formattedValue % 1 === 0
        ? formattedValue.toFixed(0)
        : formattedValue.toFixed(1);

    return `${roundedValue}${units[unitIndex]}`;
  }

  // Return the number as is if it is <= 100,000
  return num;
};
