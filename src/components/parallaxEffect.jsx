// ParallaxReveal.jsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ParallaxEffect = ({
  children,
  className = "",
  effect = "up", // Desktop effect
  mobileEffect = "fade", // Mobile effect
  speed = 0.25,
  duration = 0.6,
  delay = 0.3,
}) => {
  const ref = useRef(null);

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const activeEffect = isMobile ? mobileEffect : effect;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [80 * speed, -80 * speed],
  );

  const variants = {
    fade: { opacity: 0 },
    fadeTop: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -80 },
    right: { opacity: 0, x: 80 },
    up: { opacity: 0, y: 80 },
    down: { opacity: 0, y: -80 },
    slide: { opacity: 0, x: 120 },
    bounce: { opacity: 0, y: -120, scale: 0.9 },
  };

  const animate = { opacity: 1, x: 0, y: 0, scale: 1 };

  const transition =
    activeEffect === "bounce" && !isMobile
      ? { duration, delay, type: "spring", stiffness: 400, damping: 12 }
      : { duration: 0.45, delay };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y }}
      initial={variants[activeEffect] || variants.fade}
      whileInView={animate}
      viewport={{ once: true }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
