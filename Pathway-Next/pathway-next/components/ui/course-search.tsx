"use client";
import { useState } from "react";
import { SearchBar } from "./search-bar"
import axios from "axios"
import { Button } from "./button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import CourseList from "../CourseList";
import CoursePlan from "@/app/courseplan/page";

export const CourseSearch = ({path}: {path: string}) => {
    const [status, setStatus] = useState("Waiting to fetch")
    const [disabled, setDisabled] = useState(true)
    const [data, setData] = useState()
    

    const fetchData = () => {
        setStatus("Fetching courses from U of T, please wait...")
        async function set_courses() {
            if (localStorage.getItem("courses") != null) {
                setStatus("Courses fetched from local storage")
                setDisabled(false)
                return
            }
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
            {!disabled && <CoursePlan data={data}/>}
            <SearchBar onClick={onClick} disabled={disabled}></SearchBar>
            
        </div>
    )
}

export const Help = () => {
    return (
        <Accordion type="single" collapsible className="w-full mb-20 space-y-2">
        <AccordionItem value="item-1">
            <AccordionTrigger>What is Pathway?</AccordionTrigger>
            <AccordionContent>
            Pathway is an innovative platform that simplifies course selection at U of T, turning a complex and stressful process into a seamless discovery experience. Find the right courses with clarity and confidence.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>What should I search?</AccordionTrigger>
            <AccordionContent>
            Simply describe your interests, and Pathway will design a personalized multi-year course plan—prerequisites and requirements. Focus on your passion; we’ll map the journey.
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
            Click "Get Courses", and let Pathway’s AI analyze U of T’s entire catalog to find the best courses for your chosen area.
            </AccordionContent>
        </AccordionItem>
    </Accordion>
    )
}