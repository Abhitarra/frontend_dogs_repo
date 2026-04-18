import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage";
import NavigationBar from "./components/Navigate";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/DashboardPage";
import ForgotPassword from "./Pages/ForgetPasswordPage";
import ResetPassword from "./Pages/ResetPassword";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/navbar" element={<NavigationBar />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;