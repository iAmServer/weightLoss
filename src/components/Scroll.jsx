import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();

  useEffect(() => {
    // smooth scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
