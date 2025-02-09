const API_URL = "http://localhost:8000/acomodacoes";

export async function getAcomodacoes(cidade = "") {
  const response = await fetch(`${API_URL}?cidade=${cidade}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar acomodações por cidade.");
  }
  return response.json();
}

export async function getAcomodacaoById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar acomodação.");
  }
  return response.json();
}
