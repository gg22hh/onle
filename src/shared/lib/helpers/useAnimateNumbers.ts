import { useEffect } from "react";
import gsap from "gsap";

export const handleChangeNumbers = (item, firstNumberRef, secondNumberRef) => {
  if (!firstNumberRef.current || !secondNumberRef.current) return;

  const firstCounter = { value: Number(firstNumberRef.current.innerText) };
  const secondCounter = { value: Number(secondNumberRef.current.innerText) };

  gsap.to(firstCounter, {
    value: item.range[0],
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      if (firstNumberRef.current) {
        firstNumberRef.current.innerText = Math.floor(firstCounter.value);
      }
    },
  });

  gsap.to(secondCounter, {
    value: item.range[1],
    duration: 2,
    ease: "power2.out",
    onUpdate: () => {
      if (secondNumberRef.current) {
        secondNumberRef.current.innerText = Math.floor(secondCounter.value);
      }
    },
  });
};
