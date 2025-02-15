// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"

// interface CourseDict {
//   [courseCode: string]: [string, number];
// }

// interface Props {
//   year: number;
//   courses: CourseDict;
// }

// const CourseList: React.FC<Props> = ({ year, courses }: Props) => {
//   return (
//     <div>
//       <Table>
//         <TableCaption>Year {year}</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[100px]">Course Code</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead className="text-right">Suitability</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {Object.entries(courses).map(([code, [name, suitability]]) => (
//             <TableRow key={code}>
//               <TableCell className="font-medium">{code}</TableCell>
//               <TableCell>{name}</TableCell>
//               <TableCell className="text-right">{suitability}%</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   )
// };

// export default CourseList;


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
            <TableRow key={code} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => handleCourseClick(code)}>
              <TableCell className="font-medium">{code}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell className="text-right">{suitability}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <DialogTitle>Course List</DialogTitle>
        <CommandInput placeholder="Search for related topics..." />
        <CommandList>
          <CommandEmpty>No related topics found.</CommandEmpty>
          <CommandGroup heading="Course Details">
            <CommandItem>Course Code: {selectedCourse}</CommandItem>
            <CommandItem>Course Name: {courses[selectedCourse || ""]?.[0]}</CommandItem>
            <CommandItem>Suitability: {courses[selectedCourse || ""]?.[1]}%</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default CourseList;