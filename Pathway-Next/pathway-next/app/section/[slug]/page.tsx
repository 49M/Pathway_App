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
import { CourseSearch } from "@/components/ui/course-search";

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
    const name = get_name(slug)
    return (
        <div className="relative w-full h-screen justify-center">
          <Header title={`Discover The Realm of ${name}`} />
            <CourseSearch/>
        </div>
      );
  }
