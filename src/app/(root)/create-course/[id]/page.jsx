// 'use client';
// import CourseLayout from '@/components/course-layout/course-layout';
// import { getCourseLayout } from '@/lib/drizzleActions';
// import React, { useEffect } from 'react';

// function Page({ params }) {
//     const { id } = params;
//     console.log(id);
//     useEffect(() => {
//         const getLayout = async () => {
//             try {
//                 const response = await getCourseLayout(id);
//                 console.log(response);
//             } catch (error) {
//                 console.error('Error fetching course layout:', error);
//             }
//         };

//         if (id) {
//             getLayout();
//         }
//     }, [id]);

//     return (
//         <div className={``}>
//             <CourseLayout />
//         </div>
//     )
// }

// export default Page

import CourseLayout from "@/components/course-layout/course-layout";
import { getCourseLayout } from "@/lib/drizzleActions";

export default async function Page({ params }) {
  const { id } = await params;

  const course = await getCourseLayout(id);

  console.log("id:", id);
  console.log("LayoutPageCourse", course);

  if (!course || course.length === 0) {
    return <div>Course layout not found</div>;
  }
  return (
    <div>
      <CourseLayout data={course[0]} start={false} generate={true} />
    </div>
  );
}
