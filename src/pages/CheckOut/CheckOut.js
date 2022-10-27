import React from "react";
import { useLoaderData } from "react-router-dom";
import Iframe from "react-iframe";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { title, instructor, info, video } = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl my-5 text-center">
        {title} Course by {instructor.name}
      </h1>
      <p className="my-5 text-center">
        This course has {info.video} video and {info.exam} quiz
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <h1 className="text-3xl my-3">Course Video List</h1>
          {video.map((v) => (
            <Iframe
              url={v}
              width="150px"
              height="150px"
              id=""
              className="my-5 mr-5"
              position="relative"
            />
          ))}
        </div>
        <div>
          <div className="card card-compact w-1/2 mx-auto mt-16 bg-slate-50 shadow-xl">
            <figure>
              <div className="avatar mt-4">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} alt="" />
                </div>
              </div>
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl text-black">{user?.displayName}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
