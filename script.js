async function askAI() {
  const prompt = prompt("KAI: O que você quer que eu crie? (ex: 'jogo da cobrinha em Python')");

  if (!prompt) return;

  // Aqui usamos o Gemini via API (você vai configurar depois)
  const response = await fetch('/api/ai', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, language: document.getElementById('language').value })
  });

  const data = await response.json();
  editor.setValue(data.code || "Erro: IA não respondeu.");
}
