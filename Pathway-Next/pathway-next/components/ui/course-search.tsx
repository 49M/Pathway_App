"use client";
import { useEffect, useState } from "react";
import { SearchBar } from "./search-bar"
import axios from "axios"
import { Button } from "./button";

export const CourseSearch = ({path}: {path: string}) => {
    const [status, setStatus] = useState("Waiting to fetch")
    const [disabled, setDisabled] = useState(true)

    const fetchData = () => {
        setStatus("Fetching courses from U of T, please wait...")
        async function set_courses() {
            const formData = new FormData();
            formData.append("program_type", path)
            const res = await axios.post('http://localhost:5328/set_courses', formData, { withCredentials: true })
            if (res.status == 200) {
                setDisabled(false)
                localStorage.setItem("courses", JSON.stringify(res.data))
            } else {
                setStatus(String(res.status))
            }
            
        }
        set_courses()
    }   

    const onClick = (val: string) => {
        async function interest_timeline() {
            if (disabled == false) {
            
                // const formData = new FormData()
                // formData.set("query", val)
                // const res = await axios.post("http://localhost:5328/interest_timeline", formData)
            }
        }
        interest_timeline()


    }
    return (
        <div className='px-[30%]'>
            {disabled && 
            <div>
            <Button onClick={() => {fetchData()}} className='font-bold mb-5'>
                Scrape courses
            </Button><span className="ml-4">Status: {status}</span></div>}
            <SearchBar onClick={onClick} disabled={disabled}></SearchBar>
            
        </div>
    )
}