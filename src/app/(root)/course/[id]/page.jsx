// import CourseLayout from '@/components/course-layout/course-layout'
// import { getCourseLayout } from '@/lib/drizzleActions';
// import React from 'react'

// async function Page({ params }) {
//   const course = await getCourseLayout(params.id);
//   console.log(course);
//   return (
//     <div>
//       <CourseLayout data={course[0]} start={true} generate={false}/>
//     </div>
//   )
// }

// export default Page

import CourseLayout from "@/components/course-layout/course-layout";
import { getCourseLayout } from "@/lib/drizzleActions";

export default async function Page({ params }) {
  const { id } = await params;

  const course = await getCourseLayout(id);
  console.log("course", course)

  if (!course || course.length === 0) {
    return <div className="p-6 text-muted-foreground">Course not found</div>;
  }

  return <CourseLayout data={course[0]} start={true} generate={false} />;
}
