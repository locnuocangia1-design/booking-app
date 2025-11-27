"use client";
import { useState } from "react";
import { db, auth } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function BookingPage() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async () => {
    const user = auth.currentUser;
    if (!user) return alert("Bạn phải đăng nhập!");

    await addDoc(collection(db, "bookings"), {
      uid: user.uid,
      service,
      date,
      createdAt: new Date()
    });

    alert("Đặt lịch thành công!");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Đặt lịch dịch vụ</h2>
      <input
        className="border p-2 w-full"
        placeholder="Dịch vụ"
        onChange={(e) => setService(e.target.value)}
      />
      <input
        className="border p-2 w-full mt-3"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
      >
        Đặt lịch
      </button>
    </div>
  );
}
