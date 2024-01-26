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

export async function getSubjectQustion (id, limit = 2, offset ='') {
  const subjectId = id;
  const query = `?limit=${limit} & offset = ${offset}`;
  const response = await fetch(
    `https://openmind-api.vercel.app/3-3/subjects/${subjectId}/questions/${query}`
  );
  if (!response.ok){
    throw new Error('질문 조회에 실패했습니다.');
  }
  const body = await response.json();
  return body;
}