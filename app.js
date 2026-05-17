// Função de Integração com a API Pública
async function buscarCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Falha na comunicação com a API');
    }
}

// Exporta a função para o Jest conseguir testar
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buscarCep };
}