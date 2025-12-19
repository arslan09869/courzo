import FinishPage from '@/components/finish-page'
import { getCourseLayout } from '@/lib/drizzleActions';
import React from 'react'

async function Page({ params }) {
    const courseId = params.id;
    console.log(courseId);
    const course = await getCourseLayout("bc3a195d-f0f1-4553-9367-c2ab314dcb9b");
    console.log(course);
    return (
        <div>
            <FinishPage course={course[0]} />
        </div>
    )
}

export default Page