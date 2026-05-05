export type ChatRole = "user" | "agent";

export type ChatHistoryItem = {
  role: ChatRole;
  text: string;
};

export type ChatApiRequest = {
  message: string;
  history: ChatHistoryItem[];
};

export type ChatApiReport = {
  filename: string;
  title: string;
  range: string;
  category: string;
  generatedAt: string;
  mimeType: string;
  contentBase64: string;
};

export type ChatApiResponse = {
  message: string;
  report?: ChatApiReport | null;
};
