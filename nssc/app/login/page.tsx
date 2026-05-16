"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/auth.css";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userString = localStorage.getItem("user");
    const storedUser = userString ? JSON.parse(userString) : null;

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem("loggedIn", "true");

      router.push("/profile");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-section">
        <div className="auth-card">
          <h1>Login</h1>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
}