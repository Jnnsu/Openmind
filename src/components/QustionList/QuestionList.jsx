import { useState, useEffect } from 'react';
import {
  getQuestionList,
  putQuestionAnswer,
  postQuestionAnswer,
  deleteQuestion,
} from '../../api/api';
import * as S from './QuestionListStyle';
import cardCreatedDate from '../../utils/CardCreatedDate';
import { ReactComponent as Edit } from '../../images/Edit.svg';
import { ReactComponent as Rejection } from '../../images/Rejection.svg';
import { ReactComponent as Close } from '../../images/Close.svg';

export default function QuestionList({
  subjectId,
  subject,
  questionList,
  setQuestionList,
  setQuestionCount,
}) {
  const [answerModifyId, setAnswerModifyId] = useState();
  const [answerList, setAnswerList] = useState();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [isHasNext, setIsHasNext] = useState();

  const handleTextareaOnChange = (e, questionId) => {
    setAnswerList({ ...answerList, [questionId]: e.target.value });
  };

  const handleSelectAnswerModify = questionId => {
    if (answerModifyId === questionId) {
      setAnswerModifyId(null);
    } else {
      setAnswerModifyId(questionId);
    }
  };

  const handleSelectQuestionDelete = async questionId => {
    await deleteQuestion(questionId);
    setQuestionList(preQuestionList => {
      const deleteIndex = preQuestionList.findIndex(
        element => element.id === questionId,
      );

      return [
        ...preQuestionList.slice(0, deleteIndex),
        ...preQuestionList.slice(deleteIndex + 1),
      ];
    });
    setQuestionCount(preQuestionCount => preQuestionCount - 1);
  };

  const handleSelectAnswerReject = async questionId => {
    const questionIndex = questionList.findIndex(
      element => element.id === questionId,
    );
    const question = questionList[questionIndex];

    if (question.answer) {
      const answer = question.answer;
      const questionAnswer = {
        content: answer.content,
        isRejected: !answer.isRejected,
      };

      const nextAnswer = await putQuestionAnswer(answer.id, questionAnswer);
      question.answer = nextAnswer;
    } else {
      const questionAnswer = {
        questionId: questionId,
        content: '답변을 거절하였습니다.',
        isRejected: true,
        team: '3-3',
      };

      const answer = await postQuestionAnswer(questionId, questionAnswer);
      question.answer = answer;
      answerList[questionId] = questionAnswer.content;
    }

    setAnswerModifyId(null);
    setQuestionList([
      ...questionList.slice(0, questionIndex),
      question,
      ...questionList.slice(questionIndex + 1),
    ]);
  };

  const handleAnswerCompleteButtonOnClick = async (e, question) => {
    const answerValue = e.target.previousElementSibling.value;
    let questionAnswer = {};
    let answer;
    if (question.id === answerModifyId) {
      if (answerValue === question.answer.content) {
        setAnswerModifyId(null);
        return;
      } else {
        questionAnswer = {
          content: answerValue,
          isRejected: false,
        };

        answer = await putQuestionAnswer(question.answer.id, questionAnswer);
      }
    } else {
      questionAnswer = {
        questionId: question.id,
        content: answerValue,
        isRejected: false,
        team: '3-3',
      };

      answer = await postQuestionAnswer(question.id, questionAnswer);
    }

    question.answer = answer;
    const questionIndex = questionList.findIndex(
      element => element.id === question.id,
    );
    setAnswerModifyId(null);
    setQuestionList([
      ...questionList.slice(0, questionIndex),
      question,
      ...questionList.slice(questionIndex + 1),
    ]);
  };

  const handleViewMoreButtonOnClick = async () => {
    setIsLoading(true);
    const result = await getQuestionList(subjectId, offset);
    if (!result) return;
    const { next, results } = result;
    setIsHasNext(!!next);
    setOffset(preOffset => preOffset + 10);
    setQuestionList(preQuestionList => [...preQuestionList, ...results]);

    const questionAnswerList = {};
    results.forEach(element => {
      questionAnswerList[element.id] = element.answer?.content ?? '';
    });
    setAnswerList(preAnswerList => ({
      ...preAnswerList,
      ...questionAnswerList,
    }));
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => {
      const result = await getQuestionList(subjectId);
      if (!result) return;
      const { next, results } = result;
      setIsHasNext(!!next);
      setOffset(preOffset => preOffset + 10);
      setQuestionList(results);

      const questionAnswerList = {};
      results.forEach(element => {
        questionAnswerList[element.id] = element.answer?.content ?? '';
      });
      setAnswerList(questionAnswerList);
    })();
  }, [subjectId, setQuestionList]);

  const getAnswerContent = question => {
    const answer = question?.answer;
    const questionId = question.id;
    const buttonText =
      answerModifyId === questionId ? '수정 완료' : '답변 완료';
    let answerContent;
    if (answer && answerModifyId !== questionId) {
      answerContent = <span className="answerContent">{answer?.content}</span>;
    } else {
      answerContent = (
        <S.AnswerForm>
          <textarea
            className="answerTextarea"
            placeholder="답변을 입력해 주세요"
            defaultValue={answer?.content}
            onChange={e => handleTextareaOnChange(e, question.id)}
          />
          <S.AnswerCompleteButton
            type="button"
            onClick={e => handleAnswerCompleteButtonOnClick(e, question)}
            disabled={!answerList[question.id]}
          >
            {buttonText}
          </S.AnswerCompleteButton>
        </S.AnswerForm>
      );
    }

    return answerContent;
  };

  const menuItem = [
    {
      text: '수정하기',
      imagePath: <Edit fill="" />,
      imageBluePath: <Edit fill="var(--Blue-50)" />,
      imageAlt: '수정하기 아이콘',
      onClick: handleSelectAnswerModify,
    },
    {
      text: '질문삭제',
      imagePath: <Close fill="" />,
      imageBluePath: <Close fill="var(--Blue-50)" />,
      imageAlt: '질문삭제 아이콘',
      onClick: handleSelectQuestionDelete,
    },
    {
      text: '답변거절',
      imagePath: <Rejection fill="" />,
      imageBluePath: <Rejection fill="var(--Blue-50)" />,
      imageAlt: '답변거절 아이콘',
      onClick: handleSelectAnswerReject,
    },
  ];

  return (
    <S.QuestionList>
      {questionList &&
        questionList.map((element, index) => {
          const isAnswered = !!element.answer;
          const color = isAnswered ? 'brown' : 'gray';
          const text = isAnswered ? '답변 완료' : '미답변';

          return (
            <S.QuestionCard key={element.id}>
              <S.QuestionStatus>
                <S.BadgeButton $color={color}>{text}</S.BadgeButton>
                <S.Kebab
                  menuItem={menuItem}
                  questionId={element.id}
                  question={element}
                  answerModifyId={answerModifyId}
                />
              </S.QuestionStatus>
              <S.QuestionElapsedTime>
                <span className="questionElapsedTime">
                  질문 · {cardCreatedDate(element.createdAt)}
                </span>
                <h3 className="question">{element.content}</h3>
              </S.QuestionElapsedTime>
              <S.QuestionAnswer>
                <img
                  className="main__profileImage"
                  src={subject?.imageSource}
                  alt="프로필 사진"
                />
                <S.AnswerContainer>
                  <S.AnswerElapsedTime>
                    <span className="main__profileName">{subject?.name}</span>
                    {isAnswered && (
                      <span className="answerElapsedTime">
                        {cardCreatedDate(element.answer.createdAt)}
                      </span>
                    )}
                  </S.AnswerElapsedTime>
                  {element.answer?.isRejected ? (
                    <span className="answerIsRejected">답변 거절</span>
                  ) : (
                    getAnswerContent(element)
                  )}
                </S.AnswerContainer>
              </S.QuestionAnswer>
              <S.Reaction like={element.like} dislike={element.dislike} />
            </S.QuestionCard>
          );
        })}
      {isHasNext && (
        <S.ViewMoreButton
          onClick={handleViewMoreButtonOnClick}
          disabled={isLoading}
        >
          질문 더 보기
        </S.ViewMoreButton>
      )}
    </S.QuestionList>
  );
}
