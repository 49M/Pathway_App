import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/HoverCard";

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
  color: string;
  hovercard: string;  // Content inside the HoverCard
}

const CategoryBubble: React.FC<CategoryBubbleProps> = ({ size, label, color, hovercard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);  // Toggle the HoverCard visibility
  };

  return (
    <HoverCard open={isOpen} onOpenChange={setIsOpen}>
      <HoverCardTrigger onClick={handleClick}>
        <div
          className="flex items-center justify-center rounded-full text-lg text-black text-center break-words"
          style={{ width: size, height: size, backgroundColor: color }}>
          {label}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-full break-words">
        {hovercard}
      </HoverCardContent>
    </HoverCard>
  );
};

export default CategoryBubble;