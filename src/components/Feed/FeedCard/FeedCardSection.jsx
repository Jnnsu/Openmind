import { useContext } from "react";
import { ThemeContext } from "styled-components";

export default function FeedCardSection ( 
  total, 
  data, 
  subjectData, 
  setTotal, 
  setQuestionData,
  {results =[]}
  ) {
    const theme = useContext( ThemeContext );
    const questionCountIndicator = results.length
    ? `${results.length}개의 질문이 있습니다`
    : '아직 질문이 없습니다';
    return (
      <CardContainer>
        <CountContainer>
          <img src="./images/Messages.svg" alt="메세지 아이콘" />
          <span>{questionCountIndicator}</span>
        </CountContainer>
      </CardContainer>
    )
// 여기는 일단 보류..



}