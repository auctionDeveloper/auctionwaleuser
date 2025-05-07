export default function SignupModal({
    onClose,
    switchToLogin,
  }: {
    onClose: () => void;
    switchToLogin: () => void;
  }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-3xl leading-none p-1"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-[#0B3448] text-center mb-1">Create Account</h2>
          <p className="text-sm text-center text-gray-600 mb-6">Sign up to AuctionWale</p>
  
          <form className="space-y-4">
            <input type="text" placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
            <input type="email" placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
            <input type="tel" placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
            <input type="password" placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
            <input type="password" placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
  
            <button type="submit"
              className="w-full bg-[#ED1215] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200">
              Sign Up
            </button>
          </form>
  
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <button onClick={switchToLogin} className="text-[#0B3448] font-semibold hover:underline">
              Login here
            </button>
          </p>
        </div>
      </div>
    );
  }
  