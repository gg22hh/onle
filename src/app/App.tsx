import React, { useRef, useState } from "react";
import gsap from "gsap";
import { Circle } from "../widgets/Circle";
import { handleChangeNumbers } from "../shared/lib/helpers/useAnimateNumbers";
import { ItemsNavigation } from "../widgets/Navigation";
import { Slider } from "../widgets/Slider";
import { Numbers } from "../widgets/Numbers";
import { ItemType } from "../shared/types";
import { items } from "../shared/config/items";

const App: React.FC = () => {
  const [item, setItem] = useState<ItemType>(items[0]);
  const firstNumberRef = useRef<HTMLSpanElement | null>(null);
  const secondNumberRef = useRef<HTMLSpanElement | null>(null);
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const angleStep: number = 360 / items.length;

  const handleClick = (index: number, item: ItemType) => {
    const offset: number = -60;
    const targetRotation: number = -(index * angleStep) + offset;
    setTargetRotation(targetRotation);

    gsap.to(circleRef.current, {
      rotation: targetRotation,
      duration: 2,
      ease: "power2.out",
    });

    itemRefs.current.forEach((el) => {
      if (el) gsap.to(el, { opacity: 0, duration: 0 });
    });

    if (itemRefs.current[index]) {
      gsap.to(itemRefs.current[index], { opacity: 1, duration: 0.5, delay: 2 });
    }

    setItem(item);
    handleChangeNumbers(item, firstNumberRef, secondNumberRef);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Исторические даты</h1>
      </div>
      <Numbers item={item} firstNumberRef={firstNumberRef} secondNumberRef={secondNumberRef} />
      <Circle refs={{ circleRef, itemRefs }} setItem={setItem} handleClick={handleClick} targetRotation={targetRotation} item={item} />
      <span className="horizontal line"></span>
      <span className="vertical line"></span>
      <ItemsNavigation
        currentItemId={item.id}
        totalItems={items.length}
        onPrev={() => handleClick(item.id - 2, items[item.id - 2])}
        onNext={() => handleClick(item.id, items[item.id])}
      />
      <Slider item={item} />
    </div>
  );
};

export default App;