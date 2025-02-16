"use client";
import { useState } from "react";
import { SearchBar } from "./search-bar"
import axios from "axios"
import { Button } from "./button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CourseList from "../CourseList";

export const CourseSearch = ({path}: {path: string}) => {
    const [status, setStatus] = useState("Waiting to fetch")
    const [disabled, setDisabled] = useState(true)
    const [data, setData] = useState()
    

    const fetchData = () => {
        setStatus("Fetching courses from U of T, please wait...")
        async function set_courses() {
            try {
                const formData = new FormData();
                formData.append("program_type", path)
                const res = await axios.post('http://localhost:5328/set_courses', formData, { withCredentials: true })
                setDisabled(false)
                localStorage.setItem("courses", JSON.stringify(res.data))
            } catch (error) {
                setStatus(String(error))
            }
        }
        set_courses()
    }   

    const onClick = (val: string) => {
        async function interest_timeline() {
            const courses = localStorage.getItem("courses")
            if (disabled == false && courses != null) {
                const formData = new FormData()
                formData.set("query", val)
                formData.set("courses", courses)
                const res = await axios.post("http://localhost:5328/interest_timeline", formData)
                console.log(res.data)
                setData(res.data)
            }
        }
        interest_timeline()


    }
    return (
        <div className='px-[30%]'>
            {disabled && 
            <div>
            <Help/>
            <Button onClick={() => {fetchData()}} className='font-bold mb-5'>
                Get courses
            </Button><span className="ml-4">Status: {status}</span></div>}
            {!disabled &&
            <div>  
            </div>}
            <SearchBar onClick={onClick} disabled={disabled}></SearchBar>
            
        </div>
    )
}

export const Help = () => {
    return (
        <Accordion type="single" collapsible className="w-full mb-20 space-y-2">
        <AccordionItem value="item-1">
            <AccordionTrigger>What is this?</AccordionTrigger>
            <AccordionContent>
                Pathway is a tool that simplifies the course selection process for U of T students.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>What should I search?</AccordionTrigger>
            <AccordionContent>
                Give a description of some topics you are interested in, and Pathway will craft a multi-year schedule with courses that align with your interests. You don't need to worry about prerequisities, since Pathway ensures that the schedule 
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>Example searches</AccordionTrigger>
            <AccordionContent>
            "I want to master AI and deep learning", or
            "I'm interested in life sciences", or 
    "       I want to learn front-end programming" are all examples of queries that Pathway can use to build you a dream schedule. 
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger>What is "Get courses"?</AccordionTrigger>
            <AccordionContent>
            You need to click "Get courses" so that Pathway can use AI to analyze all of the courses at U of T that fall under the section you just picked.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
    )
}