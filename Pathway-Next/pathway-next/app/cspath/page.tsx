"use client";

import React, { useEffect, useState } from "react";
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
      { size: 150, label: "Algorithms", color: "#67e84a" },
      { size: 150, label: "AI", color: "#67e84a"},
      { size: 150, label: "Databases", color: "#edeb61"},
      { size: 150, label: "Data Structures", color: "#edeb61" },
      { size: 150, label: "Machine Learning", color: "#fa3e3e" }
    ];

    setBubbles(bubblesData);
  }, []);

  return (
    <div className="relative w-full h-screen justify-center">
      <Header title="Discover The Realm of Computer Science" />
      <div>
        <Command className="max-w-[calc(100vw-300px)] mx-auto w-full">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Example Prompts">
              <CommandItem>I want to learn Java</CommandItem>
              <CommandItem>I'm interested in anything data</CommandItem>
              <CommandItem>I want to master AI and Deep Learning</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="grid grid-cols-5 gap-4 mt-20 mx-auto justify-items-center">
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
    </div>
  );
};

export default CSPath;
