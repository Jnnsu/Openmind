import { API } from '../constants';

<<<<<<< HEAD
export const setUserData = async userData => {
=======
export const postUserData = async userData => {
>>>>>>> 4b6bae9 (🎨 chore: POST시 team 정보 누락 수정)
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

    const result = await response.json();
    console.log(result);
    return result;
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
