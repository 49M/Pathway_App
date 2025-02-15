import React from 'react';

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
  color: string;
}

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
    </div>
  );
};

export default CategoryBubble;

