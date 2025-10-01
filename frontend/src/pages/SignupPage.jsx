import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, MessageSquare, Loader2 } from "lucide-react";
import backgroundImage from "../assets/image.jpg";
import chatImage from "../assets/chat.svg";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { signup, isSigningUp } = useAuthStore();

    const validateForm = () => {
        if (!formData.fullName.trim()) return toast.error("Full name is required");
        if (!formData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
        if (!formData.password) return toast.error("Password is required");
        if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

        return true;
    };


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();

        if (success === true) signup(formData);
    };


    return (
        <div className="flex justify-center items-center h-screen w-screen bg-cover bg-center p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Main container: Now responsive */}
            <div className="w-full max-w-4xl h-auto md:h-3/4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                
                {/* Left Side: Form */}
                <div className="flex flex-col justify-center p-8 md:p-12 text-white">
                    {/* Title: Centered and responsive text size */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 font-sans flex items-center justify-center gap-3">
                        <MessageSquare  size={48} />
                        <span>Whispyr</span>
                    </h1>
                    {/* Form: Centered with max-width */}
                    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                        {/* Full Name Input */}
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-white/20 border border-white/30 rounded-md py-2 px-3 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                placeholder="Enter your full name"
                            />
                        </div>

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
                            <label className="block text-white mb-2" htmlFor="password">Password</label>
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2.5 rounded-md mt-6 hover:bg-white hover:text-blue-900 transition-colors"
                            disabled={isSigningUp}
                        >
                            {isSigningUp ? (
                            <span className="flex items-center justify-center gap-2">
                                <Loader2 className="size-5 animate-spin" />
                                Loading...
                            </span>
                            ) : (
                            "Create Account"
                            )}
                        </button>
                    </form>
                    <div className="text-center pt-4">
                        <p className=" text-white">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary">
                            Sign in
                        </Link>
                        </p>
                    </div>
                </div>

                {/* Right Side: Image and Text */}
                {/* Responsive rounding and padding */}
                <div className="flex flex-col items-center justify-center bg-white p-8 rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-600 mb-14">
                        Your conversations, Live and Easy !
                    </h2>
                    <img
                        src={chatImage}
                        alt="Chat illustration"
                        className="w-3/4 md:w-96 max-w-sm"
                    />
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;