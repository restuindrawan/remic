import clsxm from "../../utils/clsxm";
import React from "react";

export type ShineAnimationProps = {
  show: boolean;
  color: {
    accent: string;
    className: string;
  };
};

const ShineAnimation = ({ color, show }: ShineAnimationProps) => {
  return (
    <div
      className={clsxm(
        color.accent,
        "absolute z-10 w-14 h-14 rounded-full transition-all -translate-x-10",
        show ? "translate-x-10 opacity-50 blur-lg" : "opacity-0"
      )}
    />
  );
};

export default ShineAnimation;
