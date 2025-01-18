import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../css/login.css";

// مكون التحميل
function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex", color: "#fff" }}>
      <CircularProgress sx={{ color: "white" }} size={25} />
    </Box>
  );
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    if (!email || !password) {
      setError("Email and password are required.");
      setLoading(false);
      return;
    }

    try {
      const auth = getAuth(); // الحصول على كائن المصادقة من Firebase
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); // التوجيه إلى الصفحة الرئيسية عند نجاح تسجيل الدخول
    } catch (err) {
      console.error("Error logging in:", err.message);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-content-img">
          <img src="https://i.ibb.co/vDZcMPF/photo-1574182245530-967d9b3831af.jpg" alt="Login" />
        </div>
        <div className="login-content-title">Welcome Back</div>
        <div className="login-content-des">
          Here, we create what you can imagine [hello you]
        </div>
        <div className="login-content-inputs">
          <div className="login-content-inputs-input-email">
            <div className="login-content-inputs-input-title">Email</div>
            <input
              className={`${error ? "error" : ""}`}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <div className="login-content-inputs-input-error">
              {error && error.includes("email") ? error : ""}
            </div>
          </div>
          <div className="login-content-inputs-input-password">
            <div className="login-content-inputs-input-title">Password</div>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="login-content-inputs-input-error">
              {error && error.includes("password") ? error : ""}
            </div>
          </div>
        </div>
        <div className="login-content-button" onClick={handleSubmit}>
          {loading ? <CircularIndeterminate /> : "Login"}
        </div>
        <div className="login-content-login">
          Don't have an account?{" "}
          <a onClick={() => navigate("/signup")}>Sign Up</a>
        </div>
        <div className="login-content-rights">
          <p>&copy; 2025 ROUVER. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}