import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, photo, email, password })
    }
    return (
        <div className='flex justify-center items-center'>

            <div className="card bg-base-100 w-full max-w-sm  shrink-0 shadow-2xl mt-4">
                <h2 className='text-center text-2xl font-semibold py-5'>Register Your Account</h2>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="name" required />
                        {/* photo Url */}

                        <label className="label">Photo Url</label>
                        <input name='photo' type="text" className="input" placeholder="photo" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary ' to='/auth/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
    
};

export default Register;