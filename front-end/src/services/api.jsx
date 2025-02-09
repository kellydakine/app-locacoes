const API_URL = "http://localhost:8000/acomodacoes";

export async function getAcomodacoes(cidade = "") {
  const response = await fetch(`${API_URL}?cidade=${cidade}`);
  return response.json();
}

export async function getAcomodacaoById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}
