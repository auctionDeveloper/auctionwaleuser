import { useState } from "react";

export default function SignupModal({
  onClose,
  switchToLogin,
  openOtpModal,
}: {
  onClose: () => void;
  switchToLogin: () => void;
  openOtpModal: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[0-9]{10}$/.test(phone);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    if (!validateEmail(email)) return setError("Invalid email format.");
    if (!validatePhone(phone)) return setError("Phone must be 10 digits.");
    if (password !== confirmPassword) return setError("Passwords do not match.");

    // ✅ Check for existing user
    const existing = localStorage.getItem("signupProfile");
    if (existing) {
      const parsed = JSON.parse(existing);
      if (parsed.email === email || parsed.phone === phone) {
        return setError("User already exists. Please login.");
      }
    }

    // Save form data temporarily in localStorage (for OTP step)
    localStorage.setItem("tempSignup", JSON.stringify({ name, email, phone }));
    localStorage.setItem("signupPassword", password);

    onClose();       // Close Signup Modal
    openOtpModal();  // Open OTP Modal
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
        <h2 className="text-2xl font-bold text-[#0B3448] text-center mb-1">Create Account</h2>
        <p className="text-sm text-center text-gray-600 mb-6">Sign up to AuctionWale</p>

        {error && <p className="text-sm text-red-600 text-center mb-2">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#ED1215]"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#ED1215] text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={switchToLogin}
            className="text-[#0B3448] font-semibold hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
