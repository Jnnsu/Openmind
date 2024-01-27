import {
  BadgeButton,
  Reaction
} from 'components';
import * as S from './FeedCardStyle';
import { cardCreatedDate } from 'utils/CardCreatedDate';

export default function (data, subjectData){
  const {id: qusetionId, content, like, dislike, createdAt, answer} =data;
  const [subjectName, subjectImg] = subjectData;

  return (
    <S.CardContainer>
      <S.Header>
        <BadgeButton isAnswered={answer} />
      </S.Header>
      <S.Question>
        <S.QuestionTime>
         질문 · {cardCreatedDate(createdAt)}
        </S.QuestionTime>
        <S.QuestionContent>{content}</S.QuestionContent>
      </S.Question>
      {answer ? (
        <S.AnswerContainer>
          <S.ProfileImage src={subjectImg}/>
          <S.AnswerBox>
            <S.AnswerProfile>
              <S.AnswerName>{subjectName}</S.AnswerName>
              <S.AnswerDate>
                {cardCreatedDate(answer['createdAt'])}
              </S.AnswerDate>
            </S.AnswerProfile>
            { answer[ isRejected ] ? (
              <S.RefuseContent>답변 거절</S.RefuseContent>
            ):(
            <S.AnsweredContent>{answer['content']}</S.AnsweredContent>
          )}
          </S.AnswerBox>
        </S.AnswerContainer>
      ) : null }
      <S.Foooter>
        <S.FooterIcons>
        <Reaction like={like} dislike={dislike} /> 
        {/* questionId={questionId} */}
        </S.FooterIcons>
      </S.Foooter>
    </S.CardContainer>
  );

};