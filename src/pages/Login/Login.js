import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = event =>{
    event.preventDefault();
    
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      navigate('/')
    })
    .catch(e => {
      console.error('error', e)
      setError(e.message);
    })
  }


  return (
    <div>
      <div className="hero min-h-screen bg-slate-800">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name= "email"
                  placeholder="email"
                  className="input input-bordered text-black"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name = "password"
                  placeholder="password"
                  className="input input-bordered text-black"
                  required
                />
                <label className="label">
                  <p  className="label-text-alt link link-hover">
      
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn  w-full">Login</button>
              </div>
              <div className="text-black text-center">
                <p>Don't have an account ?</p>
                <Link to='/register'><button className="btn btn-link">Register Now</button></Link>

                <p className="text-red-700">{error}</p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
