import { useState } from 'react';
import { ReactComponent as Edit } from '../../images/Edit.svg';
import { ReactComponent as Rejection } from '../../images/Rejection.svg';
import { ReactComponent as Close } from '../../images/Close.svg';
import cardCreatedDate from '../../utils/CardCreatedDate';
import {
  putQuestionAnswer,
  postQuestionAnswer,
  deleteQuestion,
} from '../../api/api';
import * as S from './QuestionCardStyle';

export default function QuestionCard({
  subject,
  question,
  questionList,
  setQuestionList,
  index,
  setQuestionCount,
  onDeleteItem,
}) {
  const [answerInput, setAnswerInput] = useState(question.answer);
  const [answerModifyId, setAnswerModifyId] = useState();

  const handleTextareaOnChange = e => {
    setAnswerInput(e.target.value);
  };

  const handleSelectAnswerModify = () => {
    if (answerModifyId === question.id) {
      setAnswerModifyId(null);
    } else {
      setAnswerModifyId(question.id);
    }
  };

  const handleSelectQuestionDelete = async () => {
    const result = await deleteQuestion(question.id);
    if (result) {
      return;
    }
    onDeleteItem(question.id);
    setQuestionCount(preQuestionCount => preQuestionCount - 1);
  };

  const handleSelectAnswerReject = async () => {
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
        questionId: question.id,
        content: '답변 거절',
        isRejected: true,
        team: '3-3',
      };

      const answer = await postQuestionAnswer(question.id, questionAnswer);
      question.answer = answer;
      setAnswerInput(questionAnswer.content);
    }

    setAnswerModifyId(null);
    setQuestionList([
      ...questionList.slice(0, index),
      question,
      ...questionList.slice(index + 1),
    ]);
  };

  const handleAnswerCompleteButtonOnClick = async e => {
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

    setAnswerModifyId(null);
    setQuestionList([
      ...questionList.slice(0, index),
      question,
      ...questionList.slice(index + 1),
    ]);
  };

  const getAnswerContent = () => {
    const answer = question.answer;
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
            onChange={handleTextareaOnChange}
          />
          <S.AnswerCompleteButton
            type="button"
            onClick={handleAnswerCompleteButtonOnClick}
            disabled={!answerInput}
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
      isBlue: false,
      imagePath: <Edit fill="" />,
      imageBluePath: <Edit fill="var(--Blue-50)" />,
      imageAlt: '수정하기 아이콘',
      onClick: handleSelectAnswerModify,
    },
    {
      text: '질문삭제',
      isBlue: false,
      imagePath: <Close fill="" />,
      imageBluePath: <Close fill="var(--Blue-50)" />,
      imageAlt: '질문삭제 아이콘',
      onClick: handleSelectQuestionDelete,
    },
    {
      text: '답변거절',
      isBlue: question.answer?.isRejected,
      imagePath: <Rejection fill="" />,
      imageBluePath: <Rejection fill="var(--Blue-50)" />,
      imageAlt: '답변거절 아이콘',
      onClick: handleSelectAnswerReject,
    },
  ];

  const isAnswered = !!question.answer;
  const color = isAnswered ? 'brown' : 'gray';
  const text = isAnswered ? '답변 완료' : '미답변';

  return (
    <S.QuestionCardContainer>
      <S.QuestionStatus>
        <S.BadgeButton $color={color}>{text}</S.BadgeButton>
        <S.Kebab
          menuItem={isAnswered ? menuItem : menuItem.slice(1)}
          question={question}
        />
      </S.QuestionStatus>
      <S.QuestionElapsedTime>
        <span className="questionElapsedTime">
          질문 · {cardCreatedDate(question.createdAt)}
        </span>
        <h3 className="question">{question.content}</h3>
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
                {cardCreatedDate(question.answer.createdAt)}
              </span>
            )}
          </S.AnswerElapsedTime>
          {question.answer?.isRejected ? (
            <span className="answerIsRejected">답변 거절</span>
          ) : (
            getAnswerContent(question)
          )}
        </S.AnswerContainer>
      </S.QuestionAnswer>
      <S.Reaction like={question.like} dislike={question.dislike} />
    </S.QuestionCardContainer>
  );
}
