import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {supabase} from "../../lib/supabase.js";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "../css/signup.css";
import { app } from '../../lib/firebase.js';

function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex', color: '#fff' }}>
      <CircularProgress sx={{ color: 'white' }} size={25} />
    </Box>
  );
}

export default function Signup() {
  const navigate = useNavigate();
  const auth = getAuth(app); // Firebase Authentication instance
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
      await createUserWithEmailAndPassword(auth, email, password);
      createUserColumn()
      createIdentityColumn()
      navigate('/home'); 
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError("Email already exists.");
      } else if (err.code === 'auth/weak-password') {
        setError("Password is too weak.");
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const createUserColumn = async () => {
    const { data, error } = await supabase
      .from('user')
      .insert([
        { email: email, password: password } 
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  };

  const createIdentityColumn = async () => {
    const { data, error } = await supabase
      .from('identity')
      .insert([
        { email: email } 
      ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
    }
  }
  return (
    <div className='signup'>
      <div className='signup-content'>
        <div className='signup-content-img'>
          <img src="https://i.ibb.co/vDZcMPF/photo-1574182245530-967d9b3831af.jpg" alt="Signup" />
        </div>
        <div className='signup-content-title'>YOUR ROUVER</div>
        <div className='signup-content-des'>Here, we create what you can imagine [hello you]</div>
        <div className='signup-content-inputs'>
          <div className='signup-content-inputs-input-email'>
            <div className='signup-content-inputs-input-title'>Email</div>
            <input
              className={`${error ? "error" : ""}`}
              type='email'
              placeholder='Enter your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='signup-content-inputs-input-error'>
              {error && error.includes("Email") ? error : ""}
            </div>
          </div>
          <div className='signup-content-inputs-input-password'>
            <div className='signup-content-inputs-input-title'>Password</div>
            <input
              type='password'
              placeholder='Create a new password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='signup-content-inputs-input-error'>
              {error && error.includes("password") ? error : ""}
            </div>
          </div>
        </div>
        <div className='signup-content-button' onClick={handleSubmit}>
          {loading ? <CircularIndeterminate /> : "Create Account"}
        </div>
        <div className="signup-content-login">
          Already have an account? <a onClick={() => navigate("/login")}>Login</a>
        </div>
        <div className='signup-content-rights'>
          <p>&copy; 2025 ROUVER. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}