import { useState } from "react";
import {toast,ToastContainer} from 'react-toastify'
import {useNavigate} from "react-router-dom";


export default function SignUp() {
    const data = JSON.parse(localStorage.getItem('SignUpData')) || [];
    const [formData, setFormData] = useState({
        userName:"",
        phone:"",
        gender:"",
        password:"",
        confirmPassword: "",
        dob:""
    });
    const navigate = useNavigate();
    const [error, setError] = useState(null)
    const [focus, setFocus] = useState({});
    const handleFocus = (field) => setFocus({ ...focus, [field]: true });
    const handleBlur = (field) => setFocus({ ...focus, [field]: false });
    const floating = (value, focused) =>
        focused || value ? "-top-3 text-sm" : "top-3 text-base";


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const formHandling = () => {
        const isValidationOfUserName =  /^[A-Za-zÀ-ÖØ-öø-ÿ'`-]{1,}(?:[ \-'][A-Za-zÀ-ÖØ-öø-ÿ'`-]+)*$/;
        const isValidationOfPassword = /^.{8,}$/;
        const isValidationOfPhone = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;
        const isValidationOfDob = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

        const errorMsg = {};

        const {userName, phone, password,confirmPassword, dob} = formData;

        if (!isValidationOfPhone.test(phone)) {
            errorMsg.phone = "Invalid phone number";
        }
        if (!isValidationOfUserName.test(userName)){
            errorMsg.userName = "Invalid user name";
        }
        if (!isValidationOfPassword.test(password)) {
            errorMsg.password = "Invalid password";
        }else{
            if(password !== confirmPassword){
                errorMsg.passwordConfirmed = "Passwords do not match with confirm password";
            }
        }
        if (!isValidationOfDob.test(dob)){
            errorMsg.dob = "Invalid dob";
        }
        return errorMsg;

    }

    const handleSubmit = () => {
        const resultOfFormHandling = formHandling();
        setError(resultOfFormHandling)
        if (Object.keys(resultOfFormHandling).length === 0) {
            data.push(formData);
            localStorage.setItem('SignUpData',JSON.stringify(data));
            toast.success("Signed up successfully.");
            navigate("/Login");
        }else{
            error.dob && toast.warn(error.dob);
            error.password && toast.warn(error.password);
            error.userName && toast.warn(error.userName);
            error.passwordConfirmed && toast.warn(error.passwordConfirmed);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 p-4 absolute top-0 left-0 w-full">
            <ToastContainer/>
            <div className="bg-slate-800 w-full max-w-md p-8 rounded-2xl shadow-2xl relative top-13">
                <h2 className="text-white text-2xl font-semibold text-center mb-6 underline">Sign Up</h2>

                {/* Name */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none ${floating(formData.userName, focus.name)}`}>Full Name</label>
                    <input type="text" value={formData.userName} name="userName" onChange={handleChange} onFocus={()=>handleFocus("name")} onBlur={()=>handleBlur("name")} className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none" />
                </div>

                {/* Phone */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none ${floating(formData.phone, focus.phone)}`}>Phone Number</label>
                    <input type="tel" value={formData.phone} name="phone" onChange={handleChange} onFocus={()=>handleFocus("phone")} onBlur={()=>handleBlur("phone")} className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none" />
                </div>

                {/* Gender */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none -top-3 text-sm`}>Gender</label>
                    <select value={formData.gender} onChange={handleChange} name="gender" className="w-full p-3 rounded-xl bg-slate-700 text-white outline-none">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Date of Birth */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none -top-3 text-sm`}>Date of Birth</label>
                    <input type="date" value={formData.dob} onChange={handleChange} name="dob" className="w-full p-3 rounded-xl bg-slate-700 text-white outline-none" />
                </div>

                {/* Password */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none ${floating(formData.password, focus.password)}`}>Password</label>
                    <input type="password" value={formData.password} name="password" onChange={handleChange} onFocus={()=>handleFocus("password")} onBlur={()=>handleBlur("password")} className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none" />
                </div>

                {/* Confirm Password */}
                <div className="relative mb-6">
                    <label className={`absolute left-3 text-slate-300 transition-all duration-200 pointer-events-none ${floating(formData.confirmPassword, focus.confirmPassword)}`}>Confirm Password</label>
                    <input type="password" value={formData.confirmPassword} name="confirmPassword" onChange={handleChange} onFocus={()=>handleFocus("confirmPassword")} onBlur={()=>handleBlur("confirmPassword")} className="w-full p-3 pt-5 rounded-xl bg-slate-700 text-white outline-none" />
                </div>

                {/* Sign Up Button */}
                <button onClick={handleSubmit} className="w-full p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition duration-200">Sign Up</button>
            </div>
        </div>
    );
}
