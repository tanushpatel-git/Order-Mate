import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify'


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const navigate = useNavigate();

    const togglePassword = () => setShowPassword(!showPassword);
    const signUpData = JSON.parse(localStorage.getItem("SignUpData")) || [];

    const handleLogin = () => {
        if (signUpData.length > 0) {
            signUpData.forEach((item) => {
                if (item.userName === username) {
                    if (item.password === password) {
                        localStorage.setItem("LoginData", JSON.stringify(item));
                        navigate("/OrderBoard");
                    }else{
                        toast.error("Written password incorrect");
                        setPassword("")
                    }
                }else{
                    toast.error("Please enter a valid username");
                    setUsername("");
                }
            })
        }else{
            toast.error("Please Sign up first");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 absolute top-0 left-0 w-full">
            <ToastContainer/>
            <div className="bg-slate-800 w-full max-w-sm p-8 rounded-2xl shadow-2xl">
                <h2 className="text-white text-2xl font-semibold text-center mb-6 underline">Login</h2>

                {/* Username Input */}
                <div className="relative mb-6">
                    <label
                        className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none z-10
              ${userFocus || username ? "-top-3 text-sm" : "top-3 text-base"}`}
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        value={username}
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none transition-transform duration-200 focus:-translate-y-1"
                    />
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                    <label
                        className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none z-10
              ${passFocus || password ? "-top-3 text-sm" : "top-3 text-base"}`}
                    >
                        Password
                    </label>

                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onFocus={() => setPassFocus(true)}
                        onBlur={() => setPassFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none transition-transform duration-200 focus:-translate-y-1"
                    />

                    <span
                        onClick={togglePassword}
                        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-slate-300"
                    >
            {showPassword ? "🙈" : "👁️"}
          </span>
                </div>

                {/* Login Button */}
                <button
                    onClick={handleLogin}
                    className="w-full p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition duration-200"
                >
                    Login
                </button>
                <h4 className="text-white text-center">If u don't have a account you should have to do <Link
                    to="/SignUp" className="text-blue-400 underline">Sign Up</Link> first</h4>
            </div>
        </div>);
}