
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import Investment from "./pages/Invest";
import SignupPage from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const Wallet = () => <div style={{ padding: 20 }}>Wallet page</div>;
const Donate = () => <div style={{ padding: 20 }}>Donate page</div>;
const GetStarted = () => <div style={{ padding: 20 }}>Get Started</div>;
const LearnMore = () => <div style={{ padding: 20 }}>Learn More</div>;

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/donate" element={<Donate />} />
          <Route
            path="/Invest"
            element={
              <PrivateRoute>
                <Investment />
              </PrivateRoute>
            }
          />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMore />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}