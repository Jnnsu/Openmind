import styled from 'styled-components';

const BoxButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;

  @media (max-width: 767px) {
  }
`;

export default BoxButton;
