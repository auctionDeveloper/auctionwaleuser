import { useState } from "react";

export default function OtpModal({ onClose }: { onClose: () => void }) {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpSubmit = () => {
    if (otp !== "123456") {
      setError("Invalid OTP. Please try again.");
      return;
    }

    const tempData = localStorage.getItem("tempSignup");
    if (tempData) {
      localStorage.setItem("signupProfile", tempData);
      localStorage.removeItem("tempSignup");

      // ✅ Ready for login and backend sync
      localStorage.setItem("readyToLogin", "true");
      localStorage.setItem("readyForBackendSync", "true");
    }

    onClose(); // Close OTP Modal
    window.location.reload(); // reload to trigger login modal from Navbar
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-3xl leading-none p-1"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-[#0B3448] text-center mb-1">OTP Verification</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Enter the 6-digit OTP sent to your email or phone
        </p>

        {error && <p className="text-sm text-red-600 text-center mb-3">{error}</p>}

        <input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
        />

        <button
          onClick={handleOtpSubmit}
          className="w-full mt-4 bg-[#ED1215] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
