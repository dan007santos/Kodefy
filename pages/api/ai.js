// pages/api/ai.js
// pages/api/ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ code: "# Erro: Use POST" });
  }

  const { prompt, language = "python" } = req.body;

  if (!prompt) {
    return res.status(400).json({ code: "# Erro: Nada foi dito." });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      console.error("❌ GEMINI_API_KEY não está definida");
      return res.status(500).json({ code: "# Erro: Chave da IA não configurada." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(`
      Você é KAI, a IA do Kodefy.
      Gere um código funcional em ${language} que faça: "${prompt}"
      Retorne APENAS o código, sem explicações, sem markdown.
      Se for HTML/CSS/JS, inclua tudo em um bloco.
    `);

    const code = await result.response.text();

    if (!code) {
      return res.status(500).json({ code: "# Erro: IA não gerou código." });
    }

    res.status(200).json({ code });
  } catch (error) {
    console.error("🚨 Erro na Gemini API:", error);
    
    if (error.message.includes("API Key")) {
      return res.status(500).json({ code: "# Erro: Chave inválida ou expirada." });
    }
    
    if (error.message.includes("429")) {
      return res.status(500).json({ code: "# Erro: Muitas requisições. Tente em alguns segundos." });
    }

    return res.status(500).json({ 
      code: `# Erro: ${error.message || "Falha na IA."}` 
    });
  }
}
