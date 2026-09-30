import React from "react";
import Image from "next/image";
import styles from "./AboutPanel.module.css";

const FEATURES = [
  {
    id: "architecture",
    title: "고성능 LLM 아키텍처",
    desc: "트랜스포머 기반 멀티모달",
    iconSrc: "/architecture.svg",
  },
  {
    id: "visualization",
    title: "사고 과정 시각화",
    desc: "AI의 추론 과정 확인",
    iconSrc: "/visualization.svg",
  },
  {
    id: "knowledge",
    title: "지식 통합",
    desc: "실시간 및 장기 기억 지원",
    iconSrc: "/knowledge.svg",
  },
  {
    id: "security",
    title: "안전성과 정렬",
    desc: "인간 중심 가치 기반 설계",
    iconSrc: "/security.svg",
  },
];

export default function AboutPanel() {
  return (
    <div className={styles.container}>
      {/* 1. About This Notebook 구역 */}
      <div className={styles.aboutSection}>
        <div className={styles.sectionHeader}>
          <Image src="/star.svg" alt="Star" width={18} height={18} className={styles.starIcon} />
          <h2 className={styles.sectionTitle}>About This Notebook</h2>
        </div>
        <p className={styles.aboutDesc}>
          Artificial Soul은 고도화된 언어 모델과 멀티모달 학습, 인간의 가치와 의도에 대한 깊은 이해를 바탕으로 인간다운 AI 시스템을 구축하는
          R&D 프로젝트입니다.
        </p>
      </div>

      <div className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <Image src="/star.svg" alt="Star" width={18} height={18} className={styles.starIcon} />
          <h3 className={styles.sectionTitle}>Key Features</h3>
        </div>

        <div className={styles.featuresGrid}>
          {FEATURES.map((item) => (
            <div key={item.id} className={styles.featureCard}>
              <div className={styles.cardIconBox}>
                <Image src={item.iconSrc} alt={item.title} width={44} height={44} className={styles.featureIcon} />
              </div>

              <div className={styles.cardTextBox}>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
