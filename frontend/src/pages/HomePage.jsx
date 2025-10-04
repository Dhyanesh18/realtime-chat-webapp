import Navbar from "../components/Navbar";
import backgroundImage from "../assets/image.jpg";
import Sidebar from "../components/Sidebar.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import { useChatStore } from "../store/useChatStore";

const Homepage = () => {
    const selectedUser = useChatStore((state) => state.selectedUser);

    return (
        <div className="relative h-screen w-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            {/* Navbar */}
            <Navbar className="absolute top-0 left-0 w-full z-20" />

            {/* Chat container */}
            <div className="absolute inset-0 flex items-center justify-center mt-10 z-10">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl shadow-lg w-3/4 h-5/6 flex overflow-hidden">
                    <div className="flex h-full w-full">
                        <Sidebar />
                        {selectedUser ? <ChatContainer /> : <NoChatSelected />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
