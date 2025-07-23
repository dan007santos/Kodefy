// script.js
// Kodefy - Editor com IA, Voz e Tradução
// Versão: 2.0 | Prioridade: Máxima

let editor;
let currentLang = 'pt';
let translations = {};

// Mapeamento de idiomas para Speech API
const langMap = {
  pt: 'pt-BR',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  ru: 'ru-RU',
  zh: 'zh-CN',
  hi: 'hi-IN',
  ar: 'ar-SA'
};

// Carrega traduções
async function loadTranslations() {
  const langs = ['pt', 'en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'ru', 'zh', 'hi', 'ar'];
  for (let lang of langs) {
    try {
      const res = await fetch(`lang/${lang}.json`);
      if (res.ok) translations[lang] = await res.json();
    } catch (err) {
      console.warn(`Falha ao carregar ${lang}`);
    }
  }
  applyTranslation();
  initMonaco();
}

// Aplica tradução na interface
function applyTranslation() {
  const t = translations[currentLang] || translations.pt;

  if (!t) return;

  document.querySelector('h1 span')?.replaceWith(createTextNode(t.title));
  document.querySelector('p strong')?.replaceWith(createTextNode(t.subtitle));
  updateLabel('language', t.ask_language);
  updateLabel('userLevel', t.ask_level);
  updateLabel('language-select', t.select_language || 'Idioma');

  document.querySelector('button:nth-child(1)').textContent = t.btn_run;
  document.querySelector('button:nth-child(2)').textContent = t.btn_clear;
  document.querySelector('button:nth-child(3)').textContent = t.btn_ai;
  document.querySelector('button:nth-child(4)').textContent = t.btn_voice;
  document.querySelector('h2').textContent = t.output_label;

  window.KAI = {
    prompt: t.prompt_ai,
    listening: t.voice_listening,
    error: t.voice_error,
    success: t.code_generated
  };
}

function createTextNode(text) {
  const span = document.createElement('span');
  span.textContent = text;
  return span;
}

function updateLabel(forId, text) {
  const label = document.querySelector(`label[for="${forId}"]`);
  if (label) label.textContent = text + ': ';
}

// Inicializa o Monaco Editor
function initMonaco() {
  require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs' }});
  window.MonacoEnvironment = { getWorkerUrl: () => proxy };

  require(['vs/editor/editor.main'], () => {
    editor = monaco.editor.create(document.getElementById('editor'), {
      value: '# Bem-vindo ao Kodefy\n# Clique em "Gerar com IA" ou use o microfone',
      language: 'python',
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: { enabled: false }
    });

    document.getElementById('language').addEventListener('change', (e) => {
      monaco.editor.setModelLanguage(editor.getModel(), e.target.value);
    });
  });
}

// Troca idioma
function changeLang() {
  currentLang = document.getElementById('language-select').value;
  applyTranslation();
}

// Roda código (simulado por enquanto)
function runCode() {
  const output = document.getElementById('output');
  output.textContent = 'Executando... (backend em desenvolvimento)';
  // Futuro: enviar para backend seguro
}

// Limpa editor
function clearEditor() {
  editor.setValue('');
}

// Chama IA com prompt de texto
async function askAI() {
  const t = translations[currentLang] || translations.pt;
  const prompt = prompt(t.prompt_ai || "O que você quer que eu crie?");

  if (!prompt) return;

  const language = document.getElementById('language').value;
  const userLevel = document.getElementById('userLevel').value;
  const output = document.getElementById('output');
  output.textContent = 'KAI está pensando...';

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, language, userLevel })
    });

    const data = await res.json();
    editor.setValue(data.code);
    output.textContent = t.code_generated || 'Código gerado!';
    speakText(t.code_generated || 'Código gerado!');
  } catch (err) {
    output.textContent = 'Erro: KAI offline.';
    speakText('Desculpe, não consegui responder agora.');
  }
}

// Microfone: Speech-to-Text
function startVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert('Seu navegador não suporta reconhecimento de voz. Use Chrome.');
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = langMap[currentLang] || 'pt-BR';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    console.log('🎤 Você disse:', transcript);
    sendToKAI(transcript);
  };

  recognition.onerror = (e) => {
    const t = translations[currentLang] || translations.pt;
    alert(`${t.voice_error || 'Erro'}: ${e.error}`);
  };

  recognition.start();
  speakText(KAI.listening || 'Fale agora! A KAI está ouvindo...');
}

// Envia texto para a KAI
async function sendToKAI(prompt) {
  const userLevel = document.getElementById('userLevel').value;
  const output = document.getElementById('output');
  output.textContent = 'Processando pedido...';

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, userLevel })
    });

    const data = await res.json();
    editor.setValue(data.code);
    output.textContent = 'Código gerado com sucesso!';
    speakText('Código gerado com sucesso!');
  } catch (err) {
    output.textContent = 'Erro ao conectar com a KAI.';
    speakText('Não consegui gerar agora. Tente novamente.');
  }
}

// Text-to-Speech: KAI fala
function speakText(text) {
  if (!window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langMap[currentLang] || 'pt-BR';
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  utterance.volume = 1.0;

  window.speechSynthesis.cancel(); // Evita sobreposição
  window.speechSynthesis.speak(utterance);
}

// Inicializa tudo ao carregar
window.onload = () => {
  loadTranslations();
};
