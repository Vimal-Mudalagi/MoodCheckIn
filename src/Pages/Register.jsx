import React, { useState } from "react";
import { useFirebase } from "../Context/Firebase";


const RegisterPage = () => {
    const firebase = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Signing up a user...");
        const result = await firebase.signupUserWithEmailAndPassword(
            email,
            password
        );
        console.log("Sucessfull", result);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}
                className="max-w-sm mx-auto m-7 p-20">

                <div className="mb-5">
                    <label form="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        id="email"
                        className="p-5 border rounded-lg"
                        placeholder="name@acerite.com"
                        autoComplete="username"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label form="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        id="Password"
                        className="p-5 border rounded-lg"
                        placeholder="Your Password"
                        autoComplete="current-password"
                        required />
                </div>

                <button className="p-5 border rounded-lg text-center dark:bg-[#a48bef] dark:hover:bg-[#9373f2]">Create Account</button>
            </form>
        </div>

    )
}

export default RegisterPage;