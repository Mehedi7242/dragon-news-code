import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <div className=" mx-auto card p-10 bg-base-100 w-full max-w-sm shrink-0 rounded-none">
                <h2 className=' text-2xl text-center'>Log In Your Account</h2>
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <h3>Dont’t Have An Account ? <Link to={'/auth/register'} className=' text-red-600'>Register</Link></h3>
            </div>
        </div>
    );
};

export default Login;