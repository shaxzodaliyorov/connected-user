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
                "You are a professional editor. Your job is to proofread text and return only the corrected and polished version, without any additional commentary or instructions.",
            },
            {
              role: "user",
              content:
                text +
                " Please correct this sentence and rewrite it in a more natural, polished way.",
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
