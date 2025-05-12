import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '/src/assets/logo.svg';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import OtpModal from './OtpModal';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [mobileFeatures, setMobileFeatures] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [featuresPosition, setFeaturesPosition] = useState({ top: 0, left: 0 });

  const menuRef = useRef(null);
  const featuresMenuRef = useRef(null);
  const featuresButtonRef = useRef(null);
  const mobileSidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    const status = localStorage.getItem('isLoggedIn');
    const readyToLogin = localStorage.getItem('readyToLogin');

    if (status === 'true' && user) setLoggedInUser(user);
    if (readyToLogin === 'true') {
      setShowLoginModal(true);
      localStorage.removeItem('readyToLogin');
    }

    const handleClickOutside = (e) => {
      if (
        !menuRef.current?.contains(e.target) &&
        !featuresMenuRef.current?.contains(e.target) &&
        !featuresButtonRef.current?.contains(e.target)
      ) {
        setShowMenu(false);
        setShowFeatures(false);
      }

      if (
        mobileSidebarRef.current &&
        !mobileSidebarRef.current.contains(e.target)
      ) {
        setMobileFeatures(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
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

  const handleViewProfile = () => {
    navigate('/profile');
    setShowMenu(false);
  };

  const handleProfileClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowMenu(!showMenu);
    setShowFeatures(false);
  };

  const handleFeaturesClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    setFeaturesPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    setShowFeatures(!showFeatures);
    setShowMenu(false);
  };

  return (
    <>
      <div className="sticky top-0 z-[999] bg-white shadow-md overflow-hidden">
        {/* Header */}
        <div className="w-full flex justify-between items-center p-4 border-b sm:h-[90px] gap-x-3 overflow-hidden">
                   <div className="flex items-center mx-4 gap-4 overflow-hidden">
            <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
            <div className="flex flex-col font-poppins  whitespace-nowrap">
  <h1 className="text-3xl font-extrabold text-[#1f2937] leading-tight pb-1">Auctionwale</h1>
  <p className="text-base font-semibold text-[#930000] mt-[-3px]">Expert for Bank Auctions</p>
</div>
          </div>

          <div className="hidden md:flex items-center gap-4 mx-3 overflow-hidden">
            <FavoriteBorderOutlinedIcon className="text-gray-700 text-2xl cursor-pointer" />
            {loggedInUser ? (
              <>
                <span className="text-[#0B3448] text-sm font-medium">Hi, {loggedInUser}</span>
                <img
                  src="/src/assets/profile-icon.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  onClick={handleProfileClick}
                />
              </>
            ) : (
              <button
                className="px-5 py-2 border border-gray-300 text-sm rounded-full hover:bg-[#0D364A] hover:text-white"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Red Navbar */}
        <div className="bg-[#930000] text-white z-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="md:hidden order-1">
              <button onClick={toggleSidebar}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
            </div>

            <ul className="hidden md:flex gap-8 text-sm font-medium w-full justify-around">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/view_auction">View Auction</Link></li>
              <li><Link to="/budget_auction">Budget Auction</Link></li>
              <li><Link to="/area_auction">Area Auction</Link></li>
              <li><Link to="/expert_advice">Call Expert</Link></li>
              <li>
                <button ref={featuresButtonRef} onClick={handleFeaturesClick} className="inline-flex items-center gap-1">
                  Features <ChevronDown size={16} />
                </button>
              </li>
              <li><Link to="/FAQ">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="md:hidden flex items-center gap-2 ml-auto order-2">
              <FavoriteBorderOutlinedIcon className="text-white text-xl cursor-pointer" />
              {loggedInUser && (
                <>
                  <span className="text-white text-sm">Hi, {loggedInUser}</span>
                  <img
                    src="/src/assets/profile-icon.jpg"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                    onClick={handleProfileClick}
                  />
                </>
              )}
            </div>
          </div>

          {/* Mobile Sidebar */}
          <div ref={mobileSidebarRef} className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 z-50 md:hidden`}>
            <div className="p-6 flex flex-col gap-4 text-lg font-medium text-[#0B3448] overflow-y-auto h-full">
              <button onClick={toggleSidebar} className="self-end"><X size={28} /></button>

              <Link to="/about" onClick={toggleSidebar}>About Us</Link>
              <Link to="/view_auction" onClick={toggleSidebar}>View Auction</Link>
              <Link to="/budget_auction" onClick={toggleSidebar}>Budget Auction</Link>
              <Link to="/area_auction" onClick={toggleSidebar}>Area Auction</Link>
              <Link to="/expert_advice" onClick={toggleSidebar}>Call Expert</Link>

              {/* Mobile Features Toggle */}
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setMobileFeatures(!mobileFeatures)}>
                <span className="text-[#0B3448] font-semibold">Features</span>
                <ChevronRight size={18} className="text-[#0B3448]" />
              </div>
              {mobileFeatures && (
                <ul className="ml-4 text-sm flex flex-col gap-2 mt-1">
                  <li>Area Report</li>
                  <li>Photo & Videos</li>
                  <li>TSR</li>
                  <li>Valuation Report</li>
                  <li>Public & Sales Notice</li>
                  <li>Bank Document</li>
                  <li>Comparison Chart</li>
                </ul>
              )}

              <Link to="/FAQ" onClick={toggleSidebar}>FAQs</Link>
              <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Dropdown (desktop) */}
      {showFeatures && (
        <div
          ref={featuresMenuRef}
          className="fixed w-56 bg-white text-[#0B3448] shadow-lg rounded-md z-[9999] py-2 overflow-hidden"
          style={{ top: `${featuresPosition.top}px`, left: `${featuresPosition.left}px` }}
        >
          <ul className="text-sm">
            <li className="px-4 py-2 hover:bg-gray-100">Area Report</li>
            <li className="px-4 py-2 hover:bg-gray-100">Photo & Videos</li>
            <li className="px-4 py-2 hover:bg-gray-100">TSR</li>
            <li className="px-4 py-2 hover:bg-gray-100">Valuation Report</li>
            <li className="px-4 py-2 hover:bg-gray-100">Public & Sales Notice</li>
            <li className="px-4 py-2 hover:bg-gray-100">Bank Document</li>
            <li className="px-4 py-2 hover:bg-gray-100">Comparison Chart</li>
          </ul>
        </div>
      )}

      {/* Profile Menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="fixed w-48 bg-[#1f1f1f] text-white shadow-lg rounded-md z-[9999] py-2"
          style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left - 150}px` }}
        >
          <button onClick={handleViewProfile} className="w-full text-left px-4 py-2 hover:bg-[#333] text-sm">View Profile</button>
          <button onClick={logout} className="w-full text-left px-4 py-2 hover:bg-[#333] text-sm text-red-400">Logout</button>
        </div>
      )}

      {/* Modals */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} switchToSignup={handleSwitchToSignup} />}
      {showSignupModal && <SignupModal onClose={() => setShowSignupModal(false)} switchToLogin={handleSwitchToLogin} openOtpModal={handleSignupComplete} />}
      {showOtpModal && <OtpModal onClose={() => setShowOtpModal(false)} />}
    </>
  );
}