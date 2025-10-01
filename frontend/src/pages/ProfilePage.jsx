import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";
import avatar from "../assets/avatar.png";
import backgroundImage from "../assets/image.jpg";
import Navbar from "../components/Navbar";
import { format } from 'date-fns';

const ProfilePage = () => {
    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
    const [selectedImg, setSelectedImg] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = async () => {
            const base64Image = reader.result;
            setSelectedImg(base64Image);
            await updateProfile({ profilePic: base64Image });
        };
    };

    return (
        // MODIFIED: Changed flex properties to position Navbar at the top
        <div className="flex flex-col h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Navbar />
            
            {/* ADDED: This wrapper will grow and center the content below the Navbar */}
            <div className='flex-grow flex items-center justify-center p-4'>
                {/* MODIFIED: Increased max-width and added w-full for responsiveness */}
                <div className="max-w-2xl w-full mx-auto p-10">
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg rounded-xl shadow-xl p-10 space-y-8">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold ">Profile</h1>
                            <p className="mt-2">Your profile information</p>
                        </div>

                        {/* avatar upload section */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <img
                                    src={selectedImg || authUser.profilePic || avatar}
                                    alt="Profile"
                                    className="size-32 rounded-full object-cover border-4 "
                                />
                                <label
                                    htmlFor="avatar-upload"
                                    className={`
                                    absolute bottom-0 right-0 
                                    bg-base-content hover:scale-105
                                    p-2 rounded-full cursor-pointer 
                                    transition-all duration-200
                                    ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
                                    `}
                                >
                                    <Camera className="w-5 h-5 text-base-200" />
                                    <input
                                        type="file"
                                        id="avatar-upload"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        disabled={isUpdatingProfile}
                                    />
                                </label>
                            </div>
                            <p className="text-sm text-shadow-white">
                                "Click the camera icon to update your photo"
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-1.5">
                                <div className="text-sm text-white flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    Full Name
                                </div>
                                <p className="px-4 py-2.5 rounded-lg border">{authUser?.fullName}</p>
                            </div>

                            <div className="space-y-1.5">
                                <div className="text-sm text-white flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    Email Address
                                </div>
                                <p className="px-4 py-2.5 rounded-lg border">{authUser?.email}</p>
                            </div>
                        </div>

                        {/* NOTE: I noticed this section was outside the main content card, so I moved it inside for better structure. */}
                        <div className="mt-6">
                            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center justify-between py-2 border-b border-white">
                                    <span>Member Since</span>
                                    <span>{format(new Date(authUser.createdAt), 'MMMM d, yyyy')}</span>
                                </div>
                                <div className="flex items-center justify-between py-2">
                                    <span>Account Status</span>
                                    <span className="text-green-500">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfilePage;