import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import CategoryBubble from "@/components/CategoryBubble";
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

const SectionPage = (params: { params: Promise<{ slug: string }> }) => {
  return (
    <div className="relative w-full h-screen justify-center">
      <Header title={`Discover The Realm of ${"asdf"}`} />
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
        <CategoryBubble/>
      </div>
    </div>
  );
};

export default SectionPage;
