import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../auth/GoogleLogin";
import { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

function Register() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  //user Sign up
  // eslint-disable-next-line no-unused-vars
  const [createUserWithEmailAndPassword, user1, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const handleUserSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    createUserWithEmailAndPassword(email, pass);
    console.log(email, pass);
  };




  useEffect(() => {
    if (user) {
      navigate("/");
    }
    if (error) {
      console.log(error?.message)
    }
  }, [navigate, user,error]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleUserSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            {
              error&&<p className="text-center text-red-500">{error?.message}</p>
            }
            <div className="text-center">
              <p>
                Already registered?{" "}
                <Link to="/login" className="text-orange-400">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className="mx-7 mb-5">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
