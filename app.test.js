const { buscarCep } = require('./app.js');

// Simula a API para o teste não depender da internet e rodar rápido
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({
            logradouro: "Praça da Sé",
            bairro: "Sé",
            localidade: "São Paulo"
        }),
    })
);

describe('Teste de Integração - API ViaCEP', () => {
    it('deve comunicar com a API e retornar os dados do endereço', async () => {
        const dados = await buscarCep('01001000');
        
        expect(fetch).toHaveBeenCalledWith('https://viacep.com.br/ws/01001000/json/');
        expect(dados.localidade).toBe('São Paulo');
        expect(dados.logradouro).toBe('Praça da Sé');
    });
});