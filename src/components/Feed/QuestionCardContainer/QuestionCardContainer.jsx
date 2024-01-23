import * as S from './QuestionCardContainerStyle';
import Card from './Card';

export default function QuestionCardContainer({ results = [] }) {
  const questionCountIndicator = results.length
    ? `${results.length}개의 질문이 있습니다`
    : '아직 질문이 없습니다';

  return (
    <>
      <S.CardContainer>
        <S.CountQuestion>
          <img src="./images/Messages.svg" alt="메세지 아이콘" />
          <span>{questionCountIndicator}</span>
        </S.CountQuestion>
        {results ? (
          <S.QuestionList>
            {results.map(element => (
              <Card key={element.id} question={element} />
            ))}
          </S.QuestionList>
        ) : (
          <img src="./images/empty.png" alt="질문 없을때 아이콘" />
        )}
      </S.CardContainer>
    </>
  );
}
