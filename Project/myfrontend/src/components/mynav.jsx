import React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import logo from '/src/assets/logo.svg';

export default function MyNav() {
  return (
    <div className="w-full bg-white flex flex-wrap justify-between items-center p-4 shadow border-b sticky top-0 z-50 overflow-hidden h-auto sm:h-[100px] gap-y-2">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="h-21 w-21 object-contain" />
        <div className="flex flex-col leading-tight w-fit">
          <h2 className="text-2xl font-extrabold tracking-[0.4em] text-[#0B3448] inline-block">
            Auctionwale
          </h2>
          <p className="text-md text-gray-600 uppercase tracking-widest font-medium text-[#930000] inline-block">
            Expert for Bank Auctions
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <FavoriteBorderOutlinedIcon className="text-gray-700 cursor-pointer text-2xl" />
        <button className="px-5 py-2 border border-gray-300 text-sm rounded-full hover:bg-[#0D364A] hover:text-white transition duration-200">
          Login
        </button>
      </div>
    </div>
  );
}
