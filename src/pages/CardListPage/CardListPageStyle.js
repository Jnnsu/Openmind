import styled from 'styled-components';

export const CardListContainer = styled.div`
  background: var(--Grayscale-20);
  width: 100%;
  padding: 40px 130px;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 20px 24px;
  }
`;

export const CardListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 146px;
  height: 57px;
  cursor: pointer;
`;

export const CardListTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 3.5rem 0;
  gap: 12px;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const CardListTitle = styled.h1`
  color: var(--Grayscale-60);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 375px) {
    font-size: 24px;
  }
`;

export const CardListMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* justify-content: space-between; */
  gap: 20px;

  @media (max-width: 949px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  width: calc(25%-10px);
  min-width: 186px;
  max-width: 220px;
  margin-bottom: 20px;
  height: 187px;
  background: var(--Grayscale-10);
  border: 1px solid var(--Grayscale-40);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: calc(33.33%-10px);
  }

  @media (min-width: 375px) {
    width: 100%;
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 60px;
    border-radius: 50%;
  }
`;

export const CardNickname = styled.div`
  color: var(--Grayscale-60);
  font-size: 20px;
  margin-top: 12px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Grayscale-40);

  div {
    font-size: 16px;
  }
`;

export const ReceiveQuestion = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 3px;
`;

export const CardListFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

export const CardPagenation = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;

  img {
    width: 40px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    flex: 1;
    color: var(--Grayscale-40);

    :active {
      color: var(--Brown-40);
    }
  }
`;
