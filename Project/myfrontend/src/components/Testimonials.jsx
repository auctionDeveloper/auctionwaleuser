import React from 'react';

const testimonials = [
  {
    name: "Rakesh Jain",
    city: "Pune",
    rating: "★★★★★",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    comment: "Thanks to AuctionWale, I finally found a commercial property in my city that matched my budget. Smooth and transparent process!",
  },
  {
    name: "Snehal Kulkarni",
    city: "Thane",
    rating: "★★★★☆",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    comment: "I found a perfect flat in Navi Mumbai. The AuctionWale team made everything so easy!",
  },
  {
    name: "Ajay Mehta",
    city: "Nashik",
    rating: "★★★☆☆",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    comment: "Easy-to-use platform with reliable auction listings. Some delays in response but overall good!",
  },
  {
    name: "Divya Desai",
    city: "Ahmedabad",
    rating: "★★★★☆",
    img: "https://randomuser.me/api/portraits/women/56.jpg",
    comment: "Very helpful for new buyers. I grabbed a great plot through AuctionWale!",
  },
  {
    name: "Suresh Nair",
    city: "Hyderabad",
    rating: "★★★☆☆",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
    comment: "Interface is decent. Needs better search filter but listings are genuine.",
  },
  {
    name: "Priya Sharma",
    city: "Mumbai",
    rating: "★★★★★",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    comment: "Highly professional team. I bid on a residential flat and the support was excellent.",
  },
];

export default function Testimonials() {
  return (
    <div className="container flex flex-col md:flex-row w-full mx-auto mt-10 h-auto md:h-64 border border-gray-300 shadow rounded overflow-hidden">

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
        {testimonials.map((user, idx) => (
          <div key={idx} className={`pb-4 ${idx !== testimonials.length - 1 ? "border-b" : ""}`}>
            <div className="flex items-center gap-3 mb-1">
              <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <h3 className="font-semibold text-black text-base">{user.name}</h3>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  {user.city} · <span className="text-yellow-400">{user.rating}</span>
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-700">{user.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
