"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/auth.css";

export default function SignupPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account Created");

    router.push("/login");
  }

  return (
    <main className="auth-page">
      <section className="auth-section">
        <div className="auth-card">
          <h1>Signup</h1>

          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

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

            <button type="submit">Create Account</button>
          </form>
        </div>
      </section>
    </main>
  );
}