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
