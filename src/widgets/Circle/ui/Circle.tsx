import React, { forwardRef, RefObject, useEffect } from "react";
import s from "../Circle.module.scss";
import classNames from "classnames";
import { ItemType } from "../../../shared/types";
import { items } from "../../../shared/config/items";


interface CircleProps {
  refs: {
    circleRef: RefObject<HTMLDivElement>;
    itemRefs: RefObject<HTMLSpanElement[]>;
  };
  setItem: (item: ItemType) => void;
  handleClick: (index: number, item: ItemType) => void;
  targetRotation: number;
  item: ItemType;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>(
  ({ refs, handleClick, targetRotation, item }, ref) => {
    useEffect(() => {
      handleClick(0, items[0]);
    }, []);
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <div ref={refs.circleRef} className={s.circle}>
            {items.map((i, index) => {
              const angle = (360 / items.length) * index;
              const x = Math.cos((angle * Math.PI) / 180) * 265;
              const y = Math.sin((angle * Math.PI) / 180) * 265;
              return (
                <div
                  key={i.id}
                  onClick={() => handleClick(index, i)}
                  className={classNames(s.circleItem, {
                    [s.active]: item.id === i.id,
                  })}
                  style={{
                    transform: `translate(${x}px, ${y}px) rotate(${Math.abs(
                      targetRotation
                    )}deg)`,
                  }}
                >
                  <div>
                    {i.value}
                    <span
                      ref={(el) => {
                        refs.itemRefs.current[index] = el;
                      }}
                      style={{ opacity: 0 }}
                    >
                      {i.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

export default Circle;
