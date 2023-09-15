import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../provider/AuthProvider';

const NavBar = () => {

    const { user, logout } = useContext(AuthContext);

    const handleLogout = (event) => {
        logout()
            .then(() => {
                localStorage.removeItem('access_token');
            })
    };

    const navItems = <>
        <li><Link>Home</Link></li>
        <li>  <Link>About</Link> </li>

        {
            user && <li><Link to='/bookings'>Bookings</Link></li>
        }

    </>
    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl h-16"><img className='h-full' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn border-2 border-orange-600 bg-white text-black hover:bg-orange-500 hover:text-white mr-4">Appointment</button>

                {
                    user ? <button onClick={handleLogout} className="btn bg-orange-600 text-white  hover:bg-orange-500 hover:text-white">Logout</button>
                        : <Link to='/login'><button className="btn bg-orange-600 text-white  hover:bg-orange-500 hover:text-white">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default NavBar;