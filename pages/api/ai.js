// pages/api/ai.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST" });
  }

  const { prompt, userLevel = "intermediário" } = req.body;

  if (!prompt) {
    return res.status(400).json({ code: "# Erro: Fale o que você quer." });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `
      Você é KAI, a Inteligência Artificial do Kodefy.
      Você detecta a linguagem ideal sozinha e gera código perfeito.

      # Regras:
      1. Analise o pedido e escolha a melhor linguagem (ex: se for web → HTML/JS, se for cálculo → Python).
      2. Se o usuário for iniciante, explique com comentários em português.
      3. Nunca use markdown (\`\`\`).
      4. Retorne apenas o código, ou uma pergunta se precisar de mais detalhes.
      5. Sempre inclua boas práticas (segurança, legibilidade).

      # Pedido do usuário:
      "${prompt}"
      Nível: ${userLevel}

      # Sua resposta:
      Gere o código ou faça uma pergunta clara.
    `;

    const result = await model.generateContent(systemPrompt);
    const code = await result.response.text();

    res.status(200).json({ code, language: "auto" });
  } catch (error) {
    res.status(500).json({ 
      code: `# KAI: Não entendi bem. Pode repetir?` 
    });
  }
}
