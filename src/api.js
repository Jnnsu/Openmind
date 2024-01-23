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

export const getQuestions = async id => {
  const response = await fetch(
    `https://openmind-api.vercel.app/3-3/subjects/${id ? `${id}/answer` : ''}`,
  );

  const result = await response.json();
  return result;
};
