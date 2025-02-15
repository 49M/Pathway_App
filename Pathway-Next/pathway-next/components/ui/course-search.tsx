"use client";
import { useState } from "react";
import { SearchBar } from "./search-bar"
import axios from "axios"

export const CourseSearch = ({path}: {path: string}) => {
    const [disabled, setDisabled] = useState(true)
    const onClick= () => {
        async function set_courses() {
            const data = await axios.post('http://localhost:5328/set_courses', {
                body: {
                    "program_type": path
                }
            })
        }

    }
    return (
        <div className='px-[30%]'>
            {disabled && <span className='px-4 outline-2'>Fetching courses from U of T, please wait... (Max 30 seconds)</span>}
            <SearchBar onClick={onClick} disabled={disabled}></SearchBar>
            
        </div>
    )
}