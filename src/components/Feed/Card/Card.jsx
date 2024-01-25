import * as S from './CardStyle';
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
    <S.FeedCardContainer>
      <S.CardTop>
        <BadgeButton isAnswered={answer} />
        <Kebab />
      </S.CardTop>
      <S.CardCreatedDateAndQuestion>
        <span>질문 · {cardCreatedDate(createdAt)}</span>
        <h3>{content}</h3>
      </S.CardCreatedDateAndQuestion>
      <Answer />
      <S.CardFooter>
        <Reaction like={like} dislike={dislike} />
        {/* like={like} dislike={dislike} */}
      </S.CardFooter>
    </S.FeedCardContainer>
  );
}
