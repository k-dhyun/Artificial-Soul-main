"use client";

import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Sidebar from "@/layouts/Sidebar";
import AboutPanel from "@/features/info-panel/components/AboutPanel";
import ChatMessageList from "@/features/chat/components/ChatMessageList";
import ChatInput from "@/features/chat/components/ChatInput";

export default function Home() {
  const [hasChat, setHasChat] = useState(false);
  const handleSendMessage = (message: string) => {
    console.log("전송된 메시지:", message);
    setHasChat(true);
  };

  return (
    <MainLayout sidebar={<Sidebar />}>
      {hasChat ? <ChatMessageList /> : <AboutPanel />}

      <ChatInput onSend={handleSendMessage} />
    </MainLayout>
  );
}
