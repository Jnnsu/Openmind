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

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(`Error during fetch: ${error.message}`);
    return `Error: ${error.message}`;
  }
};
