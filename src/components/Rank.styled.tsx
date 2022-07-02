import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  height: 100vh;
  padding: 50px 20px;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  */ td,
  th {
    border: none;
  }
  td {
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :hover {
      background-color: lightpink;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
`;

export const StyledButton = styled.button`
  border-radius: 10%;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  background-color: #cce6ff;
  color: #333;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
