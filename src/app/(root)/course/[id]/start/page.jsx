import CourseView from '@/components/course-view/courseView';
import { getChapterList } from '@/lib/drizzleActions'
import React from 'react'

export default async function Page({ params }) {
  const { id: courseId } = await params;

  const res = await getChapterList(courseId);
  console.log("res", res)

  return (
    <div>
      <CourseView chapterList={res} />
    </div>
  );
}
