const API_URL = 'https://challenge.thef2e.com/api/thef2e2019/stage6';

async function fetchData(endpoint: string, requestOptions: RequestInit) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, requestOptions);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('ERROR:::', error);
    throw error;
  }
}

async function getRooms() {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: import.meta.env.VITE_APP_TOKEN,
    },
  };

  return fetchData('rooms', requestOptions);
}

async function getOneRoom(roomId: unknown) {
  const requestOptions = {
    method: 'GET',
    headers: {
      Authorization: import.meta.env.VITE_APP_TOKEN,
    },
  };

  return fetchData(`room/${roomId}`, requestOptions);
}

const api = {
  getRooms,
  getOneRoom,
};

export default api;
