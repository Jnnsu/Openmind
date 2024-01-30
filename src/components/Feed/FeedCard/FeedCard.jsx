import * as S from './FeedCardStyle';
import cardCreatedDate from '../../../utils/CardCreatedDate';
import Reaction from '../Reaction/Reaction';

export default function Card({ subject, question }) {
  const { createdAt, content, answer, like , dislike } = question;
  const isAnswered = !!answer;
  const color = isAnswered ? 'brown' : 'gray';
  const text = isAnswered ? '답변 완료' : '미답변';
  console.log(color, text);

  return (
    <S.FeedCardContainer>
      <S.CardTop>
        <S.BadgeButton $color={color}>{text}</S.BadgeButton>
      </S.CardTop>
      <S.CardCreatedDateAndQuestion>
        <span>질문 · {cardCreatedDate(createdAt)}</span>
        <h3>{content}</h3>
      </S.CardCreatedDateAndQuestion>
      {answer &&
      <S.QuestionAnswer>
        <img
          className="main__profileImage"
          src={subject?.imageSource}
          alt="프로필 사진"
        />
        <S.AnswerContainer>
          <S.AnswerElapsedTime>
            <span className="main__profileName">{subject?.name}</span>
            {isAnswered && (
              <span className="answerElapsedTime">
                {cardCreatedDate(createdAt)}
              </span>
            )}
          </S.AnswerElapsedTime>
          {question.answer?.isRejected ? (
            <span className="answerIsRejected">답변 거절</span>
          ) : (
            answer && <span className="answerContent">{answer.content}</span>
          )}
        </S.AnswerContainer>
      </S.QuestionAnswer> }
         
      <S.CardFooter>
        <Reaction like={like} dislike={dislike} />
      </S.CardFooter>
    </S.FeedCardContainer>
  );
}
