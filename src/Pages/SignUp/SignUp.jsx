import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SmallSpinner from "../../components/SmallSpinner";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { registerEmailAndPassword, googleSignIn, updateUserProfile, loading } =
    useContext(AuthContext);
  const [role, setRole] = useState("buyer");
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = event.target.userName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const userInfo = {
      userName,
      email,
      role: role,
    };
    registerEmailAndPassword(email, password)
      .then((res) => {
        updateUserProfile(userName)
          .then(() => {
            // ? update
            // ? saved the users from db
            fetch(`https://mobilex-server.vercel.app/user/${email}`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                toast.success("Successfully Created user");
                navigate(from, { replace: true });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => {});
      })
      .catch((err) => {
        setError(err.message);
      });
    form.reset();
  };
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          userName: result.user.displayName,
          email: result.user.email,
          role: role,
        };
        // ? saved the users from db
        fetch(`https://mobilex-server.vercel.app/user/${result.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success("Successfully Google SignUp");
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <section className="banner bg-primary py-10">
      <div className="container w-full max-w-sm p-6 m-auto mx-auto bg-slate-50 rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-secondary dark:text-white">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              name="userName"
              className="block w-full py-3 text-gray-700 bg-white border-gray-200 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              required
            />
          </div>
          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              type="email"
              name="email"
              className="block w-full py-3 text-gray-700 bg-white border-gray-200 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              required
            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <div className="mt-6">
            <select
              id="small"
              className="block w-full py-3 px-2 text-left text-gray-600 border-gray-200 rounded-md"
              // defaultValue={"DEFAULT"}
              onBlur={(event) => setRole(event.target.value)}
            >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <div className="mt-2">
            {error ? (
              <>
                <small className="text-red-600 ">{error}</small>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md  focus:outline-none focus:bg-gray-600">
              {loading ? <SmallSpinner /> : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>
          <a
            href="!#"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with Social Media
          </a>
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>
        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleSignUp}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Already have an account?{" "}
          <Link
            to="/signIn"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
