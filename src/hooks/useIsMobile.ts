import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1440);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
