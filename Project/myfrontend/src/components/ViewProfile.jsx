import React, { useEffect, useState } from 'react';

export default function ViewProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const profileData = localStorage.getItem('signupProfile');
      if (profileData) {
        const parsed = JSON.parse(profileData);
        setUser(parsed);
      }
    } catch (e) {
      console.error("Failed to parse signupProfile:", e);
    }
  }, []);

  if (!user) {
    return (
      <div className="p-6 text-center text-gray-500">
        No user profile found. Please login.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-10">
      <h1 className="text-2xl font-bold text-[#0B3448] mb-4">👤 Profile Info</h1>
      <div className="space-y-3 text-sm text-gray-700">
        <p><strong>🆔 ID:</strong> {user.id}</p>
        <p><strong>👤 Name:</strong> {user.name}</p>
        <p><strong>📧 Email:</strong> {user.email}</p>
        <p><strong>📞 Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
}
