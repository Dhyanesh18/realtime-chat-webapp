import { MessageSquare, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
    const { logout } = useAuthStore();
    return (
    <nav className="w-full bg-blue-300/10 backgrop-blur-md shadow-md px-6 py-4 flex items-center justify-between relative top-0">
            {/* LEFT: LOGO */}
            <div className="flex items-center gap-2">
                <MessageSquare size={32} className="text-white" />
                <span className="font-bold text-xl text-white-800">Whispyr</span>
            </div>
            {/* RIGHT: PROFILE AND LOGOUT */}
            <div className="flex items-center gap-8">
                <Link
                    to={"/profile"}
                    className="flex items-center gap-1 text-white hover:text-blue-600 transition"
                    >
                    <User size={20} />
                    <span>Profile</span>
                </Link>

                <button
                onClick={logout}
                className="flex items-center gap-1 text-white hover:text-red-600 transition"
                >
                <LogOut size={20} />
                <span>Logout</span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;