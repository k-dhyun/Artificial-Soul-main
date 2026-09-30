// 채팅방 아이템 타입
export interface ChatItem {
  id: string;
  title: string;
}

// 폴더 아이템 타입
export interface FolderItem {
  id: string;
  title: string;
  chatCount: number;
  isOpen: boolean; // 폴더 열림/닫힘 여부
  chats?: ChatItem[]; // 폴더 안에 속한 채팅방 목록
}
