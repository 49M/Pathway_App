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
import { SearchBar } from "@/components/ui/search-bar";

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
    
    const onClick = () => {

    }
    const slug = (await params).slug
    const isCS = slug == "/section/computer-science"
    const name = get_name(slug)
    return (
        <div className="relative w-full h-screen justify-center">
          <Header title={`Discover The Realm of ${name}`} />
          <div className='px-[30%]'>
            <SearchBar onClick={undefined} isCS={isCS}></SearchBar>
          </div>
        </div>
      );
  }
