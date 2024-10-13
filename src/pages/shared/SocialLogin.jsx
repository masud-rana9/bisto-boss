import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiosPublic();

  const handleSignWithGoogle = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(from, { replace: true });
      });
    });
  };

  return (
    <div className=" w-full mx-auto">
      <button
        onClick={handleSignWithGoogle}
        className="bg-slate-500 mx-8 rounded-md py-3 text-white"
      >
        SignIn with Google
      </button>
    </div>
  );
};

export default SocialLogin;
