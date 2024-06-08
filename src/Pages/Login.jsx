import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/Home");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login up a user...");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="border w-full min-h-screen flex flex-col items-center justify-center gap-y-6">
      <h1 className="text-2xl text-center font-bold my-6">
        MoodCheckIn | Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-1/4 flex flex-col justify-center items-center gap-y-6"
      >
        <div className="w-full flex flex-row justify-between items-center gap-x-4">
          <label form="email" className="text-lg font-semibold text-gray-900">
            Your email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="p-3 border rounded-lg"
            placeholder="name@acerite.com"
            autoComplete="username"
            required
          />
        </div>

        <div className="w-full flex flex-row justify-between items-center gap-x-4">
          <label
            form="password"
            className="text-lg font-semibold text-gray-900"
          >
            Your password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="Password"
            className="p-3 border rounded-lg"
            placeholder="Your Password"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center gap-y-4">
          <button className="w-3/4 h-10 border rounded-lg text-center dark:bg-[#a48bef] dark:hover:bg-[#9373f2]">
            Login
          </button>
          <span>----- OR -----</span>
          <button
            onClick={() => {}}
            className="w-3/4 h-10 border rounded-lg text-center dark:bg-[#f84222] dark:hover:bg-[#cd2424] "
            disabled
          >
            SignIn with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
