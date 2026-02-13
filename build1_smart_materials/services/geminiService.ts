
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

export const getMaterialInsights = async (materialName: string): Promise<AIResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the construction material: ${materialName}. Provide detailed technical specs and sustainability insights.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "A brief professional summary of the material." },
          properties: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "List of key technical properties (e.g. tensile strength, density)." 
          },
          sustainabilityScore: { 
            type: Type.NUMBER, 
            description: "Sustainability score out of 100 based on carbon footprint and recyclability." 
          },
          aiTips: { type: Type.STRING, description: "Professional AI-powered advice for using this material in modern projects." }
        },
        required: ["summary", "properties", "sustainabilityScore", "aiTips"]
      }
    }
  });

  return JSON.parse(response.text) as AIResponse;
};
