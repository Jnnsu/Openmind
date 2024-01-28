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
