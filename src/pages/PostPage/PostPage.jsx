import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SharedButton } from "../../components/Button/ShareButton/ShareButtonStyle";
import * as S from "./PostPageStyle"
import { getSubjectQustion } from "../../api/api";
import { FloatButton } from "../../components/Button/FloatingButton/FloationgButtonStyle";

//한 번에 로드되는 항목 수
const LIMIT = 5;

export default function Post() {
  const location = useLocation();
  const navigate = useNavigate();
  const subjectId = location.pathname.split('/')[2];
  const option = { visible: true, filter: true };
  const target = useRef();
  const [hasNext, setHasNext] = useState(true);
  const offset = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);
  const [subjectName, setSubjectName] = useState();
  const [subjectImg, setSubjectImg] = useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const [questionData, setQuestionData] = useState({
    data: [],
  });

  //모달띄우는 버튼
  const handleModalQuestion = () => {
    setIsShowModal(!isShowModal);
  };

  const handleFeedCardSection = async (id, limit, offset) => {
    setIsLoading(true);
    try{
      const result = await getSubjectQustion(id, limit, offset.current);
      const { count, next, results: questionData } = result;
      setQuestionData((prevData) => ({
        data: [...prevData.data, ...questionData],
      }));
      setTotal(count);
      setHasNext(next);
    }catch(err){
      console.log(err);
      navigate('/');
    }finally{
      offset.current += limit;
      setIsLoading(false);
    }
  };

  const observeCallback = (entries) => {
    if (isLoading) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting){
        handleFeedCardSection(subjectId, LIMIT, offset);
      }
    });
  };

  const observer = new IntersectionObserver(observeCallback, {
    threshold: 0.2,
  });

  useEffect(()=> {
    observer.observe(target.current);
  }, [location, offset]);


  return (
  <>
  <S.Header>
    <S.HeaderImage />
    <S.LogoAndProFileAndShare>
      <img className="logo" src="/images/logo.png" alt="오픈마인드 로고" />
      <img 
        className="profileImageContainer" 
        src={subjectImg}
        alt="프로필 이미지"
      />
      <h1 className="profileNameContainer">{subjectName}</h1> 
      <SharedButton />
    </S.LogoAndProFileAndShare>
  </S.Header>
  <S.MainContainer>
    <S.FeedCardSection>
      total ={total}
      data = {questionData.data}
      subjectData = {[subjectName, subjectImg]}
    </S.FeedCardSection>
    <FloatButton
      className="question-write-button"
      type="button"
      onClick={handleModalQuestion}
      >
      질문 작성하기
    </FloatButton>
    <FloatButton
      className='question-write-button-mobile'
      type="button"
      onClick={handleModalQuestion}
      >
      질문 작성
    </FloatButton>
    {isShowModal && <ModalQustion handleClose={handleModalQuestion}/>}
    {/* ModalQustion은 임시 이름, 모달창 임포트해서 쓸 것 */}
  </S.MainContainer>
  </>);
}


