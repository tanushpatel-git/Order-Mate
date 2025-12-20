import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import {useNavigate} from "react-router-dom";

export default function InCaseOfLogin() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-slate-800 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-md w-full rounded-2xl bg-slate-900/80 backdrop-blur shadow-xl p-8 text-center"
            >
                <h1 className="text-xl font-semibold text-slate-100 mb-3">
                    You are already logged in
                </h1>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                    You are currently logged into one account. If you want to change or
                    log in with another account, please log out first.
                </p>

                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                    onClick={() => {
                        localStorage.removeItem('LoginData');
                        navigate('/Login');
                    }}
                >
                    <LogOut size={18} />
                    Log out
                </motion.button>
            </motion.div>
        </div>
    );
}
