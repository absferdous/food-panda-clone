import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export const useNavigateWithScroll = (
  path,
  scrollOptions = { top: 0, behavior: "smooth" }
) => {
  const navigate = useNavigate();
  const navigateWithScroll = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return navigateWithScroll;
};

export const useFetch = ({ key, url }) => {
  // const [fetchedData, setfetchedData] = useState(null);
  const { data, isError, isLoading } = useQuery({
    queryKey: key,
    queryFn: () =>
      fetch(url).then((res) => {
        if (!res.ok) throw new Error("error fetching data");
        return res.json();
      }),
    // onSuccess: (data) => setfetchedData(data),
    onError: (error) => console.error("error fetching data", error),
  });
  console.log("loading", isLoading);
  console.log("error", isError);
  console.log(`${key} data`, data);
  return { data, isError, isLoading };
};
