import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {

  const {createUser, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState('');

   const handleSubmit = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setError('');
      form.reset();
      handleUpdateUserProfile(name,photoURL);
    })
    .catch(e => {
      console.error('error', e)
      setError(e.message);
    })
}


const handleUpdateUserProfile = (name,photoURL)=>{
    const profile = {
      displayName : name,
      photoURL: photoURL
    }
     updateUserProfile(profile)
     .then( ()=>{console.log('update')})
     .catch( e => console.error(e))
}

    return (
        <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold my-4">Please Register Now</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-8">
              <form onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    placeholder="PhotoURL"
                    className="input input-bordered text-black"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
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
                    name="password"
                    placeholder="password"
                    className="input input-bordered text-black"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn w-full">Register</button>
                </div>
                <p className="text-red-700">{error}</p>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;