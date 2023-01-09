export const maskMiddleNumber = (str) => {
  const arr = str?.split(" ");
  const secondPart = arr[1]
    .split("")
    .map((d) => d.replace(/[\d,.]+/g, "*"))
    .join("");
  const thirdPart = arr[2]
    .split("")
    .map((d) => d.replace(/[\d,.]+/g, "*"))
    .join("");
  return arr[0] + " " + secondPart + " " + thirdPart + " " + arr[3];
};
