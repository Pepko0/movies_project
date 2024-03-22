import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  max-width: 100%;
  height: 94px;
  color: white;
  padding: 0 293px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
`;
export const StyledSearch = styled.div`
  // border: solid;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const StyledItems = styled.div`
  //  border: solid;
  height: 70px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
`;

export const Styledlink = styled.a`
  width: 220px;
  height: 48px;
  font-size: 24px;
  line-height: 40px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  margin-right: 20px;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const StyledButton = styled.button`
  width: 120px;
  height: Fixed (48px) px;
  padding: 8px 24px 8px 24px;
  border-radius: 24px;
  border: solid 1px;
  background-color: transparent;
  color: white;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;
