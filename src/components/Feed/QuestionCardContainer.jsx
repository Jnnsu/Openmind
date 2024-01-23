import styled from 'styled-components';
import Card from './Card';

export default function QuestionCardContainer({ results }) {
  const testResults = [
    {
      id: 3608,
      subjectId: 2355,
      content:
        '연결이 되지 않아 삐 소리 후 음성 사서함으로 연결되며 통화료가 부과됩니다.',
      like: 0,
      dislike: 1,
      createdAt: '2024-01-17T23:52:55.912033Z',
      answer: null,
    },
    {
      id: 3607,
      subjectId: 2355,
      content: '존재하지 않는 번호입니다.',
      like: 0,
      dislike: 1,
      createdAt: '2024-01-17T23:30:12.210141Z',
      answer: null,
    },
    {
      id: 3606,
      subjectId: 2355,
      content: '찾을 수 없는 번호입니다.',
      like: 0,
      dislike: 1,
      createdAt: '2024-01-17T23:20:23.056460Z',
      answer: null,
    },
  ];

  const countQuestionString = testResults.length
    ? `${testResults.length}개의 질문이 있습니다`
    : '아직 질문이 없습니다';

  return (
    <>
      <CardContainer>
        <CountQuestion>
          <img src="./images/Messages.svg" alt="메세지 아이콘" />
          <span>{countQuestionString}</span>
        </CountQuestion>
        <QuestionList>
          {testResults.map(element => (
            <Card key={element.id} question={element} />
          ))}
        </QuestionList>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  color: var(--brown-10);
  border-radius: 16px;
  border: 1px solid var(--Brown-30);
  background: var(--Brown-10);
`;

const CountQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  & span {
    color: var(--Brown-40);
    font-feature-settings:
      'clig' off,
      'liga' off;
    font-family: Actor;
    font-size: 20px;
    line-height: 25px; /* 125% */
  }
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;
