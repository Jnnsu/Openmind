import { useContext } from "react";
import { FeedCard } from "./FeedCard";
import { NoQuestionBox } from "../../NoQuestionBox/NoQuestionBox";
import * as S from "./FeedCardSectionStyle";
import { ThemeContext } from "styled-components";

export default function FeedCardSection ({total, data, subjectData}){
  const theme = useContext(ThemeContext);

  return (
    <S.CardContainer> 
      <S.CountContainer>
        <S.CountContent>
          {total ? `${total}개의 질문이 있습니다` : `아직 질문이 없습니다`}
        </S.CountContent>
      </S.CountContainer>
      {total ? null : <NoQuestionBox />}
      {data.map((data) => {
        return <FeedCard key={data.id} data={data} subjectData={subjectData} />;
      })}
    </S.CardContainer>
  )
}