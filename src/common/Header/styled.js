import styled from "styled-components";

export const StyledHeader = styled.section`
  background-color: ${({ theme }) => theme.color.black};
  max-width: 100%;
  height: 94px;
  color: white;

  @media(max-width: ${({theme}) => theme.media.tablet}){
    height: 142px;
  }
`;

export const StyledUnit = styled.div`
    max-width: 1600px;
    height: 94px;
   // border: solid;
    margin: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0px;
    height: 142px;
    align-items: center;
  }

`;

export const StyledItems = styled.div`
  // border: solid;
  height: 70px;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;

  @media(max-width: ${({ theme }) => theme.media.tablet}){
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
`;


export const StyledSearch = styled.div`
  // border: solid;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
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
export const StyledContainerButton = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    `;
  

export const StyledButton = styled.button`
  border: 1px solid;
  width: 120px;
  height: Fixed (48px) px;
  padding: 8px 24px 8px 24px;
  border-radius: 24px;
  background-color: transparent;
  color: white;
  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;