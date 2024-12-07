import { useNavigate } from "react-router-dom";

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
