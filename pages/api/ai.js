// pages/api/ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { prompt, language = "python", userLevel = "intermediário" } = req.body;

  if (!prompt) {
    return res.status(400).json({ code: "# Erro: O que você quer que eu crie?" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`
      Você é KAI, a IA do Kodefy.
      Gere um código funcional em ${language} que faça: "${prompt}"
      Retorne APENAS o código, nada além disso.
      Se for HTML/CSS/JS, gere tudo junto.
    `);

    const code = await result.response.text();
    res.status(200).json({ code });
  } catch (error) {
    console.error("Erro na IA:", error);
    res.status(500).json({ 
      code: `# Erro ao gerar código: Verifique a chave da API` 
    });
  }
}
