export const getSample = async () => {
  try {
    const response = await fetch(
      'https://openmind-api.vercel.app/3-3/subjects/',
    );
    const result = await response.json();

    console.log(result);
    return result;
  } catch (error) {
    return `Error: ${error}`;
  }
};

const BASE_URL = 'https://openmind-api.vercel.app/3-3/subjects/'

export async function getSubjectsQuestion(id, limit = 2, offset = '') {
  const subjectId = id;
  const query = `?limit=${limit}&offset=${offset}`;
  const response = await fetch(
    `${BASE_URL}/subjects/${subjectId}/questions/${query}`
  );
  if (!response.ok) {
    throw new Error('질문 조회에 실패했습니다');
  }
  const body = await response.json();
  return body;
}
