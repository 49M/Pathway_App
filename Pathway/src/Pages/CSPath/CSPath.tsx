import React, { useEffect, useState } from "react";
import { ReturnBtn } from "../../components/ReturnBtn";
import Header from "../../components/Header";
import CategoryBubble from "../../components/CategoryBubble";

interface Props {}

const CSPath = (props: Props) => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const bubblesData = [
      { size: 250, label: "Algorithms" },
      { size: 190, label: "Data Structures" },
      { size: 200, label: "AI" },
      { size: 160, label: "Machine Learning" },
      { size: 220, label: "Databases" },
    ];

    setBubbles(bubblesData);
  }, []);

  return (
    <div className="relative w-full h-screen justify-center">
      <Header title="Discover The Realm of Computer Science" />
      <div className="grid grid-cols-3 gap-10 p-4">
        {bubbles.map((bubble, index) => (
          <CategoryBubble
            key={index}
            size={bubble.size}
            label={bubble.label}
          />
        ))}
      </div>
    </div>
  );
};

export default CSPath;
