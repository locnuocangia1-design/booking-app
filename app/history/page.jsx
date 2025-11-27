"use client";
import { useEffect, useState } from "react";
import { db, auth } from "@/firebase/config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function HistoryPage() {
  const [bookings, setBookings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchBookings = async () => {
      const user = auth.currentUser;
      if (!user) {
        // Nếu chưa login → redirect về login
        router.push("/auth/login");
        return;
      }

      const q = query(
        collection(db, "bookings"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(list);
    };

    fetchBookings();
  }, [router]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Lịch sử đặt lịch</h2>
      {bookings.length === 0 ? (
        <p>Chưa có lịch đặt nào.</p>
      ) : (
        <ul className="space-y-3">
          {bookings.map(b => (
            <li key={b.id} className="border p-4 rounded shadow-sm bg-white">
              <div><strong>Dịch vụ:</strong> {b.service}</div>
              <div><strong>Ngày:</strong> {b.date}</div>
              <div><strong>Ngày tạo:</strong> {b.createdAt.toDate().toLocaleString()}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
