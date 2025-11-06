import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendOtp, verifyEmailSignup } from '../services/operations/auth';

const VerifyEmail = () => {
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isResending, setIsResending] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        setIsVisible(true);
        startCountdown();
    }, []);

    const startCountdown = () => {
        setCountdown(60);
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleChange = (index, value) => {
        if (value.length > 1) return;

        const newOtp = otp.split('');
        while (newOtp.length < 4) newOtp.push('');
        newOtp[index] = value;
        setOtp(newOtp.join(''));

        // Auto focus next input
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index, e) => {
        const otpArray = otp.split('');
        if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signupData } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!signupData) {
            navigate('/login');
        }
    })


    const handleVerifyOtp = async () => {
        if (otp.length !== 4) return;

        const { firstName, lastName, email, password,contact,role } = signupData;
        setIsLoading(true);
        toast.success("OTP Submited...");
        dispatch(verifyEmailSignup(firstName, lastName, email,contact, password, otp,role, navigate));
        setIsLoading(false);

    };

    const handleResendOtp = async () => {
        if (countdown > 0) return;

        setIsResending(true);
        dispatch(sendOtp(signupData.email, navigate));
        setIsResending(false);
        startCountdown();
        // console.log('OTP Resent');

    };

    const handleBackToSignup = () => {
        navigate('/signup');
    };

    const isComplete = otp.length === 4;

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden m-0">
            {/* Animated Sports Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 text-white/10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                </div>

                <div className="absolute top-32 right-20 text-white/10 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                </div>

                <div className="absolute bottom-20 left-20 text-white/10 animate-spin" style={{ animationDuration: '8s' }}>
                    <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                        <path d="M12 2v10l8-8" />
                    </svg>
                </div>

                <div className="absolute top-1/2 right-10 text-white/10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4L18.04 8.87c.38.76.68 1.58.85 2.44l.2-.31zm-4.7-9.05l1.37 2.32c.78-.47 1.65-.78 2.54-.91L15.92 2c-1.12.2-2.19.59-3.53 1.95zm7.16 7.6l-2.32-1.37c.47-.78.78-1.65.91-2.54L19.5 6c-.2 1.12-.59 2.19-1.95 3.55zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    </svg>
                </div>

                <div className="absolute bottom-10 right-1/3 text-white/10 animate-pulse" style={{ animationDelay: '3s' }}>
                    <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
            </div>

            {/* Main Card */}
            <div className={`bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}>

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
                    <p className="text-gray-600">Enter the 4-digit code sent to your email</p>
                </div>

                {/* OTP Input */}
                <div className="flex justify-center space-x-3 mb-8">
                    {[0, 1, 2, 3].map((index) => {
                        const otpArray = otp.split('');
                        const digit = otpArray[index] || '';

                        return (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className={`w-14 h-14 text-center text-xl font-bold border-2 rounded-2xl focus:outline-none transition-all duration-300 ${digit
                                        ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
                                        : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
                                    } focus:border-blue-500 focus:shadow-lg focus:scale-105`}
                            />
                        );
                    })}
                </div>

                {/* Verify Button */}
                <button
                    onClick={handleVerifyOtp}
                    disabled={!isComplete || isLoading}
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 mb-6 ${isComplete && !isLoading
                            ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transform'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Verifying...
                        </div>
                    ) : (
                        'Verify OTP'
                    )}
                </button>

                {/* Resend Button */}
                <div className="text-center">
                    <p className="text-gray-600 mb-3">Didn't receive the code?</p>
                    <button
                        onClick={handleResendOtp}
                        disabled={countdown > 0 || isResending}
                        className={`font-semibold transition-all duration-300 ${countdown > 0 || isResending
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-blue-500 hover:text-blue-700 hover:scale-105 transform'
                            }`}
                    >
                        {isResending ? (
                            <span className="flex items-center justify-center">
                                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
                                Sending...
                            </span>
                        ) : countdown > 0 ? (
                            `Resend in ${countdown}s`
                        ) : (
                            'Resend OTP'
                        )}
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <button
                        onClick={handleBackToSignup}
                        className="text-sm text-blue-500 hover:text-blue-700 font-medium mb-3 transition-colors duration-300 hover:underline"
                    >
                        ← Back to Sign Up
                    </button>
                    <p className="text-sm text-gray-500">
                        Secured by <span className="font-semibold text-green-600">BookMyTurf</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;



// import React, { useState, useRef, useEffect } from 'react';
// import toast from 'react-hot-toast';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { sendOtp, verifyEmailSignup } from '../services/operations/auth';

// const VerifyEmail = () => {
//     const [otp, setOtp] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isResending, setIsResending] = useState(false);
//     const [countdown, setCountdown] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);
//     const inputRefs = useRef([]);

//     useEffect(() => {
//         setIsVisible(true);
//         startCountdown();
//     }, []);

//     const startCountdown = () => {
//         setCountdown(60);
//         const timer = setInterval(() => {
//             setCountdown((prev) => {
//                 if (prev <= 1) {
//                     clearInterval(timer);
//                     return 0;
//                 }
//                 return prev - 1;
//             });
//         }, 1000);
//     };

//     const handleChange = (index, value) => {
//         if (value.length > 1) return;

//         const newOtp = otp.split('');
//         while (newOtp.length < 6) newOtp.push('');
//         newOtp[index] = value;
//         setOtp(newOtp.join(''));

//         // Auto focus next input
//         if (value && index < 5) {
//             inputRefs.current[index + 1]?.focus();
//         }
//     };

//     const handleKeyDown = (index, e) => {
//         const otpArray = otp.split('');
//         if (e.key === 'Backspace' && !otpArray[index] && index > 0) {
//             inputRefs.current[index - 1]?.focus();
//         }
//     };

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { signupData } = useSelector((state) => state.auth);

//     useEffect(() => {
//         if (!signupData) {
//             navigate('/login');
//         }
//     })


//     const handleVerifyOtp = async () => {
//         if (otp.length !== 6) return;

//         const { firstName, lastName, email, password } = signupData;
//         setIsLoading(true);
//         toast.success("OTP Submited...");
//         dispatch(verifyEmailSignup(firstName, lastName, email, password, otp, navigate));
//         setIsLoading(false);

//     };

//     const handleResendOtp = async () => {
//         if (countdown > 0) return;

//         setIsResending(true);
//         dispatch(sendOtp(signupData.email, navigate));
//         setIsResending(false);
//         startCountdown();
//         // console.log('OTP Resent');

//     };

//     const handleBackToSignup = () => {
//         navigate('/signup');
//     };

//     const isComplete = otp.length === 6;

//     return (
//         <div className="min-h-screen w-full bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden m-0">
//             {/* Animated Sports Icons Background */}
//             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute top-10 left-10 text-white/10 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
//                     <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
//                     </svg>
//                 </div>

//                 <div className="absolute top-32 right-20 text-white/10 animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}>
//                     <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                 </div>

//                 <div className="absolute bottom-20 left-20 text-white/10 animate-spin" style={{ animationDuration: '8s' }}>
//                     <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
//                         <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
//                         <path d="M12 2v10l8-8" />
//                     </svg>
//                 </div>

//                 <div className="absolute top-1/2 right-10 text-white/10 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>
//                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M17.09 11h4.86c-.16-1.61-.71-3.11-1.54-4.4L18.04 8.87c.38.76.68 1.58.85 2.44l.2-.31zm-4.7-9.05l1.37 2.32c.78-.47 1.65-.78 2.54-.91L15.92 2c-1.12.2-2.19.59-3.53 1.95zm7.16 7.6l-2.32-1.37c.47-.78.78-1.65.91-2.54L19.5 6c-.2 1.12-.59 2.19-1.95 3.55zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
//                     </svg>
//                 </div>

//                 <div className="absolute bottom-10 right-1/3 text-white/10 animate-pulse" style={{ animationDelay: '3s' }}>
//                     <svg className="w-18 h-18" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                     </svg>
//                 </div>
//             </div>

//             {/* Main Card */}
//             <div className={`bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
//                 }`}>

//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
//                         <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                         </svg>
//                     </div>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Email</h2>
//                     <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
//                 </div>

//                 {/* OTP Input */}
//                 <div className="flex justify-center space-x-3 mb-8">
//                     {[0, 1, 2, 3, 4, 5].map((index) => {
//                         const otpArray = otp.split('');
//                         const digit = otpArray[index] || '';

//                         return (
//                             <input
//                                 key={index}
//                                 ref={(el) => (inputRefs.current[index] = el)}
//                                 type="text"
//                                 inputMode="numeric"
//                                 maxLength={1}
//                                 value={digit}
//                                 onChange={(e) => handleChange(index, e.target.value.replace(/\D/g, ''))}
//                                 onKeyDown={(e) => handleKeyDown(index, e)}
//                                 className={`w-14 h-14 text-center text-xl font-bold border-2 rounded-2xl focus:outline-none transition-all duration-300 ${digit
//                                         ? 'border-green-500 bg-green-50 text-green-700 shadow-lg transform scale-105'
//                                         : 'border-gray-300 bg-white text-gray-700 hover:border-blue-400'
//                                     } focus:border-blue-500 focus:shadow-lg focus:scale-105`}
//                             />
//                         );
//                     })}
//                 </div>

//                 {/* Verify Button */}
//                 <button
//                     onClick={handleVerifyOtp}
//                     disabled={!isComplete || isLoading}
//                     className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 mb-6 ${isComplete && !isLoading
//                             ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transform'
//                             : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                         }`}
//                 >
//                     {isLoading ? (
//                         <div className="flex items-center justify-center">
//                             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                             Verifying...
//                         </div>
//                     ) : (
//                         'Verify OTP'
//                     )}
//                 </button>

//                 {/* Resend Button */}
//                 <div className="text-center">
//                     <p className="text-gray-600 mb-3">Didn't receive the code?</p>
//                     <button
//                         onClick={handleResendOtp}
//                         disabled={countdown > 0 || isResending}
//                         className={`font-semibold transition-all duration-300 ${countdown > 0 || isResending
//                                 ? 'text-gray-400 cursor-not-allowed'
//                                 : 'text-blue-500 hover:text-blue-700 hover:scale-105 transform'
//                             }`}
//                     >
//                         {isResending ? (
//                             <span className="flex items-center justify-center">
//                                 <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-2"></div>
//                                 Sending...
//                             </span>
//                         ) : countdown > 0 ? (
//                             `Resend in ${countdown}s`
//                         ) : (
//                             'Resend OTP'
//                         )}
//                     </button>
//                 </div>

//                 {/* Footer */}
//                 <div className="mt-8 pt-6 border-t border-gray-200 text-center">
//                     <button
//                         onClick={handleBackToSignup}
//                         className="text-sm text-blue-500 hover:text-blue-700 font-medium mb-3 transition-colors duration-300 hover:underline"
//                     >
//                         ← Back to Sign Up
//                     </button>
//                     <p className="text-sm text-gray-500">
//                         Secured by <span className="font-semibold text-green-600">BookMyTurf</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VerifyEmail;