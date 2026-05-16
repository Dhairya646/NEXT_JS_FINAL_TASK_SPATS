"use client";

import { useEffect, useState } from "react";
import "../../styles/profile.css";

interface User {
  name: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUserString = localStorage.getItem("user");
    const storedUser = storedUserString ? JSON.parse(storedUserString) : null;

    setUser(storedUser);
  }, []);

  return (
    <main className="profile-page">
      <section>
        <h1 className="page-title">Profile</h1>

        {user ? (
          <div className="profile-card">
            <div className="profile-circle"></div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <button
              onClick={() => {
                localStorage.removeItem("loggedIn");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="no-user">No User Found</p>
        )}
      </section>
    </main>
  );
}