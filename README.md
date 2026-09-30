# Artificial-Soul-main
2026년 2학기 AI팀 메인 레포지토리입니다

백엔드 개발환경 실행 방법은 [Backend README](backend/README.md)를 참고하세요.

---
## 프로젝트 소개:

Artificial Soul은 대학 관련 TXT 지식 데이터를 검색하고, 검색된 근거를 바탕으로 기존 LLM이 답변하는 **RAG 기반 대학 정보 AI Assistant**입니다. 사용자는 텍스트로 질문하고 답변과 출처를 확인합니다.

MVP의 핵심은 **User + Chat/Message + RAG**입니다. FastAPI와 PostgreSQL로 서비스 데이터를 관리하고, Qdrant에는 TXT에서 만든 Chunk의 Vector와 Payload를 저장합니다. 팀이 준비한 TXT를 미리 인덱싱하며, Fine-tuning·자체 모델 학습·이미지 처리·사용자 파일 업로드는 MVP 범위에서 제외합니다.

---
## 팀원들 개요:

이에직 (팀장 / AI 엔지니어) - 프로젝트 총괄, 파이프라인 아키텍처 설계, 스프린트 조율, 모델 가중치 실험

박현주 (매니저) - 일정 관리, 팀 커뮤니케이션

김도현 (백엔드 담당자 / 백엔드 개발자) - FastAPI 비동기 서버 구축, 벡터 DB 연동, 모델 오케스트레이션

이승아 (백엔드 개발자) - FastAPI 비동기 서버 구축, 벡터 DB 연동, 모델 오케스트레이션

이채린 (프론트엔드 개발자) - React/Next.js UI 구현, 스트리밍 응답 연동, API 통신

---
