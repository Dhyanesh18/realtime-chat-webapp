import { useState } from "react";
import backgroundImage from "../assets/image.jpg"
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { MessageSquare, Eye, EyeOff, Loader2 } from "lucide-react"
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const { login, isLoggingIn } = useAuthStore();

    const validateForm = () => {
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");
        return true;
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = validateForm();
        if (success === true) login(formData);
    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-cover bg-center p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="w-full max-w-xl h-auto md:h-3/4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl  shadow-2xl p-8 md:p-14">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-3xl font-bold mb-10 md:mb-14 pt-4 font-sans flex items-center justify-center gap-3">
                        <MessageSquare  size={38} />
                        <span>Whispyr</span>
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-sans flex items-center justify-center gap-3">Welcome Back</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-white mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-white/20 border border-white/30 rounded-md py-2 px-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                            placeholder="you@example.com"
                        />
                    </div>
                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-white mb-2"htmlFor="password">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full bg-white/20 border border-white/30 rounded-md py-2 px-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                placeholder="••••••••"
                            />
                            <div 
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="text-white/70" size={20} />
                                ) : (
                                    <Eye className="text-white/70" size={20} />
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2.5 rounded-md mt-6 hover:bg-white hover:text-blue-900 transition-colors"
                        disabled={isLoggingIn}
                    >
                        {isLoggingIn ? (
                        <span className="flex items-center justify-center gap-2">
                            <Loader2 className="size-5 animate-spin" />
                            Loading...
                        </span>
                        ) : (
                        "Login"
                        )}
                    </button>
                    <div className="text-center pt-4">
                        <p>New to Whispyros?{" "}
                        <Link to="/signup" className="link link-primary">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage