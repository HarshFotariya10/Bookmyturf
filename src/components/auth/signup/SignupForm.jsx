import React, { useState } from 'react';
import { ArrowRight, User, Mail, Lock, Phone, Shield, Users } from 'lucide-react';
import { setSignUpData as setSigndata } from '../../../slices/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp } from '../../../services/operations/auth';


// Mock toast function
const toast = {
  error: (message) => console.log('Error:', message),
  success: (message) => console.log('Success:', message)
};

// Mock InputField component
const InputField = ({ label, type, value, onChange, placeholder, icon, showPasswordToggle }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const IconComponent = {
    user: User,
    mail: Mail,
    lock: Lock,
    phone: Phone
  }[icon] || User;

  const inputType = showPasswordToggle && showPassword ? 'text' : type;

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <IconComponent className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
    </div>
  );
};

// Modern Role Selection Component
const RoleSelector = ({ value, onChange }) => {
  const roles = [
    {
      id: 'user',
      label: 'User',
      description: 'Can book sports slots and view schedules',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      selectedBg: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      id: 'admin',
      label: 'Admin',
      description: 'Can add locations and sports management',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      selectedBg: 'bg-gradient-to-r from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Account Type</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {roles.map((role) => {
          const IconComponent = role.icon;
          const isSelected = value === role.id;
          
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => onChange(role.id)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                isSelected 
                  ? `${role.selectedBg} text-white border-transparent shadow-lg` 
                  : `${role.bgColor} ${role.borderColor} hover:${role.borderColor} text-gray-700`
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-white'} transition-all duration-300`}>
                  <IconComponent className={`h-5 w-5 ${isSelected ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold text-sm ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {role.label}
                  </h3>
                  <p className={`text-xs mt-1 ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                    {role.description}
                  </p>
                </div>
              </div>
              
              {/* Selection indicator */}
              <div className={`absolute top-2 right-2 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                isSelected 
                  ? 'bg-white border-white' 
                  : 'border-gray-300'
              }`}>
                {isSelected && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const SignupForm = ({ isVisible = true }) => {
  // All signup data in one object including role
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPassword: '',
    role: 'USER' // Default role
  });

  // Mock dispatch and navigate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Generic handler to update any field in the object
  const handleInputChange = (field, value) => {
    setSignupData(prevData => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (signupData.password !== signupData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    if (!signupData.contactNumber) {
      toast.error('Please enter your contact number');
      return;
    }
    if (!signupData.role) {
      toast.error('Please select your account type');
      return;
    }

    // Clean signup data including role
    const cleanSignupData = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      email: signupData.email,
      contact: signupData.contactNumber,
      password: signupData.password,
      role: signupData.role.toUpperCase()
    };

    console.log('Signup Data with Role:', cleanSignupData);
    toast.success(`Account created successfully as ${signupData.role}!`);
    
    // Your existing dispatch logic
     dispatch(setSigndata(cleanSignupData));
     dispatch(sendOtp(cleanSignupData.email, navigate));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className={`bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-700 delay-900 max-w-md w-full ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Create Account</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4 sm:space-y-5">
          {/* Role Selection - First field for better UX */}
          <RoleSelector
            value={signupData.role}
            onChange={(value) => handleInputChange('role', value)}
          />

          {/* Name Fields Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="First Name"
              type="text"
              value={signupData.firstName}
              onChange={(value) => handleInputChange('firstName', value)}
              placeholder="Enter first name"
              icon="user"
            />
            <InputField
              label="Last Name"
              type="text"
              value={signupData.lastName}
              onChange={(value) => handleInputChange('lastName', value)}
              placeholder="Enter last name"
              icon="user"
            />
          </div>

          <InputField
            label="Email"
            type="email"
            value={signupData.email}
            onChange={(value) => handleInputChange('email', value)}
            placeholder="Enter your email"
            icon="mail"
          />

          <InputField
            label="Contact Number"
            type="tel"
            value={signupData.contactNumber}
            onChange={(value) => handleInputChange('contactNumber', value)}
            placeholder="Enter your contact number"
            icon="phone"
          />

          <InputField
            label="Password"
            type="password"
            value={signupData.password}
            onChange={(value) => handleInputChange('password', value)}
            placeholder="Create password"
            icon="lock"
            showPasswordToggle
          />

          <InputField
            label="Confirm Password"
            type="password"
            value={signupData.confirmPassword}
            onChange={(value) => handleInputChange('confirmPassword', value)}
            placeholder="Confirm your password"
            icon="lock"
            showPasswordToggle
          />

          {/* Enhanced Signup Button with role-based styling */}
          <button
            onClick={handleSubmit}
            className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base ${
              signupData.role === 'admin' 
                ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
            }`}
          >
            <span>Create {signupData.role === 'admin' ? 'Admin' : 'User'} Account</span>
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-4 sm:mt-6">
            Already have an account?{' '}
            <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
              Sign in
            </button>
          </p>
        </div>

        {/* Current selection indicator */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            Creating account as: <span className="font-semibold capitalize text-gray-800">{signupData.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
















// import React, { useState } from 'react';
// import { ArrowRight, User, Mail, Lock, Phone } from 'lucide-react';
// import toast from 'react-hot-toast';
// import { setSignUpData } from '../../../slices/auth';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { sendOtp } from '../../../services/operations/auth';

// // Mock InputField component
// const InputField = ({ label, type, value, onChange, placeholder, icon, showPasswordToggle }) => {
//   const [showPassword, setShowPassword] = useState(false);
  
//   const IconComponent = {
//     user: User,
//     mail: Mail,
//     lock: Lock,
//     phone: Phone
//   }[icon] || User;

//   const inputType = showPasswordToggle && showPassword ? 'text' : type;

//   return (
//     <div className="space-y-2">
//       <label className="block text-sm font-medium text-gray-700">{label}</label>
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//           <IconComponent className="h-5 w-5 text-gray-400" />
//         </div>
//         <input
//           type={inputType}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           placeholder={placeholder}
//           className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
//         />
//         {showPasswordToggle && (
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute inset-y-0 right-0 pr-3 flex items-center"
//           >
//             {showPassword ? '🙈' : '👁️'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const SignupForm = ({ isVisible = true }) => {
//   // All signup data in one object
//   const [signupData, setSignupData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     contactNumber: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // Generic handler to update any field in the object
//   const handleInputChange = (field, value) => {
//     setSignupData(prevData => ({
//       ...prevData,
//       [field]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validation
//     if (signupData.password !== signupData.confirmPassword) {
//       toast.error('Passwords do not match!');
//       return;
//     }
//     if (!signupData.contactNumber) {
//       toast.error('Please enter your contact number');
//       return;
//     }

//     // You can also create a clean object without confirmPassword if needed
//     const cleanSignupData = {
//       firstName: signupData.firstName,
//       lastName: signupData.lastName,
//       email: signupData.email,
//       contact: signupData.contactNumber,
//       password: signupData.password
//     };
//     dispatch(setSignUpData(cleanSignupData));
// //     //send otp
//     dispatch(sendOtp(cleanSignupData.email,navigate));
//     toast.success("submited wait for OTP verification");
    
//      // console.log('Clean Signup Data (for API):', cleanSignupData);
//     // console.log('Complete Signup Data:', cleanSignupData);
//     // alert('Account created successfully! Check console for data.');
//   };

//   //     // Validation
// //     if (signupData.password !== signupData.confirmPassword) {
// //       toast.error('Passwords do not match!');
// //       return;
// //     }
// //     if (!signupData.acceptTerms) {
// //       toast.error('Please accept the terms and conditions');
// //       return;
// //     }

// //     // Log complete signup data object
// //     // console.log('Complete Signup Data:', signupData);





// //     // You can also create a clean object without confirmPassword if needed
// //     const cleanSignupData = {
// //       firstName: signupData.firstName,
// //       lastName: signupData.lastName,
// //       email: signupData.email,
// //       password: signupData.password,
// //       acceptTerms: signupData.acceptTerms
// //     };
    
// //     // Dispatch the signup data to the reducer
// //     dispatch(setSignUpData(cleanSignupData));
// //     //send otp
// //     dispatch(sendOtp(cleanSignupData.email,navigate));
// //     toast.success("submited wait for OTP verification");

// //     // console.log('Clean Signup Data (for API):', cleanSignupData);
    
// //     // Add your signup logic here
// //     // Example: sendSignupData(cleanSignupData);
// //   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
//       <div className={`bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-700 delay-900 max-w-md w-full ${
//         isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//       }`}>
//         <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Create Account</h2>
        
//         <div className="space-y-4 sm:space-y-5">
//           {/* Name Fields Row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <InputField
//               label="First Name"
//               type="text"
//               value={signupData.firstName}
//               onChange={(value) => handleInputChange('firstName', value)}
//               placeholder="Enter first name"
//               icon="user"
//             />
//             <InputField
//               label="Last Name"
//               type="text"
//               value={signupData.lastName}
//               onChange={(value) => handleInputChange('lastName', value)}
//               placeholder="Enter last name"
//               icon="user"
//             />
//           </div>

//           <InputField
//             label="Email"
//             type="email"
//             value={signupData.email}
//             onChange={(value) => handleInputChange('email', value)}
//             placeholder="Enter your email"
//             icon="mail"
//           />

//           <InputField
//             label="Contact Number"
//             type="tel"
//             value={signupData.contactNumber}
//             onChange={(value) => handleInputChange('contactNumber', value)}
//             placeholder="Enter your contact number"
//             icon="phone"
//           />

//           <InputField
//             label="Password"
//             type="password"
//             value={signupData.password}
//             onChange={(value) => handleInputChange('password', value)}
//             placeholder="Create password"
//             icon="lock"
//             showPasswordToggle
//           />

//           <InputField
//             label="Confirm Password"
//             type="password"
//             value={signupData.confirmPassword}
//             onChange={(value) => handleInputChange('confirmPassword', value)}
//             placeholder="Confirm your password"
//             icon="lock"
//             showPasswordToggle
//           />

//           {/* Signup Button */}
//           <button
//             onClick={handleSubmit}
//             className="w-full py-3 sm:py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700"
//           >
//             <span>Create Account</span>
//             <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform group-hover:translate-x-1" />
//           </button>

//           {/* Login Link */}
//           <p className="text-center text-sm text-gray-600 mt-4 sm:mt-6">
//             Already have an account?{' '}
//             <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
//               Sign in
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;



// // import React, { useState } from 'react';
// // import InputField from './InputField';
// // import { ArrowRight } from 'lucide-react';
// // import toast from 'react-hot-toast';
// // import { useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { setSignUpData } from '../../../slices/auth';
// // import { sendOtp } from '../../../services/operations/auth';


// // const SignupForm = ({ isVisible }) => {
// //   const dispatch  = useDispatch();
// //   let navigate = useNavigate();
// //   // All signup data in one object
// //   const [signupData, setSignupData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     acceptTerms: false
// //   });

// //   // Generic handler to update any field in the object
// //   const handleInputChange = (field, value) => {
// //     setSignupData(prevData => ({
// //       ...prevData,
// //       [field]: value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Validation
// //     if (signupData.password !== signupData.confirmPassword) {
// //       toast.error('Passwords do not match!');
// //       return;
// //     }
// //     if (!signupData.acceptTerms) {
// //       toast.error('Please accept the terms and conditions');
// //       return;
// //     }

// //     // Log complete signup data object
// //     // console.log('Complete Signup Data:', signupData);





// //     // You can also create a clean object without confirmPassword if needed
// //     const cleanSignupData = {
// //       firstName: signupData.firstName,
// //       lastName: signupData.lastName,
// //       email: signupData.email,
// //       password: signupData.password,
// //       acceptTerms: signupData.acceptTerms
// //     };
    
// //     // Dispatch the signup data to the reducer
// //     dispatch(setSignUpData(cleanSignupData));
// //     //send otp
// //     dispatch(sendOtp(cleanSignupData.email,navigate));
// //     toast.success("submited wait for OTP verification");

// //     // console.log('Clean Signup Data (for API):', cleanSignupData);
    
// //     // Add your signup logic here
// //     // Example: sendSignupData(cleanSignupData);
// //   };

// //   return (
// //     <div className={`bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 transition-all duration-700 delay-900 ${
// //       isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
// //     }`}>
// //       <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">Create Account</h2>
      
// //       <div className="space-y-4 sm:space-y-5">
// //         {/* Name Fields Row */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           <InputField
// //             label="First Name"
// //             type="text"
// //             value={signupData.firstName}
// //             onChange={(value) => handleInputChange('firstName', value)}
// //             placeholder="Enter first name"
// //             icon="user"
// //           />
// //           <InputField
// //             label="Last Name"
// //             type="text"
// //             value={signupData.lastName}
// //             onChange={(value) => handleInputChange('lastName', value)}
// //             placeholder="Enter last name"
// //             icon="user"
// //           />
// //         </div>

// //         <InputField
// //           label="Email"
// //           type="email"
// //           value={signupData.email}
// //           onChange={(value) => handleInputChange('email', value)}
// //           placeholder="Enter your email"
// //           icon="mail"
// //         />

// //         <InputField
// //           label="Password"
// //           type="password"
// //           value={signupData.password}
// //           onChange={(value) => handleInputChange('password', value)}
// //           placeholder="Create password"
// //           icon="lock"
// //           showPasswordToggle
// //         />

// //         <InputField
// //           label="Confirm Password"
// //           type="password"
// //           value={signupData.confirmPassword}
// //           onChange={(value) => handleInputChange('confirmPassword', value)}
// //           placeholder="Confirm your password"
// //           icon="lock"
// //           showPasswordToggle
// //         />

// //         {/* Terms and Conditions */}
// //         <div className="flex items-start space-x-2">
// //           <input 
// //             type="checkbox" 
// //             id="terms"
// //             checked={signupData.acceptTerms}
// //             onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
// //             className="mt-1 rounded border-gray-300 text-green-500 focus:ring-green-500" 
// //           />
// //           <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
// //             I agree to the{' '}
// //             <button type="button" className="text-green-600 hover:text-green-700 underline">
// //               Terms of Service
// //             </button>
// //             {' '}and{' '}
// //             <button type="button" className="text-green-600 hover:text-green-700 underline">
// //               Privacy Policy
// //             </button>
// //           </label>
// //         </div>

// //         {/* Signup Button */}
// //         <button
// //           onClick={handleSubmit}
// //           disabled={!signupData.acceptTerms}
// //           className={`w-full py-3 sm:py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group text-sm sm:text-base ${
// //             signupData.acceptTerms 
// //               ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
// //               : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:scale-100'
// //           }`}
// //         >
// //           <span>Create Account</span>
// //           <ArrowRight className={`ml-2 w-4 sm:w-5 h-4 sm:h-5 transition-transform ${signupData.acceptTerms ? 'group-hover:translate-x-1' : ''}`} />
// //         </button>

// //         {/* Login Link */}
// //         <p className="text-center text-sm text-gray-600 mt-4 sm:mt-6">
// //           Already have an account?{' '}
// //           <button className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
// //             Sign in
// //           </button>
// //         </p>
// //       </div>

// //       {/* Debug: Show current data object (remove in production) */}
// //       {/* {process.env.NODE_ENV === 'development' && (
// //         <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs">
// //           <strong>Debug - Current Data:</strong>
// //           <pre>{JSON.stringify(signupData, null, 2)}</pre>
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // };

// // export default SignupForm;