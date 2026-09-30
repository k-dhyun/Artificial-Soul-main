// src/features/chat/components/ChatMessageList.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { MOCK_MESSAGES } from "../mockData";
import styles from "./ChatMessageList.module.css";

export default function ChatMessageList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.innerList}>
        {MOCK_MESSAGES.map((msg) => {
          const isUser = msg.sender === "user";

          return (
            <div key={msg.id} className={`${styles.messageRow} ${isUser ? styles.userRow : styles.assistantRow}`}>
              {!isUser && (
                <div className={styles.assistantAvatar}>
                  <Image src="/logo.png" alt="Artificial Soul" width={24} height={24} className={styles.assistantAvatarImg} />
                </div>
              )}

              <div className={isUser ? styles.userBubbleWrapper : styles.assistantBubbleWrapper}>
                {isUser ? (
                  <>
                    <div className={styles.userHeader}>
                      <div className={styles.userBubble}>{msg.content}</div>
                      <div className={styles.userAvatar}>
                        <User size={16} />
                      </div>
                    </div>
                    <span className={styles.timestamp}>{msg.timestamp}</span>
                  </>
                ) : (
                  <>
                    <div className={styles.assistantBubble}>{msg.content}</div>
                    <span className={styles.timestamp}>{msg.timestamp}</span>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
