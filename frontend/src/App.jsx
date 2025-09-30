import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { Routes, Route } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { userAuth } = useAuthStore()
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