import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();
    
    return (
        <div className="p-2.5 border-b border-white/40">
        <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="avatar">
                <div className="size-10 rounded-full relative">
                <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
                </div>
            </div>

            {/* User info */}
            <div>
                <h3 className="font-medium">{selectedUser.fullName}</h3>
                {
                    (onlineUsers?.includes(selectedUser._id)) ? <p className="text-sm font-bold text-green-400">Online</p> : <p className="text-sm text-white/30">Offline</p>
                }
            </div>
            </div>

            {/* Close button */}
            <button onClick={() => setSelectedUser(null)}>
            <X />
            </button>
        </div>
        </div>
    );
};
export default ChatHeader;