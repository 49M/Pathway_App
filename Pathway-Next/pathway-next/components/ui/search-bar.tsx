"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState } from "react"

export function SearchBar({onClick}: {onClick: any}) {

  const [searchQuery, setSearchQuery] = useState('')
  
  const examples = [
    "(Computer Science) I want to dive into game dev",
    "(Physics) I want to uncover the mysteries of the universe through quantum physics",
    "(Cinematography) I want to craft mind-blowing visuals that push the boundaries of storytelling"
  ]

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchClick = () => {
    onClick()
  }

  return (
    <div>
      <div className="flex w-full items-center space-x-2">
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className='bg-primary-foreground'
          placeholder="Search for ideas..."
        />
        <Button type="submit" onClick={handleSearchClick}>Search</Button>
      </div>

      {/* Fixed Recommendations Text */}
      <div className="mt-4 space-y-2">
        <div className="italic text-gray-400">
          {examples.map((example, index) => (
            <div key={index}>{example}</div>
          ))}
        </div>
      </div>

      {/* Original Accordion Section */}
      <Accordion type="single" collapsible className="w-full mt-10 space-y-2">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
