import { FolderItem } from "./types";

export const MOCK_FOLDERS: FolderItem[] = [
  {
    id: "folder-1",
    title: "Artificial Soul",
    chatCount: 4,
    isOpen: true,
    chats: [
      { id: "chat-1-1", title: "General Discussion" },
      { id: "chat-1-2", title: "AI Research" },
      { id: "chat-1-3", title: "Architecture" },
      { id: "chat-1-4", title: "Notes & Ideas" },
    ],
  },
  {
    id: "folder-2",
    title: "NLP Research",
    chatCount: 6,
    isOpen: false,
    chats: [
      { id: "chat-2-1", title: "LLM Fine-tuning" },
      { id: "chat-2-2", title: "RAG Pipeline 구축" },
      { id: "chat-2-3", title: "Tokenizer 비교 분석" },
      { id: "chat-2-4", title: "Prompt Engineering" },
      { id: "chat-2-5", title: "Embedding 모델 평가" },
      { id: "chat-2-6", title: "논문 서베이 요약" },
    ],
  },
  {
    id: "folder-3",
    title: "대학교 프로젝트",
    chatCount: 6,
    isOpen: false,
    chats: [
      { id: "chat-3-1", title: "졸업작품 기획서" },
      { id: "chat-3-2", title: "중간발표 피드백" },
      { id: "chat-3-3", title: "데이터베이스 모델링" },
      { id: "chat-3-4", title: "API 명세 및 협업" },
      { id: "chat-3-5", title: "UI/UX 디자인 점검" },
      { id: "chat-3-6", title: "최종 시연 시나리오" },
    ],
  },
  {
    id: "folder-4",
    title: "개인",
    chatCount: 6,
    isOpen: false,
    chats: [
      { id: "chat-4-1", title: "포트폴리오 정리" },
      { id: "chat-4-2", title: "기술 블로그 초안" },
      { id: "chat-4-3", title: "코딩테스트 오답노트" },
      { id: "chat-4-4", title: "사이드 프로젝트 아이디어" },
      { id: "chat-4-5", title: "북마크 및 레퍼런스" },
      { id: "chat-4-6", title: "주간 회고록" },
    ],
  },
];
