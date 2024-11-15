import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createNewUser,setUser,updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get('name')
    const email = form.get('email')
    const photo = form.get('photo')
    const password = form.get('password')



    createNewUser(email,password)
    .then(result=>{
        const user = result.user;
        setUser(user)
        updateUserProfile({
            displayName:name,
            photoURL:photo
        })
        .then(()=>{
            navigate('/')
        }).catch(error=>{
            alert('error',error)
        })
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    })
    }

    return (
        <div className='bg-[#f3f3f3]'>
            <div className=" mx-auto card p-10 bg-base-100 w-full max-w-sm shrink-0 rounded-none">
                <h2 className=' text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name='photo' type="text" placeholder="photo URL" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="assword" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <h3>Already  Have An Account ? <Link to={'/auth/login'} className=' text-red-600'>
                        Login
                    </Link>
                </h3>
            </div>
        </div>
    );
};

export default Register;