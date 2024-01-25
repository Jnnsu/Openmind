export const postUserData = async userData => {
  try {
    const response = await fetch(
      'https://openmind-api.vercel.app/3-3/subjects/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      },
    );

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
