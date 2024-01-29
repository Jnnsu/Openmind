import { useContext } from 'react';
import * as S from './NoQuestionBoxStyle';
import { ReactComponent as NoQuestion } from 'public/images/empty.png';
import { ThemeContext } from 'styled-components';

export default function NoQusetionBox(){
  const theme = useContext(ThemeContext);

  return(
    <S.Container>
      <NoQuestion />
    </S.Container>
  )
}