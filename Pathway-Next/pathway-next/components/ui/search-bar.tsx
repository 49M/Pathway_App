"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { useState } from "react"
export function SearchBar({ onClick, disabled }: { onClick: any, disabled: boolean }) {
    const [currentValue, setValue] = useState("")
    return (
        <div>
            <div className="flex w-full items-center space-x-2 ">
                <Input disabled={disabled} onChange={(e) => setValue(e.target.value)} type="email" className='bg-primary-foreground' placeholder="Message Pathway" />
                <Button disabled={disabled} type="submit" onClick={() => {onClick(currentValue)}}>Submit</Button>
            </div>
        </div>
    )
}

const examples = [
    "I want to learn a programming language",
    "I'm interested in anythitng data",
    "I want to master AI and deep learning",
    "I'm interested in life sciences",
    "I want to learn front-end programming",
]