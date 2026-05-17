# 📍 Consulta de CEP - Integração ViaCEP

https://luluzin2025.github.io/bootcamp-intermediario/

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

## 💻 Sobre o Projeto

Este projeto é a entrega intermediária do Bootcamp de Desenvolvimento. Trata-se de uma aplicação web responsiva e assíncrona que permite aos usuários consultar endereços completos de todo o Brasil digitando apenas o CEP. 

O sistema consome os dados da **API pública do ViaCEP** e exibe as informações na tela em tempo real, contando também com tratamento de erros (como CEPs inválidos ou inexistentes) e testes automatizados para garantir a estabilidade da aplicação.

## ✨ Funcionalidades

- [x] Interface amigável para digitação do CEP.
- [x] Requisição assíncrona (`async/await` e `fetch`) para a API do ViaCEP.
- [x] Exibição do Logradouro, Bairro, Cidade e Estado dinamicamente no HTML.
- [x] Tratamento de erros para respostas falhas da API ou formato incorreto.
- [x] Testes de integração utilizando a biblioteca **Jest** para validar o consumo dos dados.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando o seguinte conjunto de tecnologias:

- **HTML5 e CSS3:** Estruturação e estilização da interface do usuário.
- **JavaScript (ES6+):** Lógica de programação e manipulação do DOM.
- **Node.js:** Ambiente de execução para gerenciamento de pacotes.
- **Jest:** Framework de testes em JavaScript focado em simplicidade.
- **Git e GitHub:** Versionamento de código e hospedagem.

## 📁 Estrutura de Arquivos

A organização do projeto está dividida da seguinte forma:

```text
📦 bootcamp-intermediario
 ┣ 📂 node_modules/      # Dependências do projeto (criado pelo npm)
 ┣ 📜 index.html         # Página principal da aplicação com a interface
 ┣ 📜 app.js             # Lógica principal e chamadas para a API
 ┣ 📜 app.test.js        # Arquivo contendo os testes unitários/integração
 ┣ 📜 package.json       # Configurações do projeto e scripts do Node
 ┣ 📜 package-lock.json  # Árvore de dependências exatas
 ┗ 📜 README.md          # Documentação do projeto
