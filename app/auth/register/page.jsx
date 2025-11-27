"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Đăng ký thành công!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
      <input
        className="border p-2 w-full"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 w-full mt-3"
        type="password"
        placeholder="Mật khẩu"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Tạo tài khoản
      </button>
    </div>
  );
}
