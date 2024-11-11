import { useState, useEffect } from 'react';
import axios from 'axios';

const useUserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://192.168.0.101:3000/api/users/count');
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
