"use client";

import React, { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Header from "./Header";
import styles from "./MainLayout.module.css";

export default function MainLayout({ sidebar, children }: { sidebar?: React.ReactNode; children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className={styles.container}>
      <aside className={`${styles.sidebarArea} ${!isSidebarOpen ? styles.sidebarClosed : ""}`}>
        <div className={`${styles.sidebarInner} ${!isSidebarOpen ? styles.sidebarInnerClosed : ""}`}>
          <button onClick={() => setIsSidebarOpen(false)} className={styles.closeBtn} title="사이드바 닫기">
            <PanelLeftClose size={18} />
          </button>

          {sidebar}
        </div>
      </aside>

      <div className={styles.contentArea}>
        {!isSidebarOpen && (
          <button onClick={() => setIsSidebarOpen(true)} className={styles.openBtn} title="사이드바 열기">
            <PanelLeftOpen size={18} />
          </button>
        )}

        <Header />

        <main className={styles.mainBody}>{children}</main>
      </div>
    </div>
  );
}
