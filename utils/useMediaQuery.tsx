import { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    // media.addListener(updateTarget);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);

    // return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const useResponsive = () => {
  const displaySize = {
    mobile: useMediaQuery(320),
    tablet: useMediaQuery(426),
    smallLaptop: useMediaQuery(769),
    largeLaptop: useMediaQuery(1025),
    xlScreen: useMediaQuery(1441),
  };

  return displaySize;
};

export default useResponsive;
