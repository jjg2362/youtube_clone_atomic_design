import { useEffect, useState } from "react";

const useResize = (videoRef) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      setWidth(videoRef.current.offsetWidth);
    }
  }, [videoRef]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(videoRef.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [videoRef]);

  return width;
};

export default useResize;
