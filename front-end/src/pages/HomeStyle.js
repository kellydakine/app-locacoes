import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f8fafc;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 12px 20px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;

  &:hover {
    background-color: #2563eb;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 32px;
`;

export const NoResultsMessage = styled.p`
  color: #9ca3af;
  font-size: 18px;
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
`;
