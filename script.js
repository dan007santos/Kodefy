let editor;

// Carrega o Monaco Editor
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor @0.33.0/min/vs' }});
window.MonacoEnvironment = { getWorkerUrl: () => proxy };

require(['vs/editor/editor.main'], () => {
  editor = monaco.editor.create(document.getElementById('editor'), {
    value: '# Comece a codar!\nprint("Olá, Kodefy!")',
    language: 'python',
    theme: 'vs-light',
    automaticLayout: true
  });
});

// Atualiza linguagem no editor
document.getElementById('language').addEventListener('change', (e) => {
  const lang = e.target.value;
  monaco.editor.setModelLanguage(editor.getModel(), lang);
});

// Função temporária (será conectada ao backend depois)
function runCode() {
  const output = document.getElementById('output');
  output.textContent = 'Backend em construção... Use Replit por enquanto!';
}
