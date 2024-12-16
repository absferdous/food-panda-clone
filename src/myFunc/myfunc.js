import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

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

export const grabData = ({ key, url }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  console.log("testing grab data function");
  console.log("testing data using query", data);

  return data;
};
