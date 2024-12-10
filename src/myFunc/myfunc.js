export const toggler = (toggleValue) => {
  toggleValue(false);
};

export const totalCounter = (data) => {
  console.log("data from myfunction", data);
  const price = data.reduce((acc, item) => acc + item.price, 0);
  console.log("price from my function", price);
  return price;
};

export const deleteItems = (item, givenindex) => {
  item.filter((item) => item.index !== givenindex);
};
