"use client";

import Header from "@/components/Header";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseList from "@/components/CourseList"; 

interface CourseDict {
  [courseCode: string]: [string, number]; // Tuple: [Course Name, Suitability %]
}

const myCoursesByYear: Record<number, CourseDict> = {
  1: {
    "CS101": ["Introduction to Computer Science", 90],
    "CS102": ["Data Structures and Algorithms", 85],
  },
  2: {
    "CS201": ["Software Engineering", 88],
    "CS202": ["Computer Networks", 82],
  },
  3: {
    "CS301": ["Artificial Intelligence", 92],
    "CS302": ["Machine Learning", 90],
  },
  4: {
    "CS401": ["Cybersecurity", 80],
    "CS402": ["Cloud Computing", 87],
  },
};

const CoursePlan = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="mb-10">
        <Header title="Your Dream Course Plan!" />
      </div>
      <div className="w-[50%] mx-auto mt-10">
        <Carousel>
          <CarouselContent>
            {Object.entries(myCoursesByYear).map(([year, courses]) => (
              <CarouselItem key={year}>
                <CourseList year={Number(year)} courses={courses} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CoursePlan;