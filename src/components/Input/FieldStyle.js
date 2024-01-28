import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  width: 336px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);

  @media (max-width: 767px) {
    width: 100%;
  }

  &:focus-within {
    border: 1px solid var(--Brown-40);
  }
`;

export const InputField = styled.input`
  flex: 1 0 0;
  color: var(--Grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  line-height: 22px;
`;

export const PersonImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
