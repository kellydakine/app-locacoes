import { useEffect, useState } from "react";
import { getAcomodacoes } from "../services/api";
import AcomodacaoCard from "../components/AcomodacaoCard";
import {
  Input,
  Button,
  PageContainer,
  CardGrid,
  NoResultsMessage,
} from "./HomeStyle";

export default function Home() {
  const [acomodacoes, setAcomodacoes] = useState([]);
  const [cidade, setCidade] = useState("");
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  useEffect(() => {
    getAcomodacoes(cidade).then(setAcomodacoes);
  }, [cidade]);

  const findByCity = () => {
    if (!cidade) return;
    getAcomodacoes(cidade).then(setAcomodacoes);
  };

  const toggleFavorite = (id) => {
    const novosFavoritos = favoritos.includes(id)
      ? favoritos.filter((fav) => fav !== id)
      : [...favoritos, id];
    setFavoritos(novosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
  };

  return (
    <PageContainer>
      <Input
        type="text"
        placeholder="Digite a cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        aria-label="Buscar por cidade"
      />
      <Button
        onClick={findByCity}
        aria-label="Buscar acomodações na cidade"
      >
        Buscar
      </Button>

      {acomodacoes.length === 0 && cidade !== "" && (
        <NoResultsMessage>
          Não foram encontrados resultados para essa pesquisa
        </NoResultsMessage>
      )}

      <CardGrid>
        {acomodacoes.map((a) => (
          <AcomodacaoCard
            key={a.id}
            acomodacao={a}
            onFavorite={toggleFavorite}
            isFavorite={favoritos.includes(a.id)}
          />
        ))}
      </CardGrid>
    </PageContainer>
  );
}
