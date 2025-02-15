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
import { HoverCard } from "@radix-ui/react-hover-card";

interface Props {}

const MathPath = (props: Props) => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
      const bubblesData = [
        { size: 150, label: "Calculus", color: "#67e84a", hovercard: "wiegowiegoewn woegnowengw"},
        { size: 150, label: "Algebra", color: "#67e84a", hovercard: "weigwebkgijweng"},
        { size: 150, label: "Differential Equations", color: "#edeb61", hovercard: "weognwejgnwejalsllsamdla"},
        { size: 150, label: "Analysis", color: "#edeb61" },
        // { size: 150, label: "Further Studies", color: "#fa3e3e" }
      ];
  
      setBubbles(bubblesData);
    }, []);

  
  return (
    <div className="relative w-full h-screen justify-center">
      <Header title="Discover The Realm of Mathematical Sciences" />
      <div>
        <Command className="max-w-[calc(100vw-300px)] mx-auto w-full">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Example Prompts">
              <CommandItem>I like calculus</CommandItem>
              <CommandItem>I want to study proofs</CommandItem>
              <CommandItem>I'm interested in game theory and combinatorics</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="grid grid-cols-4 gap-4 mt-20 mx-auto justify-items-center">
          {bubbles.map((bubble, index) => (
            <CategoryBubble
              key={index}
              size={bubble.size}
              label={bubble.label}
              color={bubble.color}
              hovercard={bubble.hovercard}
            />
          ))}
      </div>
      </div>
    </div>
  )
}

export default MathPath;