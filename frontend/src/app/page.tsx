import React from "react";
import MainLayout from "@/layouts/MainLayout";
import Sidebar from "@/layouts/Sidebar";

export default function Home() {
  return (
    <MainLayout sidebar={<Sidebar />}>
      <div style={{ color: "#fff", textAlign: "center", marginTop: "80px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>메인 영역</h2>
        <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "10px" }}>
          사이드바 상단의 접기 아이콘을 누르면 닫히고, 닫힌 뒤 생기는 열기 버튼으로 다시 펼쳐집니다.
        </p>
      </div>
    </MainLayout>
  );
}
