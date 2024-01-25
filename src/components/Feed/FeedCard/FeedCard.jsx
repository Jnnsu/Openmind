import {
  BadgeButton,
  Reaction
} from 'components';
import * as Styled from './FeedCardStyle';
import { CardCreatedDate } from 'utils/CardCreatedDate';

export default function (data, subjectData){
  const {id: qusetionId, content, like, dislike, createdAt, answer} =data;
  const [subjectName, subjectImg] = subjectData;

  return (
    <CardContainer>
      <Header>
        {answer? <CompleteBadge /> : <IncompleteBadge />}
      </Header>
      <Question>
        <QuestionTime>
         질문 · {CardCreatedDate(createdAt)}
        </QuestionTime>
        <QuestionContent>{content}</QuestionContent>
      </Question>
      {answer ? (
        <AnswerContainer>
          <ProfileImage src={subjectImg}/>
          <AnswerBox>
            <AnswerProfile>
              <AnswerName>{subjectName}</AnswerName>
              <AnswerDate>
                {CardCreatedDate(answer['createdAt'])}
              </AnswerDate>
            </AnswerProfile>
            { answer[ isRejected ] ? (
              <RefuseContent>답변 거절</RefuseContent>
            ):(
            <AnsweredContent>{answer['content']}</AnsweredContent>
          )}
          </AnswerBox>
        </AnswerContainer>
      ) : null }
      <Foooter>
        <FooterIcons>
          <Reaction number = {count} questionId={questionId}/>
        </FooterIcons>
      </Foooter>
    </CardContainer>
  );

};