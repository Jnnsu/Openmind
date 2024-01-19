import styled from 'styled-components';

const TYPE = {
  question: {
    text: '질문 받기',
    defaultBackground: '--Brown-40',
    defaultBorder: '',
    color: '--Grayscale-10',
    focusBorder: '--Brown-50',
    hoverBackground: '--Brown-40',
    hoverBorder: '--Brown-50',
    activeBackground: '--Brown-50',
    activeBorder: 'none',
    disabledBackground: '--Brown-30',
    disabledBorder: 'none',
  },

  answer: {
    text: '답변하러 가기',
    defaultBackground: '--Brown-10',
    defaultBorder: '--Brown-40',
    color: '--Brown-40',
    focusBorder: '--Brown-40',
    hoverBackground: '--Brown-10',
    hoverBorder: '--Brown-40',
    activeBackground: '--Brown-20',
    activeBorder: '--Brown-40',
    disabledBackground: '--Brown-10',
    disabledBorder: '--Brown-30',
  },
};

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 1.6rem;
  line-height: 22px;
  cursor: pointer;

  @media (max-width: 767px) {
  }
`;

const ReceiveQuestionButton = styled(Button)`
  background: ${props => props.theme.colorList['--Brown-40']};
  color: ${props => props.theme.colorList['--Grayscale-10']};

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
`;

const ReplyButton = styled(Button)`
  background: ${props => props.theme.colorList['--Brown-10']};
  border: 1px solid ${props => props.theme.colorList['--Brown-40']};
  color: ${props => props.theme.colorList['--Brown-40']};

  &:focus-within {
    border: 2px solid ${props => props.theme.colorList['--Brown-40']};
  }

  &:hover {
    background-color: ${props => props.theme.colorList['--Brown-10']};
    border: 2px solid ${props => props.theme.colorList['--Brown-40']};
  }

  &:active {
    background-color: ${props => props.theme.colorList['--Brown-20']};
    border: 2px solid ${props => props.theme.colorList['--Brown-40']};
  }

  &:disabled {
    background-color: ${props => props.theme.colorList['--Brown-10']};
    border: 1px solid ${props => props.theme.colorList['--Brown-30']};
  }
`;

function BoxButton({ type = 'question' }) {
  const buttonList = {
    question: (
      <ReceiveQuestionButton>
        <img
          src="./images/arrow-right-icon-white.png"
          alt="오른쪽 흰색 화살표 아이콘"
        />
        {TYPE[type]['text']}
        <img
          src="./images/arrow-right-icon-white.png"
          alt="오른쪽 흰색 화살표 아이콘"
        />
      </ReceiveQuestionButton>
    ),
    answer: (
      <ReplyButton>
        <img
          src="./images/arrow-right-icon.png"
          alt="오른쪽 갈색 화살표 아이콘"
        />
        {TYPE[type]['text']}
        <img
          src="./images/arrow-right-icon.png"
          alt="오른쪽 갈색 화살표 아이콘"
        />
      </ReplyButton>
    ),
  };

  return buttonList[type];
  // <Button>
  //   <img
  //     src="./images/arrow-right-icon-white.png"
  //     alt="오른쪽 흰색 화살표 아이콘"
  //   />
  //   {TYPE[type.text]}
  //   <img
  //     src="./images/arrow-right-icon-white.png"
  //     alt="오른쪽 흰색 화살표 아이콘"
  //   />
  // </Button>
}

export default BoxButton;
