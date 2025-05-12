import React, { useState } from "react";

const sections = [
  { label: "Edit Profile", key: "edit" },
  { label: "Recent Search", key: "recent" },
  { label: "Favourites", key: "favourites" },
  { label: "Testimonials", key: "feedback" },
  { label: "Settings", key: "settings" },
];

const settingsSubSections = [
  { label: "Privacy (Change Password)", key: "privacy" },
  { label: "Delete Account", key: "delete" },
];

export default function ViewProfile() {
  const [activeSection, setActiveSection] = useState("edit");

  const renderSection = () => {
    switch (activeSection) {
      case "edit":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <input className="w-full mb-3 p-2 border rounded" placeholder="Full Name" />
            <input className="w-full mb-3 p-2 border rounded" placeholder="Email or Phone" />
            <button className="bg-red-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        );
      case "recent":
        return <p>Recently searched auctions will appear here.</p>;
      case "favourites":
        return <p>Your favourite items.</p>;
      case "feedback":
        return <p>Give or manage your testimonials.</p>;
      case "settings":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Settings</h2>
            {settingsSubSections.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setActiveSection(sub.key)}
                className="block text-left text-gray-800 hover:text-red-600 mb-2"
              >
                {sub.label}
              </button>
            ))}
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Change Password</h2>
            <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="New Password" />
            <input className="w-full mb-3 p-2 border rounded" type="password" placeholder="Confirm Password" />
            <button className="bg-red-600 text-white px-4 py-2 rounded">Update Password</button>
          </div>
        );
      case "delete":
        return (
          <div>
            <h2 className="text-xl font-bold text-red-600 mb-4">Delete Account</h2>
            <p className="mb-3 text-sm">Warning: This action is permanent and cannot be undone.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded">Delete My Account</button>
          </div>
        );
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <div className="flex items-center mb-6">
          <img
            src="/src/assets/profile-icon.jpg"
            alt="User"
            className="w-12 h-12 rounded-full mr-3"
          />
          <div>
            <h3 className="text-lg font-bold">~anjali</h3>
            <p className="text-sm text-gray-500">Hey there! I am using Auctionwale.</p>
          </div>
        </div>

        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.key}
              onClick={() => setActiveSection(section.key)}
              className={`block w-full text-left px-3 py-2 rounded ${
                activeSection === section.key ? "bg-red-100 text-red-700 font-semibold" : "text-gray-700 hover:text-red-600"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white shadow-sm">{renderSection()}</main>
    </div>
  );
}
