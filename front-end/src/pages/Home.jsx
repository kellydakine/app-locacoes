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
    getAcomodacoes().then(setAcomodacoes);
  }, []);

  const buscarPorCidade = () => {
    getAcomodacoes(cidade).then((data) => {
      setAcomodacoes(data);
    });
  };

  const favoritar = (id) => {
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
      />
      <Button onClick={buscarPorCidade}>Buscar</Button>

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
            favoritar={favoritar}
            favoritos={favoritos}
          />
        ))}
      </CardGrid>
    </PageContainer>
  );
}
