import React from 'react';

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
  color: string;
  hovercard: string;
}
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/HoverCard"


const CategoryBubble: React.FC<CategoryBubbleProps> = ({ size, label, color, hovercard}) => {
  return (
    <div
      className="flex items-center justify-center rounded-full text-lg text-black text-center break-words"
      style={{ width: size, height: size, backgroundColor: color}}
    >
  <HoverCard>
    <HoverCardTrigger>{label}</HoverCardTrigger>
    <HoverCardContent>
      {hovercard}
    </HoverCardContent>
  </HoverCard>

    </div>
  );
};

export default CategoryBubble;