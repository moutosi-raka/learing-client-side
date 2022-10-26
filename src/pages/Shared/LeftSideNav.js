import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaGoogle, FaGithub } from "react-icons/fa";

const LeftSideNav = () => {
    
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className='p-8'>
            <div>
            <button className="btn btn-outline btn-info block mb-3 lg:w-full w-1/2"><FaGoogle className="inline mb-1 mr-2"></FaGoogle> Login With Google</button>
            <button className="btn btn-outline btn-info mb-5 lg:w-full w-1/2">
              <FaGithub  className="inline mr-2"></FaGithub>  Login With Github</button>
            </div>
            <div className='mb-2 pb-2 ' style={{borderBottom: '2px solid white', width: '50%'}}>
            <h1 className='text-2xl font-extrabold'>Courses List</h1>
            </div>
            {
                courses.map(course => <p key={course.id} className='py-1 hover:text-slate-500'><HiOutlineBookOpen className='inline mr-3'></HiOutlineBookOpen><Link key={course.id}>{course.name}</Link></p>)
            }
        </div>
    );
};

export default LeftSideNav;<h1>this is left side navbar</h1>