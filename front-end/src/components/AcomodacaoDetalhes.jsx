import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAcomodacaoById } from "../services/api";
import {
  Button,
  PageContainer,
  DetailContainer,
  DetailImage,
  DetailContent,
  DetailTitle,
  DetailLocation,
  DetailPrice,
  DetailDescription,
} from "./AcomodacaoDetalhesStyle";

export default function AcomodacaoDetalhes() {
  const [acomodacao, setAcomodacao] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAcomodacaoById(id)
      .then((data) => {
        setAcomodacao(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Carregando detalhes...</div>;

  return (
    <PageContainer>
      {acomodacao ? (
        <DetailContainer>
          <DetailImage
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={acomodacao.nome}
          />
          <DetailContent>
            <DetailTitle>{acomodacao.nome}</DetailTitle>
            <DetailLocation>{acomodacao.localizacao}</DetailLocation>
            <DetailPrice>R$ {acomodacao.preco_noite}/noite</DetailPrice>
            <DetailDescription>{acomodacao.descricao}</DetailDescription>
            <Button onClick={() => navigate("/")}>Voltar</Button>{" "}
          </DetailContent>
        </DetailContainer>
      ) : (
        <div>Acomodação não encontrada.</div>
      )}
    </PageContainer>
  );
}
