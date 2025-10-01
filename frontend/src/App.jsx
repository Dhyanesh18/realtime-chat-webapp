import { useEffect } from "react";
// import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";
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
      {/* <Navbar /> */}
      <Toaster />
      <Routes>
        <Route path="/" element={authUser ? <Homepage /> : <Navigate to="/login" replace />}/>
        <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to="/" replace/>}/>
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />}/>
        <Route path="/profile" element={authUser ? <ProfilePage />:<Navigate to="/login" replace />}/>
      </Routes>
    </div>
  )
}

export default App;