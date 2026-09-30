"use client";

import React, { useState } from "react";
import { FolderPlus, MessageSquarePlus, Search, Folder, MessageSquare, ChevronDown, ChevronUp } from "lucide-react";
import { MOCK_FOLDERS } from "@/features/notebook/mockData";
import { FolderItem } from "@/features/notebook/types";
import styles from "./NotebookTree.module.css";

export default function NotebookTree() {
  const [folders, setFolders] = useState<FolderItem[]>(MOCK_FOLDERS);
  // 디자인 확인용 기본 선택된 채팅 ID
  const [activeChatId, setActiveChatId] = useState<string>("chat-1");

  const toggleFolder = (folderId: string) => {
    setFolders((prev) => prev.map((folder) => (folder.id === folderId ? { ...folder, isOpen: !folder.isOpen } : folder)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.actionSection}>
        <button className={styles.actionBtn}>
          <div className={styles.actionBtnLeft}>
            <FolderPlus size={16} />
            <span>새 폴더 생성</span>
          </div>
          <span className={styles.plusIcon}>+</span>
        </button>

        <button className={styles.actionBtn}>
          <div className={styles.actionBtnLeft}>
            <MessageSquarePlus size={16} />
            <span>새 채팅</span>
          </div>
          <span className={styles.plusIcon}>+</span>
        </button>
      </div>

      <div className={styles.searchSection}>
        <div className={styles.searchBox}>
          <Search size={14} className={styles.searchIcon} />
          <input type="text" placeholder="검색..." className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.treeSection}>
        {folders.map((folder) => (
          <div key={folder.id}>
            <div className={styles.folderHeader} onClick={() => toggleFolder(folder.id)}>
              <div className={styles.folderLeft}>
                <Folder size={15} color="#94a3b8" />
                <span className={folder.isOpen ? styles.folderTitleActive : styles.folderTitle}>{folder.title}</span>
              </div>
              <div className={styles.folderRight}>
                <span>{folder.chatCount} chats</span>
                {folder.isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>

            {folder.isOpen && folder.chats && folder.chats.length > 0 && (
              <div className={styles.chatList}>
                {folder.chats.map((chat) => {
                  const isActive = activeChatId === chat.id;
                  return (
                    <div
                      key={chat.id}
                      className={`${styles.chatItem} ${isActive ? styles.chatItemActive : ""}`}
                      onClick={() => setActiveChatId(chat.id)}
                    >
                      <MessageSquare size={13} />
                      <span>{chat.title}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
