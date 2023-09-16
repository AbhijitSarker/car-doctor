import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .then(error => console.log(error));

        console.log(name, email, password, confirm);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>

                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="text" placeholder="confirm password" name='confirm' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-orange-600 hover:bg-orange-500 text-white" defaultValue={'Login'} type="submit" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className='mt-5'>Already have an Account?   <Link to='/login' className='text-orange-600 font-bold'> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;