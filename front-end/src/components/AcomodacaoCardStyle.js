import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
`;

export const CardLocation = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 8px;
`;

export const CardPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #3b82f6;
`;

export const FavoriteButton = styled.button`
  margin-top: 8px;
  padding: 12px 20px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

export const HeartIcon = styled.span`
  margin-right: 8px;
`;
