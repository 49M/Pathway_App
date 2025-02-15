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

interface CourseDict {
  [courseCode: string]: [string, number]; // Tuple: [Course Name, Suitability %]
}

interface Props {
  year: number;
  courses: CourseDict;
}

const CourseList: React.FC<Props> = ({ year, courses }) => {
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
            <TableHead className="w-[100px]">Course Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Suitability</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.entries(courses).map(([code, [name, suitability]]) => (
            <TableRow 
              key={code} 
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800" 
              onClick={() => handleCourseClick(code)}
            >
              <TableCell className="font-medium">{code}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell className="text-right">{suitability}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle>
          {selectedCourse ? courses[selectedCourse]?.[0] : "Course Details"}
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