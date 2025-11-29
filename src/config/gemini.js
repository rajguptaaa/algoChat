import { GoogleGenAI } from '@google/genai';

const apiKey = 'AIzaSyAlyX_depxi8wo5M9p7saZ6lWG7i86tSNI';

const genAI = new GoogleGenAI({ apiKey });

export const runChat = async (prompt) => {
  try {
    const model = 'models/gemini-2.5-pro';

    const tools = [
      {
        googleSearch: {},
      },
    ];

    const config = {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      tools,
    };

    const contents = [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ];

    const response = await genAI.models.generateContentStream({
      model,
      contents,
      config,
    });

    let fullResponse = '';

    for await (const chunk of response) {
      if (chunk.text) {
        fullResponse += chunk.text;
        console.log(chunk.text);
      }
    }

    return fullResponse; 

  } catch (error) {
    console.error('❌ Error in runChat:', error.message || error);
    return null;
  }
};


