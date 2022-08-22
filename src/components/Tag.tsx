import type { FC } from "react";

export interface TagProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function Tag({ active, onClick, children }: TagProps) {
  const Element = onClick ? "button" : "div";

  return (
    <Element
      className={`${
        active ? "bg-gray-400" : "bg-gray-500"
      } px-2 py-1 rounded-full text-sm text-gray-50 whitespace-nowrap`}
      onClick={onClick}
    >
      {children}
    </Element>
  );
}
