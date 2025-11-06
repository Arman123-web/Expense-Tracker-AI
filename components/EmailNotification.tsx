"use client";
import { useState } from "react";
// import { sendEmailNotification } from "@/actions/EmailNotification";
import { sendEmailNotification } from "@/app/actions/emailNotification";
export default function EmailNotification() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  const handleSend = async () => {
    const res = await sendEmailNotification(email, "Expense Tracker Alert", msg);
    if (res.success) setStatus("✅ Email sent!");
    else setStatus("❌ Failed to send");
  };

  return (
    <div className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <h2 className="text-lg font-bold mb-2">Email Notification</h2>
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Message"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleSend} className="px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
      <p className="mt-2">{status}</p>
    </div>
  );
}
