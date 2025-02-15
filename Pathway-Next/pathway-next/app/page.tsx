"use client"
import React from 'react';
import Link from 'next/link';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandDialog } from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Calculator, CalculatorIcon, Calendar, Search, Smile } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';

const sections = [
    {name: "Mathematical Sciences", href: '/section/mathemetical-sciences'},
    {name: "Computer Science", href: '/section/computer-science'}, 
    {name: "Life Science", href: '/section/life-science'}
]

export default function Page() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return (
    <>
    <div className='flex w-full flex-col'> 
        <div className='w-full flex justify-center font-bold primary mt-20 text-[50px]'>
            Pathway Course Planner
        </div>
        <div className='w-full flex justify-center mt-20'>
            <Button variant="outline" className='font-bold' onClick={() => {setOpen(true)}}><Search/> Search programs at U of T</Button>
        </div>
    </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle></DialogTitle>
        <CommandInput placeholder="Search for a program" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {sections.map((section) => {
                return (
                    <CommandItem className='hover:cursor-pointer' key={section.href}>
                        <Link href={section.href}>{section.name}</Link>
                    </CommandItem>
                )
            })}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  )
}
