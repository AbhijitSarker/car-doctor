import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signin } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                const user = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                        <form onSubmit={handleLogin}>
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" defaultValue={'Login'} type="submit" />
                            </div>
                            <SocialLogin></SocialLogin>
                            <p className='mt-5'>Dont have an Account?   <Link to='/signup' className='text-orange-600 font-bold'> Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;