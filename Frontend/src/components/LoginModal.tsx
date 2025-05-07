import { Link } from "react-router-dom";

export default function LoginModal({
  onClose,
  switchToSignup,
}: {
  onClose: () => void;
  switchToSignup: () => void;
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
        <h2 className="text-2xl font-bold text-[#0B3448] text-center mb-1">Welcome to AuctionWale</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Login to your account</p>

        <form className="space-y-4">
          <input type="text" placeholder="Username or Email"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
          <input type="password" placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]" />
          <button type="submit"
            className="w-full bg-[#ED1215] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200">
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <button onClick={switchToSignup} className="hover:underline text-[#0B3448]">New user? Sign up</button>
          <Link to="/forgot-password" className="hover:underline text-[#0B3448]">Forgot password?</Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Or continue with</p>
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
