import React from 'react';

export default function Testimonials() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto mt-10 h-auto md:h-64 border border-gray-300 shadow rounded overflow-hidden">
      {/* Static Left Column */}
      <div className="w-full md:w-1/3 p-6 bg-white border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-2xl font-bold text-[#0B3448] mb-2">Testimonials</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          At AuctionWale, our mission is to make property auctions more accessible,
          transparent, and efficient for everyone. But don’t just take our word for it —
          hear what our users have to say about their AuctionWale experience.
        </p>
      </div>

      {/* Scrollable Right Column */}
      <div className="w-full md:w-2/3 overflow-y-scroll p-6 bg-white space-y-6 max-h-64 md:max-h-full">
        {/* Testimonial 1 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Rakesh Jain" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-black text-base">Rakesh Jain</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Pune · <span className="text-yellow-400">★★★★★</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Thanks to AuctionWale, I finally found a commercial property in my city that matched my budget. Smooth and transparent process!
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Snehal Kulkarni" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-[#333] text-base">Snehal Kulkarni</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Thane · <span className="text-yellow-400">★★★★☆</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            I found a perfect flat in Navi Mumbai. The AuctionWale team made everything so easy!
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="Ajay Mehta" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-black text-base">Ajay Mehta</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Nashik · <span className="text-yellow-400">★★★☆☆</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Easy-to-use platform with reliable auction listings. Some delays in response but overall good!
          </p>
        </div>

        {/* Testimonial 4 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/women/56.jpg" alt="Divya Desai" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-[#333] text-base">Divya Desai</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Ahmedabad · <span className="text-yellow-400">★★★★☆</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Very helpful for new buyers. I grabbed a great plot through AuctionWale!
          </p>
        </div>

        {/* Testimonial 5 */}
        <div className="border-b pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Suresh Nair" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-black text-base">Suresh Nair</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Hyderabad · <span className="text-yellow-400">★★★☆☆</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Interface is decent. Needs better search filter but listings are genuine.
          </p>
        </div>

        {/* Testimonial 6 */}
        <div className="pb-4">
          <div className="flex items-center gap-3 mb-1">
            <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="Priya Sharma" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-[#333] text-base">Priya Sharma</h3>
              <span className="text-sm text-gray-500 flex items-center gap-1">Mumbai · <span className="text-yellow-400">★★★★★</span></span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Highly professional team. I bid on a residential flat and the support was excellent.
          </p>
        </div>
      </div>
    </div>
  );
}
