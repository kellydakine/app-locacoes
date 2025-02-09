from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

acomodacoes = [
    {
        "id": 1,
        "nome": "Apartamento na Beira-Mar",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 300,
        "localizacao": "Florianópolis, SC"
    },
    {
        "id": 2,
        "nome": "Chalé na Serra Catarinense",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 550,
        "localizacao": "Urubici, SC"
    },
    {
        "id": 3,
        "nome": "Apartamento Moderno em Curitiba",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 360,
        "localizacao": "Curitiba, PR"
    }
]

@app.get("/acomodacoes")
def listar_acomodacoes(cidade: str = Query(None)):
    if cidade:
        return [a for a in acomodacoes if cidade.lower() in a["localizacao"].lower()]
    return acomodacoes

@app.get("/acomodacoes/{id}")
def detalhes_acomodacao(id: int):
    return next((a for a in acomodacoes if a["id"] == id), {"erro": "Acomodação não encontrada."})
