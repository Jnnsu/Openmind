import * as S from './FeedCardSectionStyle';
import FeedCard from './FeedCard';

export default function QuestionCardContainer({ results}) {
  console.log(results)
  // const questionCountIndicator = results.length
  //   ? `${results.length}개의 질문이 있습니다`
  //   : '아직 질문이 없습니다';

  return (
    <>
      <S.CardContainer>
        {/* <S.CountQuestion>
          <img src="./images/Messages.svg" alt="메세지 아이콘" />
          <span>{questionCountIndicator}</span>
        </S.CountQuestion> */}
        {results ? (
          <S.QuestionList>
            <FeedCard key={results.id} question={results.content} />
          </S.QuestionList>
        ) : (
          <img src="./images/empty.png" alt="질문 없을때 아이콘" />
        )}
      </S.CardContainer>
    </>
  );
}
