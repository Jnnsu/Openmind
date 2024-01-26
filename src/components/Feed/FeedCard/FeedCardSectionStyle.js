import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 684px;
  margin-top: 54px;
  padding: 16px;
  border: 1px solid var(--Brown-30);
  border-radius: 16px;
  background: var(--Brown-10);

  @media (max-width: 1199px) {
    width: 100%;
    max-width: 684px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;