import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '@env';

const useUserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/users/count`);
        setUserCount(response.data.count); // Actualizar el estado con la cuenta de usuarios
      } catch (error) {
        console.error('Failed to fetch user count:', error);
      }
    };

    fetchUserCount();
  }, []);

  return userCount;
};

export default useUserCount;
