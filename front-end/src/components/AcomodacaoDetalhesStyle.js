import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: auto;
`;

export const DetailImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`;

export const DetailContent = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const DetailTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const DetailLocation = styled.p`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
`;

export const DetailPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const DetailDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
