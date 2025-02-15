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

const LSPath = (props: Props) => {
  const [bubbles, setBubbles] = useState<any[]>([]);

  useEffect(() => {
      const bubblesData = [
        { size: 150, label: "Anthropology", color: "#67e84a", hovercard: "oiwegnew"},
        { size: 150, label: "Biology", color: "#67e84a", hovercard: "wergwgwegwegwegew"},
        { size: 150, label: "Chemistry", color: "#edeb61", hovercard: "efwoe oe eno en jen "}
        // { size: 150, label: "Ecology & E", color: "#edeb61" },
        // { size: 150, label: "Databases", color: "#fa3e3e" }
      ];
  
      setBubbles(bubblesData);
    }, []);

  
  return (
    <div className="relative w-full h-screen justify-center">
      <Header title="Discover The Realm of Life Sciences" />
      <div>
        <Command className="max-w-[calc(100vw-300px)] mx-auto w-full">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Example Prompts">
              <CommandItem>I will pursue a career in Chemistry</CommandItem>
              <CommandItem>I like Physiology</CommandItem>
              <CommandItem>Archaeology is really interesting</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <div className="grid grid-cols-3 gap-4 mt-20 mx-auto justify-items-center">
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

export default LSPath;