"use client";

import React, { useEffect, useState } from "react";
import { ReturnBtn } from "../../components/ReturnBtn";
import Header from "@/components/Header";
import CategoryBubble from "../../components/CategoryBubble";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

interface Props {}

const CSPath = (props: Props) => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
    const bubblesData = [
      { size: 250, label: "Algorithms", color: "#67e84a" },
      { size: 190, label: "Data Structures", color: "#67e84a"},
      { size: 200, label: "AI", color: "#edeb61"},
      { size: 160, label: "Machine Learning", color: "#edeb61" },
      { size: 220, label: "Databases", color: "#fa3e3e" }
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
            color={bubble.color}
          />
        ))}
      </div>
    </div>
  );
};

export default CSPath;
