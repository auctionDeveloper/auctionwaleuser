import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '/src/assets/logo.svg';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import OtpModal from './OtpModal';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    const status = localStorage.getItem("isLoggedIn");
    const readyToLogin = localStorage.getItem("readyToLogin");

    if (status === "true" && user) {
      setLoggedInUser(user);
    }

    if (readyToLogin === "true") {
      setShowLoginModal(true);
      localStorage.removeItem("readyToLogin");
    }
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  const handleSwitchToSignup = () => {
    setShowLoginModal(false);
    setTimeout(() => setShowSignupModal(true), 100);
  };

  const handleSwitchToLogin = () => {
    setShowSignupModal(false);
    setTimeout(() => setShowLoginModal(true), 100);
  };

  const handleSignupComplete = () => {
    setShowSignupModal(false);
    setTimeout(() => setShowOtpModal(true), 100);
  };

  return (
    <>
      <div className="w-full sticky top-0 z-50">
        {/* Top Header */}
        <div className="w-full bg-white flex flex-wrap justify-between items-center p-4 shadow border-b h-auto sm:h-[100px] gap-y-2">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
            <div className="flex flex-col leading-tight w-fit">
              <h2 className="text-2xl sm:text-2xl font-extrabold tracking-[0.2em] text-[#0B3448]">
                Auctionwale
              </h2>
              <p className="text-sm sm:text-md uppercase tracking-smallest font-medium text-[#930000]">
                Expert for Bank Auctions
              </p>
            </div>
          </div>

          {/* Desktop Login / Logout + Icon */}
          <div className="hidden md:flex items-center gap-4">
            <FavoriteBorderOutlinedIcon className="text-gray-700 cursor-pointer text-2xl" />
            {loggedInUser ? (
              <>
                <span className="text-[#0B3448] font-medium">Hi, {loggedInUser}</span>
                <button
                  className="px-4 py-2 text-sm text-gray-700 hover:text-red-600"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="px-5 py-2 border border-gray-300 text-sm rounded-full hover:bg-[#0D364A] hover:text-white transition duration-200"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Navbar (Red Bar) */}
        <div className="bg-[#930000] text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={toggleSidebar}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm font-medium w-full justify-center">
              <li className="cursor-pointer hover:underline">View Auction</li>
              <li className="cursor-pointer hover:underline">Budget Auction</li>
              <li className="cursor-pointer hover:underline">Area Auction</li>
              <li className="cursor-pointer hover:underline">Expert Advice</li>
              <li className="cursor-pointer hover:underline">Feature</li>
            </ul>

            {/* Mobile Login/Logout + Icon */}
            <div className="flex items-center gap-3 md:hidden">
              <FavoriteBorderOutlinedIcon className="text-white cursor-pointer text-xl" />
              {loggedInUser ? (
                <>
                  <span className="text-sm">Hi, {loggedInUser}</span>
                  <button
                    onClick={logout}
                    className="text-sm px-3 py-1 border border-white rounded-full hover:bg-white hover:text-[#930000] transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  className="px-4 py-1 border border-white text-sm rounded-full hover:bg-white hover:text-[#930000] transition duration-200"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </button>
              )}
            </div>
          </div>

          {/* Sidebar (Mobile) */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50 md:hidden`}
          >
            <div className="p-6 flex flex-col gap-6 text-lg font-medium text-[#0B3448]">
              <button onClick={toggleSidebar} className="self-end">
                <X size={28} />
              </button>
              <a href="#" onClick={toggleSidebar}>View Auction</a>
              <a href="#" onClick={toggleSidebar}>Budget Auction</a>
              <a href="#" onClick={toggleSidebar}>Area Auction</a>
              <a href="#" onClick={toggleSidebar}>Expert Advice</a>
              <a href="#" onClick={toggleSidebar}>Feature</a>
            </div>
          </div>

          {/* Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}
        </div>
      </div>

      {/* Modals */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          switchToSignup={handleSwitchToSignup}
        />
      )}

      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          switchToLogin={handleSwitchToLogin}
          openOtpModal={handleSignupComplete}
        />
      )}

      {showOtpModal && <OtpModal onClose={() => setShowOtpModal(false)} />}
    </>
  );
}
