import React from 'react';

interface CategoryBubbleProps {
  size: number; // Size in pixels
  label: string;
}

const CategoryBubble: React.FC<CategoryBubbleProps> = ({ size, label }) => {
  return (
    <div
      className="flex items-center justify-center bg-blue-500 text-white rounded-full ml-5 mr-5"
      style={{ width: size, height: size }}
    >
      {label}
    </div>
  );
};

export default CategoryBubble;