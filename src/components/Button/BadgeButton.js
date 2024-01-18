import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${props =>
    props.isAnswered
      ? props.theme.colorList['--Brown-40']
      : props.theme.colorList['--Grayscale-40']};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px solid
    ${props =>
      props.isAnswered
        ? props.theme.colorList['--Brown-40']
        : props.theme.colorList['--Grayscale-40']};
  background: ${props => props.theme.colorList['--Grayscale-10']};
`;

function BadgeButton({ isAnswered }) {
  return (
    <Button isAnswered={isAnswered}>
      {isAnswered ? '답변 완료' : '미답변'}
    </Button>
  );
}

export default BadgeButton;
