import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle , faFacebook} from "@fortawesome/free-brands-svg-icons";
import './signup.css'
function Signup(){
  const navigate = useNavigate();
  return(
    <>
      <div className='signup'>
        <div className='signup-content'>
          <div className='signup-content-image'>
            <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          </div>
          <div className='signup-content-text'>
            <div className='signup-content-text-title'>YOUR Rouver</div>
            <div className='signup-content-text-slogan'>Here, we create what you can <strong>imagine</strong> (Hello, you)</div>
          </div>
          <div className='signup-content-inputs'>
            <div className='signup-content-inputs-email'>
              <div className="signup-content-inputs-email-word">Email</div>
              <input type='email' placeholder='Example@email.com' className="signup-content-inputs-email-input"/>
            </div>
            <div className='signup-content-inputs-password'>
              <div className="signup-content-inputs-password-word">Password</div>
              <input type='password' placeholder='Create a new password' className="signup-content-inputs-password-input"/>
            </div>
          </div>
          <div className='signup-content-forgetpassword'>Forget Password?</div>
          <div className='signup-content-submit'>Sign-Up</div>
          <div className='signup-content-or'>or sign-up with</div>
          <div className="signup-content-oauth">
            {/* Google Sign-Up Button */}
            <div className="signup-content-google">
              <img
                src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                alt="Google Logo"
                style={{ width: '20px', height: '20px', marginRight: '10px' }}
              />
              <div className="signup-content-text">Google</div>
            </div>

            {/* Facebook Sign-Up Button */}
            <div className="signup-content-facebook">
              <FontAwesomeIcon icon={faFacebook} className="signup-content-facebook-icon" />
              <div className="signup-content-text">Facebook</div>
            </div>
          </div>
          <div className='signup-content-haveaccount'>Already have an account? <a onClick={()=>navigate("/login")}>Login</a></div>
          <div className="signup-content-rights">
            © 2025 ROUVER, All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}
export default Signup;