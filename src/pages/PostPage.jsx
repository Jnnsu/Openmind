import { useState, useEffect, useRef, Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Feed, //card, profileimg, question, questioncardcontainer, reaction
  Button, //sharebutton, floatingbutton, badgebutton 
} from 'src\components'
import * as Styled from "./PostPageStyle"
import { getSubjectsQuestion } from 'api/api';

//한 번에 로드되는 항목 수
const LIMIT = 5;

export default function Post() {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const { isOpen, openModal, closeModal } = useModal();
  const option = { visible: true, filter: true };
  const target = useRef();
  const [hasNext, setHasNext] = useState(true);
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [subjectName, setSubjectName] = useState('');
  const [subjectImg, setSubjectImg] = useState('');
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  //질문목록 데이터 호출 함수
  function handleFeedCardSelection(id, limit, offset){
    setIsLoading(true);
    try {
      //api 호출
      getSubjectsQuestion(id, limit, offset.current).then((result)=>{
        const { count, next, results: questionData } = result;
        //데이터 업데이트
        setQuestionData((prevData)=>({
          data: [...prevData.data, ...questionData],
        }));
        setTotal(count);
        setHasNext(next);
      });
    } catch(err) {
      console.log(err);
      //오류처리 및 리다이렉트
    } finally {
      offset.current +=limit;
      setIsLoading(false);
    }
  } 


  return (
  <>
  {/*헤더 컴포넌트 */}
  <PostHeader 
    id = {subjectId}
    setterSubjectName = {setSubjectName}
    setterSubjectImg = {setSubjectImg}
    filter = {Option.filter}
  />
  <MainContainer>


  </MainContainer>

  </>);
}


