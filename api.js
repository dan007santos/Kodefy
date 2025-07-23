// API Endpoints para Kodefy
// Arquivo de configuração para futura implementação de backend

const API_CONFIG = {
    AI_ENDPOINT: '/api/ai',
    EXECUTE_ENDPOINT: '/api/execute',
    SAVE_ENDPOINT: '/api/save'
};

// Estrutura para endpoint de IA
const aiEndpoint = {
    method: 'POST',
    path: '/api/ai',
    description: 'Gerar código usando IA',
    parameters: {
        prompt: 'string - Descrição do que gerar',
        language: 'string - Linguagem de programação',
        context: 'string - Contexto adicional (opcional)'
    },
    response: {
        code: 'string - Código gerado',
        explanation: 'string - Explicação do código',
        success: 'boolean - Status da operação'
    }
};

// Estrutura para endpoint de execução
const executeEndpoint = {
    method: 'POST', 
    path: '/api/execute',
    description: 'Executar código no servidor',
    parameters: {
        code: 'string - Código para executar',
        language: 'string - Linguagem de programação',
        input: 'string - Input para o programa (opcional)'
    },
    response: {
        output: 'string - Saída do programa',
        error: 'string - Mensagem de erro (se houver)',
        executionTime: 'number - Tempo de execução em ms',
        success: 'boolean - Status da execução'
    }
};

// Estrutura para endpoint de salvamento
const saveEndpoint = {
    method: 'POST',
    path: '/api/save', 
    description: 'Salvar projeto',
    parameters: {
        name: 'string - Nome do projeto',
        code: 'string - Código fonte',
        language: 'string - Linguagem',
        description: 'string - Descrição (opcional)'
    },
    response: {
        id: 'string - ID do projeto salvo',
        url: 'string - URL para acessar o projeto',
        success: 'boolean - Status da operação'
    }
};

// Configuração de CORS para desenvolvimento
const corsConfig = {
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: ['Content-Type', 'Authorization']
};

// Exemplo de implementação futura com Express.js:
/*
const express = require('express');
const app = express();

app.use(express.json());
app.use(cors(corsConfig));

app.post('/api/ai', async (req, res) => {
    try {
        const { prompt, language } = req.body;
        const code = await generateCodeWithAI(prompt, language);
        res.json({ code, success: true });
    } catch (error) {
        res.status(500).json({ error: error.message, success: false });
    }
});

app.post('/api/execute', async (req, res) => {
    try {
        const { code, language } = req.body;
        const result = await executeCode(code, language);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message, success: false });
    }
});

app.listen(3000, () => {
    console.log('Kodefy API rodando na porta 3000');
});
*/

module.exports = {
    API_CONFIG,
    aiEndpoint,
    executeEndpoint,
    saveEndpoint,
    corsConfig
};
