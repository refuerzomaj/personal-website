import { useEffect, useRef, useState } from "react";

const counter = ({ targetNumber, duration = 800, className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetNumber));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(targetNumber); // Ensure it ends exactly at target
      }
    };

    requestAnimationFrame(step);
  }, [hasAnimated, targetNumber, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default counter;
