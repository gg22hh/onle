import React, { forwardRef } from "react";
import s from '../Numbers.module.scss'
import { ItemType } from "../../../shared/types";

interface NumbersProps {
  item: ItemType;
  firstNumberRef: React.RefObject<HTMLSpanElement>;
  secondNumberRef: React.RefObject<HTMLSpanElement>;
}

const Numbers = forwardRef<HTMLDivElement, NumbersProps>(({ item, firstNumberRef, secondNumberRef }, ref) => {
  return (
    <div className={s.numbers} ref={ref}>
      <span ref={firstNumberRef}>{item.range[0]}</span>
      <span ref={secondNumberRef}>{item.range[1]}</span>
    </div>
  );
});

export default Numbers;