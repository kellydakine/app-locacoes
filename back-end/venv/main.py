from fastapi import FastAPI, Query

app = FastAPI()

acomodacoes = [
    {
        "id": 1,
        "nome": "Apartamento naBeira-Mar",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 620,
        "localizacao": "Florianópolis, SC"
    },
    {
        "id": 2,
        "nome": "Chalé na Serra Catarinense",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 580,
        "localizacao": "Urubici, SC"
    },
    {
        "id": 3,
        "nome": "Apartamento no Centro de Curitiba",
        "imagem": "https://via.placeholder.com/300",
        "preco_noite": 420,
        "localizacao": "Curitiba, PR"
    },
]

@app.get("/acomodacoes")
def listar_acomodacoes(cidade: str = Query(None)):
    if cidade:
        return [a for a in acomodacoes if cidade.lower() in a["localizacao"].lower()]
    return acomodacoes

@app.get("/acomodacoes/{id}")
def detalhes_acomodacao(id: int):
    return next((a for a in acomodacoes if a["id"] == id), {"erro": "Acomodação não encontrada"})
