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

function get_name(str: string) {
    const words = str.split("-")
    var new_str = ""
    for (let i = 0; i < words.length; i++) {
        new_str = new_str + (words[i][0]).toUpperCase() + String(words[i]).slice(1) + " ";
    }
    return new_str;
}

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug
    const name = get_name(slug)
    return (
        <div className="relative w-full h-screen justify-center">
          <Header title={`Discover The Realm of ${name}`} />
          <div>
            <Command className="max-w-[calc(100vw-300px)] mx-auto w-full">
              <CommandInput placeholder="" />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Example Prompts">
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        </div>
      );
  }
