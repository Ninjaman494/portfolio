import { forwardRef } from "react";

export interface TagProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Tag = forwardRef(({ active, onClick, children }: TagProps, ref) => {
  const Element = onClick ? "button" : "div";
  const bgColor = active ? "bg-gray-400" : "bg-gray-500";

  return (
    <Element
      ref={ref as any}
      className={`${bgColor} px-2 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap`}
      onClick={onClick}
    >
      {children}
    </Element>
  );
});

export default Tag;
