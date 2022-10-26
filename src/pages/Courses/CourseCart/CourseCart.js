import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCart = ({ course }) => {
  const {category_id, title, amount, image_url} = course;
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
          <Link to={`/course-details/${category_id}`} >
          <button className="btn btn-outline w-full">
            See Details <FaArrowRight className="ml-3"></FaArrowRight>
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
