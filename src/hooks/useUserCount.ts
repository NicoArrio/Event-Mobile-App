import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useUserCount = () => {
  const [userCount, setUserCount] = useState(0);

  const loadUserCount = async () => {
    try {
      const users = await AsyncStorage.getItem('@MyUser:Key');
      const parsedUsers = users ? JSON.parse(users) : [];
      setUserCount(parsedUsers.length);
    } catch (error) {
      console.error('Failed to load user count:', error);
    }
  };

  useEffect(() => {
    loadUserCount();
  }, []);

  return userCount;
};

export default useUserCount;
