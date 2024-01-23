import styled from 'styled-components';
import BadgeButton from '../Button/BadgeButton';
import Kebab from '../Button/KebabButton';
import cardCreatedDate from '../../utils/cardCreatedDate';
import Answer from './AnswerSample';
import NoQuestion from './NoQuestion';
import Reaction from './Reaction';

export default function Card({ question }) {
  const testDate = Date.now();
  const { createdAt, content, answer, like, dislike } = question;

  return (
    <FeedCardContainer>
      <CardTop>
        <BadgeButton isAnswered={answer} />
        <Kebab />
      </CardTop>
      <CardCreatedDateAndQuestion>
        <span>질문 · {cardCreatedDate(createdAt)}</span>
        <h3>{content}</h3>
      </CardCreatedDateAndQuestion>
      <Answer />
      <CardFooter>
        <Reaction like={like} dislike={dislike} />
        {/* like={like} dislike={dislike} */}
      </CardFooter>
    </FeedCardContainer>
  );
}

const FeedCardContainer = styled.div`
  width: 684px;
  height: auto;
  background: var(--Grayscale-10);
  box-shadow: var(--Shadow-1pt);
  border-radius: 16px;
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardCreatedDateAndQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;

  & span {
    color: var(--Grayscale-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }

  & h3 {
    align-self: stretch;

    color: var(--Grayscale-60);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;
