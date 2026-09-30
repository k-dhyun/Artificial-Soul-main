"use client";

import React, { useState, useEffect } from "react";
import { Send } from "lucide-react";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
  onSend?: (text: string) => void;
}

const HINT_EXAMPLES = [
  "이번 달 학사일정 알려줘",
  "중간고사 시험 기간이 언제야?",
  "다음 주 프로젝트 발표 시나리오 작성해줘",
  "도서관 이용 시간과 열람실 예약 방법 알려줘",
];

export default function ChatInput({ onSend }: ChatInputProps) {
  const [text, setText] = useState("");
  const [hintIndex, setHintIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * HINT_EXAMPLES.length);
      setHintIndex(randomIndex);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (onSend) {
      onSend(text);
    }
    setText("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.inputCard}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="메세지를 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {!text && <span className={styles.subHint}>ex) {HINT_EXAMPLES[hintIndex]}</span>}
        </div>

        <button type="submit" className={styles.sendButton} title="메시지 전송">
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}
