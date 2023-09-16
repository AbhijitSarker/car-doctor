import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const SocialLogin = () => {

    const { loginWithGoogle } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        loginWithGoogle()
        // .then(res => res.json())
        // .then(data => {

        // })
    };
    return (
        <div>
            <div className="divider">OR Sign In With</div>
            <div className='flex  justify-evenly'>
                <button onClick={handleGoogleLogin} className="btn btn-circle">G</button>

            </div>
        </div>
    );
};

export default SocialLogin;