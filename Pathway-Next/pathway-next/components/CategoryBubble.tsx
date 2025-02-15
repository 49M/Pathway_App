import React from 'react';

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
  color: string;
}

const CategoryBubble: React.FC<CategoryBubbleProps> = ({ size, label, color }) => {
  return (
    <div
      className="flex items-center justify-center bg-blue-500 text-white rounded-full ml-5 mr-5 text-lg text-black"
      style={{ width: size, height: size, backgroundColor: color }}
    >
      {label}
    </div>
  );
};

export default CategoryBubble;