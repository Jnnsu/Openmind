import { API } from '../constants';

export const setUserData = async userData => {
  try {
    const response = await fetch(API.SUBJECT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userDataList = await response.json();
    console.log(userDataList);
    return userDataList;
  } catch (error) {
    console.error(`Error during fetch: ${error.message}`);
    return `Error: ${error.message}`;
  }
};

export const getUserDataList = async () => {
  try {
    const response = await fetch(API.SUBJECT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userDataList = await response.json();
    console.log(userDataList);
    return userDataList;
  } catch (error) {
    console.error(`Error during fetch: ${error.message}`);
    return `Error: ${error.message}`;
  }
};

export async function getSubjectQustion(id, limit = 2, offset = '') {
  const subjectId = id;
  const query = `?limit=${limit} & offset = ${offset}`;
  const response = await fetch(
    `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/questions/${query}`,
  );
  if (!response.ok) {
    throw new Error('질문 조회에 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function getSubject(subjectId) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/`,
    );

    if (!response.ok) {
      alert('존재하지 않는 이름/아이디 입니다.');
      window.location.href = '/';
    }

    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteSubject(subjectId) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/`,
      {
        method: 'DELETE',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );
    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export async function getQuestionList(subjectId, limit = 10, offset = 0) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
    );
    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export async function putQuestionAnswer(answerId, questionAnswer) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/answers/${answerId}/`,
      {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionAnswer),
      },
    );
    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export async function postQuestionAnswer(questionId, questionAnswer) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/questions/${questionId}/answers/`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionAnswer),
      },
    );
    const body = await response.json();

    return body;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteQuestion(questionId) {
  try {
    const response = await fetch(
      `https://openmind-api.vercel.app/3-3/questions/${questionId}/`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.ok) {
      alert('질문 삭제에 실패하였습니다.');
    }
  } catch (error) {
    console.log(error);
  }
}
