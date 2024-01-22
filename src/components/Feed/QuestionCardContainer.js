import styled from 'styled-components';
import Card from './Card';

const countQuestion = '몇개의 질문이 있습니다.';

export default function QuestionCardContainer({ countQuestion, results }) {
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
  return (
    <>
      <CardContainer>
        <CountQuestion>
          <div>
            <img src="./images/empty.png" alt="메세지 아이콘" />
            <span>{countQuestion}</span>
          </div>
        </CountQuestion>
        <div>
          {testResults.map(element => {
            <Card question={element} />;
          })}
        </div>
      </CardContainer>
    </>
  );
}

const CardContainer = styled.div`
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
`;
