import { useEffect, useState } from 'react';
import API from '../api';

const useGetUsers = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUser() {
      try {
        const res = await API.get('/tinder/cards');
        setError(null);
        setUser(res.data);
        setIsLoading(false);
      } catch (err) {
        setUser(null);
        setError(err);
        setIsLoading(false);
      }
    }

    fetchUser();
  }, []);

  return { user, error, isLoading };
};

export default useGetUsers;
