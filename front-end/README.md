# Projeto de Acomodações

Este projeto consiste em uma aplicação web para exibição de acomodações, com funcionalidades de busca por cidade, exibição de detalhes e possibilidade de favoritar acomodações. A aplicação é dividida em duas partes: **frontend** (React) e **backend** (Python).

## Requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- **Node.js** (recomendado versão 16 ou superior)
- **Python** (recomendado versão 3.x)
- **Pip** (para gerenciar dependências Python)

## Rodando a API (pasta back-end)

Crie um ambiente virtual:
python -m venv venv

Instale as dependências:
pip install fastapi uvicorn

Rode a API:
uvicorn main:app --reload

## Rodando o projeto (pasta front-end)

Instale as dependências:
npm install

Rode o projeto:
npm run dev