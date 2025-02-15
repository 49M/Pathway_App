import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

interface CourseDict {
  [courseCode: string]: [string, number];
}

interface Props {
  year: number;
  courses: CourseDict;
}

const CourseList: React.FC<Props> = ({ year, courses }: Props) => {
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
            <TableRow key={code}>
              <TableCell className="font-medium">{code}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell className="text-right">{suitability}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
};

export default CourseList;