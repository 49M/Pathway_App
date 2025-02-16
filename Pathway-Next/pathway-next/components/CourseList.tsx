"use client";

import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

interface Props {
    year: number;
    courses: string[]
}

const CourseList = ({ year, courses }: Props) => {
    const [open, setOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

    const handleCourseClick = (courseCode: string) => {
        setSelectedCourse(courseCode);
        setOpen(true);
    };
    return (
        <div>
            <Table>
                <TableCaption>Year {year}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Favourite</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Object.entries(courses).map(([courseCode, course]) => (
                        <TableRow
                            key={courseCode}
                            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => handleCourseClick(courseCode)}
                        >
                            <TableCell>{course}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <DialogTitle>
                </DialogTitle>
                <DialogDescription>
                    Course Code: {selectedCourse}
                </DialogDescription>
                <Dialog>
                    Learn about Neural Networks, and deep learning. This course demonstrates the fact that AI will take over the world lol.
                </Dialog>
            </CommandDialog>
        </div>
    );
};

export default CourseList;