import styled from 'styled-components';

const TYPE = {
  question: '질문 받기',
  answer: '답변하러 가기',
};

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  background: ${props => props.theme.colorList['--Brown-40']};
  font-size: 1.6rem;
  line-height: 22px;
  color: ${props => props.theme.colorList['--Grayscale-10']};
  cursor: pointer;

  &:focus-within {
    border: 2px solid ${props => props.theme.colorList['--Brown-50']};
  }

  &:hover {
    background-color: ${props => props.theme.colorList['--Brown-40']};
    border: 2px solid ${props => props.theme.colorList['--Brown-50']};
  }

  &:active {
    background-color: ${props => props.theme.colorList['--Brown-50']};
    border: none;
  }

  &:disabled {
    background-color: ${props => props.theme.colorList['--Brown-30']};
    border: none;
  }

  @media (max-width: 767px) {
  }
`;

function BoxButton({ type }) {
  return (
    <Button>
      <img
        src="./images/arrow-right-icon-white.png"
        alt="오른쪽 흰색 화살표 아이콘"
      />
      {TYPE[type]}
      <img
        src="./images/arrow-right-icon-white.png"
        alt="오른쪽 흰색 화살표 아이콘"
      />
    </Button>
  );
}

export default BoxButton;
