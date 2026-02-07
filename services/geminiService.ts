
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getHoloGuideHint = async (concept: string, currentLevel: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tu es un Holo-Guide expert en mathématiques. Un élève de 14 ans bloque sur le niveau "${currentLevel}" du théorème de Pythagore.
      Donne-lui un indice subtil et encourageant, sans donner la réponse directement. 
      Explique le concept de manière ludique (lié à l'espace et à la construction).
      Concept actuel : ${concept}. 
      Réponds en 2 phrases maximum, avec un ton bienveillant et moderne.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "N'oublie pas : le carré de l'hypoténuse est la somme des carrés des deux autres côtés !";
  }
};
