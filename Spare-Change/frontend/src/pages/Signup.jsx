import React, { useState } from 'react';
import { DollarSign, Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Signup successful:', formData);
      alert('Signup successful! Redirecting to login...');
    }, 2000);
  };

  return (
    <div className="login-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        .login-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .login-container {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 450px;
          position: relative;
        }

        .back-button {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .back-button:hover {
          color: #2563eb;
        }

        .login-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.8rem;
          font-weight: 700;
          color: #2563eb;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .login-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 0.5rem;
        }

        .login-subtitle {
          color: #64748b;
          font-size: 1rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .input-container {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem;
          padding-left: 3rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          background: #f8fafc;
        }

        .form-input:focus {
          outline: none;
          border-color: #2563eb;
          background: white;
        }

        .form-input.error {
          border-color: #ef4444;
          background: #fef2f2;
        }

        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }

        .password-toggle {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
        }

        .password-toggle:hover {
          color: #2563eb;
        }

        .error-message {
          color: #ef4444;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        .forgot-password {
          text-align: right;
          margin-top: -0.5rem;
        }

        .forgot-password a {
          color: #2563eb;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        .login-button {
          background: #2563eb;
          color: white;
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.1rem;
          cursor: pointer;
          margin-top: 1rem;
        }

        .login-button:hover:not(:disabled) {
          background: #1d4ed8;
        }

        .login-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 2rem 0;
          color: #9ca3af;
          font-size: 0.9rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e2e8f0;
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-login {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
        }

        .social-button:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .signup-link {
          text-align: center;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
        }

        .signup-link a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        .signup-link a:hover {
          text-decoration: underline;
        }

        .security-note {
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #0369a1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        /* Loading spinner */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff40;
          border-top: 2px solid #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 0.5rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .login-page {
            padding: 1rem;
          }

          .login-container {
            padding: 2rem 1.5rem;
          }

          .login-title {
            font-size: 1.5rem;
          }

          .back-button {
            top: 1rem;
            left: 1rem;
          }
        }
      `}</style>

      <div className="login-container">
        <button className="back-button" onClick={() => navigate("/")}>
          <ArrowLeft size={16} />
          Back to Home
        </button>

        <div className="login-header">
          <div className="logo">
            <DollarSign size={28} />
            SpareChange
          </div>
          <h1 className="login-title">Create Account</h1>
          <p className="login-subtitle">
            Join us to start managing your spare change impact
          </p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-container">
              <User className="input-icon" size={18} />
              <input
                type="text"
                name="name"
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-container">
              <Mail className="input-icon" size={18} />
              <input
                type="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-container">
              <Lock className="input-icon" size={18} />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-container">
              <Lock className="input-icon" size={18} />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>

          <button
            type="button"
            className="login-button"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading && <div className="spinner"></div>}
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </div>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        <div className="social-login">
          <a href="/auth/google" className="social-button">Continue with Google</a>
          <a href="/auth/facebook" className="social-button">Continue with Facebook</a>
        </div>

        <div className="signup-link">
            Already have an account? <Link to="/Login">Sign in here</Link>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;