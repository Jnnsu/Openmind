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
