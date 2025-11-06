import React, { useState } from 'react';
import InputField from './InputField';
import { ArrowRight } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../../services/operations/auth';

const LoginForm = ({ isVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(email,password,navigate));       
    // console.log('Login attempt:', { email, password });
    // Add your login logic here
  };

  return (
    <div className={`bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-700 delay-900 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
    }`}>
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Welcome Back</h2>
      
      <div className="space-y-4 sm:space-y-6">
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          icon="mail"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          icon="lock"
          showPasswordToggle
        />

        {/* Remember Me and Forgot Password */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <label className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-green-500 focus:ring-green-500" />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-sm text-green-600 hover:text-green-700 transition-colors text-left sm:text-right">
            Forgot password?
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 sm:py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base"
        >
          <span>Sign In</span>
          <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-4 sm:mt-6">
          Don't have an account?{' '}
          <button className="text-green-600 hover:text-green-700 font-semibold transition-colors">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
