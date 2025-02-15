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

const CoursePlan = ({data}: any) => {
    if (data) {
        return (
            <div className="flex flex-col space-y-5 mb-10">
              <div className="">
              </div>
              <div className="w-full mx-auto">
                <Carousel>
                  <CarouselContent>
                    {Object.keys(data).map((index) => (
                      <CarouselItem key={index}>
                        <CourseList year={Number(index)} courses={data[index]} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          );
    }

};

export default CoursePlan;
