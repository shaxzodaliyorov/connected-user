export type AIMessage = {
  role: "system" | "user";
  content: string;
};

export interface PostAiTestRequest {
  messages: AIMessage[];
}

export interface PostAiTestResponse {
  role: string;
  content: string;
  refusal: null;
}
