"use client";

import { useState } from "react";
import { insertLead } from "@/lib/functions/insertLead";

export default function LeadForm() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await insertLead(email, phone);

    if (result.success) {
      alert("Lead saved!");
      setEmail("");
      setPhone("");
    } else {
      alert("Failed to save lead");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}