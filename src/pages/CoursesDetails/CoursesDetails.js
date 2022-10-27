import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CoursesDetails = () => {
  const { category_id, info, amount, title, instructor, image_url, details } =
    useLoaderData();

  return (
    <div ref={ref} className="pb-8">
      <h1 className="text-center text-3xl pt-8">Welcome, {title} Course</h1>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
        <div>
          <h2 className="text-2xl mb-5">Course Instructor</h2>
          <div className="card  card-side bg-slate-700 shadow-xl h-24 text-white ">
            <figure>
              <img
                className="h-20 rounded-full p-2 mx-5"
                src={instructor.img}
                alt="Movie"
              />
            </figure>
            <div className="card-body  p-0">
              <h2 className="card-title pt-2">{instructor.name}</h2>
              <p className="text-xs">{instructor.study}</p>
            </div>
          </div>
          <div  >
            <h2 className="text-2xl mb-5 mt-8">
              What you will learn by doing the course
            </h2>
            {details.map((d) => (
              <div className="flex">
                <FaCheck className="text-2xl mr-3"></FaCheck>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="btn btn-primary mt-8" onClick={toPdf}>
                Download PDF
              </button>
            )}
          </Pdf>
        </div>
        <div className="pl-5">
          <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure>
              <img src={image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-between">
                <h2 className="card-title text-black">{title}</h2>
                <h2 className=" card-title text-right text-black">${amount}</h2>
              </div>
              <hr />
              <div>
                <Link to={`/check/${category_id}`}>
                  <button className="btn btn-wide w-full">Purchase</button>
                </Link>
              </div>
              <div className="flex justify-between">
                <h2 className="text-base text-black">
                  Total Video: {info.video}
                </h2>
                <h2 className="text-base text-black">
                  Total Quiz: {info.exam}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
