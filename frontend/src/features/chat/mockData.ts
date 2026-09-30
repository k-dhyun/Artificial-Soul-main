// 임시 데이터

export interface ChatMessageItem {
  id: string;
  sender: "user" | "assistant";
  content: string;
  timestamp: string;
}

export const MOCK_MESSAGES: ChatMessageItem[] = [
  {
    id: "msg-1",
    sender: "user",
    content: "퓨샷 러닝(few-shot learning)이 뭔지 쉽게 설명해줘",
    timestamp: "09:42",
  },
  {
    id: "msg-2",
    sender: "assistant",
    content: `퓨샷 러닝(Few-shot learning)은 모델이 정답 라벨이 붙은 아주 적은 수의 예시만 보고도 새로운 작업을 수행하도록 학습하는 머신러닝 기법입니다. 수만 개의 방대한 데이터셋 대신 단 몇 개의 예시만으로 핵심 패턴을 일반화할 수 있죠.

데이터가 부족하거나 수집 비용이 크고 구하기 어려운 환경에서 특히 유용합니다.`,
    timestamp: "09:42",
  },
  {
    id: "msg-3",
    sender: "user",
    content: "That's really interesting. Could you give me a real-world example?",
    timestamp: "09:43",
  },
  {
    id: "msg-4",
    sender: "assistant",
    content:
      "Of course! Imagine you want an AI to recognize a new type of plant. Instead of showing thousands of labeled images, you only provide a few examples (e.g., 5-10). The model uses those examples to learn the pattern and can then identify the plant in new photos.",
    timestamp: "09:43",
  },
  {
    id: "msg-5",
    sender: "user",
    content: "So the AI can learn from just a handful of examples? That sounds much more efficient than traditional training.",
    timestamp: "09:44",
  },
  {
    id: "msg-6",
    sender: "assistant",
    content:
      "Exactly! This approach is often called few-shot learning. It reduces the amount of labeled data needed and can make it much easier to adapt AI systems to new tasks or categories.",
    timestamp: "09:44",
  },
];
