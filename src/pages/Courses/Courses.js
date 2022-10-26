import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from './CourseCart/CourseCart';

const Courses = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 py-8 gap-y-14'>
            {
                allCourses.map(course => <CourseCart
                key={course._id}
                course={course}
                ></CourseCart>)
            }
        </div>
    );
};

export default Courses;