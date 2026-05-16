'use client'

import { useState } from 'react'
import '../../styles/ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('===== NSSC CONTACT FORM =====')

    console.log('Name:', formData.name)
    console.log('Email:', formData.email)
    console.log('Phone:', formData.phone)
    console.log('Message:', formData.message)

    console.log('=============================')

    alert('Transmission Sent Successfully')

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <h2 className="formTitle">
        CONTACT MISSION CONTROL
      </h2>

      <p className="formSubtitle">
        Send your transmission to NSSC 2026
      </p>

      <input
        type="text"
        name="name"
        placeholder="Astronaut Name"
        value={formData.name}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Space Email"
        value={formData.email}
        onChange={handleChange}
        className="input"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Communication Frequency"
        value={formData.phone}
        onChange={handleChange}
        className="input"
      />

      <textarea
        name="message"
        placeholder="Your Transmission..."
        value={formData.message}
        onChange={handleChange}
        className="input textarea"
        required
      />

      <button type="submit" className="submitBtn">
        TRANSMIT MESSAGE
      </button>
    </form>
  )
}