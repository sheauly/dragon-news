import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../src/assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);

    const handleLogOut = () => {
        console.log('log out button');
        logOut()
            .then(() => {
                alert("You trying to logOut")
                
                
            })
            .catch((error) => {
               console.log(error)
            });
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='flex login-btn gap-4'>
                <img src={userIcon} alt="" />
                {user ? (<button onClick={handleLogOut} className='btn btn-primary px-4'>LogOut</button>) :
                    (<Link to='/auth/login' className='btn btn-primary px-4'>Login</Link>)}
                
                
            </div>
        </div>
    );
};

export default Navbar;
