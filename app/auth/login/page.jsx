"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Đăng nhập thành công → chuyển tiếp sang lịch sử
      router.push("/history");
    } catch (err) {
      alert("Đăng nhập thất bại: " + err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Đăng nhập</h2>

      <input
        className="border p-2 w-full mb-3 rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3 rounded"
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Đăng nhập
      </button>

      <p className="text-center mt-3">
        Chưa có tài khoản? <a href="/auth/register" className="text-blue-600">Đăng ký ngay</a>
      </p>
    </div>
  );
}
