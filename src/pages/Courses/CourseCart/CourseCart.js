import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CourseCart = ({ course }) => {
  const { title, amount, image_url} = course;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={image_url}alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{title}</h2>
          <hr/>
          <div className="card-actions justify-between">
          <h2 className=" card-title text-black">${amount}</h2>
          <button className="btn btn-outline w-1/2"> 
            See Details <FaArrowRight className="ml-3"></FaArrowRight>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
