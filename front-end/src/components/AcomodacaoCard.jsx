/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardLocation,
  CardPrice,
  FavoriteButton,
  HeartIcon,
} from "./AcomodacaoCardStyle";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function AcomodacaoCard({ acomodacao, onFavorite, isFavorite }) {
  return (
    <CardContainer>
      <Link to={`/acomodacao/${acomodacao.id}`}>
        <CardImage
          src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={acomodacao.nome}
        />
      </Link>
      <CardContent>
        <CardTitle>{acomodacao.nome}</CardTitle>
        <CardLocation>{acomodacao.localizacao}</CardLocation>
        <CardPrice>R$ {acomodacao.preco_noite}/noite</CardPrice>
        <FavoriteButton
          onClick={() => onFavorite(acomodacao.id)}
          aria-label="Favoritar acomodação"
        >
          {isFavorite ? (
            <HeartIcon>
              <FaHeart color="red" />
            </HeartIcon>
          ) : (
            <HeartIcon>
              <FaRegHeart color="#ddd" />
            </HeartIcon>
          )}
          Favoritar
        </FavoriteButton>
      </CardContent>
    </CardContainer>
  );
}
