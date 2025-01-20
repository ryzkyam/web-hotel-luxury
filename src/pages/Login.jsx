import React, { useState } from 'react';
import assetheader from "../asset/header.png";


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="hero min-h-screen bg-base-200"style={{ backgroundImage: `url(${assetheader})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left -mt-16 mb-20">
          <img src="/src/asset/logo4.png" alt="" />
          <h1 className="text-5xl font-bold">{isLogin ? 'Login' : 'Sign Up'}</h1>
     
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          {isLogin ? (
            <form className="card-body" action='http://localhost:8080/dataUser' method='post'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login disnini</button>
              </div>
              <p className="text-center mt-4">
                Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Sign Up</span>
              </p>
            </form>
          ) : (
            <form className="card-body" action='http://localhost:8080/registerUser' method='post'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <p className="text-center mt-4">
                Already have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>Login</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );    
}

export default Login;
