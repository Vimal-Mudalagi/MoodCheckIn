import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { auth } from "../helpers/Firebase";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up a user...");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="m-4 p-4 w-full sm:w-1/2 border border-black rounded-lg flex flex-col items-center justify-center gap-y-6">
        <h1 className="text-2xl text-center font-bold my-6">
          Mood<span className="text-[#a486f4]">CheckIn</span> | Sign Up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-y-6 p-2"
        >
          <div className="w-full flex flex-row justify-between items-center gap-x-4">
            <label
              htmlFor="email"
              className="text-sm sm:text-lg font-semibold text-gray-900"
            >
              Your email :
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="p-2 sm:p-3 border rounded-lg w-1/2 sm:w-3/4"
              placeholder="name@acerite.com"
              autoComplete="username"
              required
            />
          </div>

          <div className="w-full flex flex-row justify-between items-center gap-x-4">
            <label
              htmlFor="password"
              className="text-sm sm:text-lg font-semibold text-gray-900"
            >
              Your password :
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="Password"
              className="p-2 sm:p-3 border rounded-lg w-1/2 sm:w-3/4"
              placeholder="Your Password"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="w-full flex flex-col items-center justify-center gap-y-4">
            <button className="w-3/4 h-10 border rounded-lg text-center dark:bg-[#a48bef] dark:hover:bg-[#9373f2]">
              Create Account
            </button>
            <span>----- OR -----</span>
            <button
              onClick={() => {}}
              className="w-3/4 h-10 border rounded-lg text-center dark:bg-[#f84222] dark:hover:bg-[#cd2424]"
              disabled
            >
              SignUp with Google
            </button>
          </div>
        </form>

        <h3 className="text-base text-center font-bold my-4">
          Already have an account?{" "}
          <NavLink to={"/login"}>
            <span className="text-[#a486f4]">Login</span>
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default RegisterPage;
