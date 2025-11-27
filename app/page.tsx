// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>AN GIA Service - Đặt lịch trực tuyến</title>
        <meta
          name="description"
          content="Dịch vụ bảo dưỡng và thay lõi máy lọc nước chuyên nghiệp. Đặt lịch nhanh chóng online."
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "#0a84e6",
          color: "#fff",
          boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/images/logo.png" alt="Logo AN GIA" width={50} height={50} />
          <h1 style={{ fontSize: "26px", margin: 0 }}>AN GIA SERVICE</h1>
        </div>

        {/* Nút Đăng nhập / Đăng ký */}
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/auth/login">
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                background: "#fff",
                color: "#0a84e6",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Đăng nhập
            </button>
          </Link>
          <Link href="/auth/register">
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "8px",
                border: "2px solid #fff",
                background: "transparent",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Đăng ký
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          padding: "100px 40px",
          background: "#e3f2ff",
          textAlign: "center",
          borderBottom: "3px solid #0a84e6",
        }}
      >
        <h2 style={{ fontSize: "38px", marginBottom: "12px", color: "#1f2d3d" }}>
          Dịch vụ chuyên nghiệp – Đặt lịch nhanh chóng
        </h2>
        <p style={{ fontSize: "18px", marginBottom: "24px" }}>
          Chọn dịch vụ, chọn thời gian, xác nhận – tất cả chỉ trong 1 phút.
        </p>
        <Link href="/booking">
          <button
            style={{
              background: "#0a84e6",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Đặt lịch ngay
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1f2d3d",
          color: "#fff",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        © 2025 AN GIA - Dịch vụ đặt lịch trực tuyến
      </footer>
    </>
  );
}
