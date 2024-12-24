import { useState } from "react";
import { CheckTextAiResponse } from "./types";

export const useCheckTextAi = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const checkTextAi = async (text: string): Promise<CheckTextAiResponse> => {
    setLoading(true);
    try {
      const response = await fetch("https://ai.urconnection.co.kr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are a professional editor who provides clear, concise, and grammatically correct sentences.",
            },
            {
              role: "user",
              content:
                text +
                " Please proofread this sentence for grammar, punctuation, and style improvements, and rewrite it in a natural, polished way.",
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to check text");
      }
      const data: CheckTextAiResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error checking text AI:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { checkTextAi, loading };
};
