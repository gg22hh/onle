import { useEffect, useState } from "react";
import gsap from "gsap";

export const useSwiperAnimation = (swiperRef, item, setCurrentItem) => {
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
      if (!swiperRef.current) return;
  
      if (isAnimating) return;
      setIsAnimating(true);
  
      gsap.to(swiperRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentItem(item);
          gsap.fromTo(
            swiperRef.current,
            { opacity: 0},
            { opacity: 1, duration: 1, ease: "power2.inOut", onComplete: () => setIsAnimating(false) }
          );
        }
      });
    }, [item]);
};