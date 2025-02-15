import React, { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/HoverCard";

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
  color: string;
  hovercard: string;  // Content inside the HoverCard
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
const CategoryBubble: React.FC<CategoryBubbleProps> = ({ size, label, color, hovercard }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);  // Toggle the HoverCard visibility
  };
>>>>>>> 9962251ab12b2ecf907d9b09086abdfa098c426c

  return (
<<<<<<< HEAD
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

=======
const bubbles = [
    { size: 150, label: "Algorithms", color: "#67e84a" },
    { size: 150, label: "Data Structures", color: "#67e84a"},
    { size: 150, label: "AI", color: "#edeb61"},
    { size: 150, label: "Machine Learning", color: "#edeb61" },
    { size: 150, label: "Databases", color: "#fa3e3e" }
];

const CategoryBubble: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-4 mt-20 mx-auto justify-items-center">
    {bubbles.map((bubble) => (
        <div
        className="flex items-center justify-center rounded-full text-lg text-black"
        style={{ width: bubble.size, height: bubble.size, backgroundColor: bubble.color }}
        >
        {bubble.label}
        </div>
    ))}
>>>>>>> matthew/ui
    </div>
=======
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
>>>>>>> 9962251ab12b2ecf907d9b09086abdfa098c426c
  );
};

export default CategoryBubble;

