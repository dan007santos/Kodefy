// pages/api/ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST" });
  }

  const { prompt, language } = req.body;

  if (!prompt || !language) {
    return res.status(400).json({ code: "# Erro: Informe o que deseja e a linguagem" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`
      Você é KAI, a IA do Kodefy. Gere código funcional em ${language}.
      Solicitação: "${prompt}"
      Retorne APENAS o código. Nada de markdown, nem explicações.
      Se for HTML/CSS, gere tudo em um único bloco.
    `);

    const code = await result.response.text();
    res.status(200).json({ code });
  } catch (error) {
    console.error("Erro na IA:", error);
    res.status(500).json({ code: `# Erro ao gerar código: ${error.message}` });
  }
}
