
import google from "./../../public/google.png";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
const Social = () => {

  const navigate = useNavigate();

  const { googleLogin } = useAuth();
  const location = useLocation();

  const handleGoogleSignIn = (media) => {
    // eslint-disable-next-line no-unused-vars
    media()
      // eslint-disable-next-line no-unused-vars
      .then(result => {
      toast.success('You have successfully sign in with google');
      navigate(location?.state ? location.state : "/");
    }).catch(error => {
      return toast.error(error.message);
})
  }
    return (
      <div className="w-full mx-auto text-center space-y-5">
        <p>Or</p>
        <div className="space-y-5">
          <button
            className="btn btn-outline"
            onClick={() => handleGoogleSignIn(googleLogin)}
          >
            <img src={google} className="w-5" />
            Continue with Google
          </button>
        </div>
      </div>
    );
};

export default Social;