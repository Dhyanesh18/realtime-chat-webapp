import { useEffect } from "react";
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

import { Loader } from "lucide-react";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/settings" element={<SettingsPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </div>
  )
}

export default App;