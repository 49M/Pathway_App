"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
export function SearchBar({ onClick, disabled }: { onClick: any, disabled: boolean }) {
    return (
        <div>
            <div className="flex w-full items-center space-x-2 ">
                <Input disabled={disabled} type="email" className='bg-primary-foreground' placeholder="Message Pathway" />
                <Button disabled={disabled} type="submit" onClick={onClick}>Submit</Button>
            </div>
            <Accordion type="single" collapsible className="w-full mt-40 space-y-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
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