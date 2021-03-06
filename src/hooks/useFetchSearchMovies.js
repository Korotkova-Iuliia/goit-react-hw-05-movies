import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getSearchMovies } from 'services';
import scrollBy from '../components/ScrollBy';
export const useFetchSearchMovies = () => {
  const [listMovies, setListMovies] = useState([]);
  const [nameMovies, setNameMovies] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log('useFetch SearchMovies');
    if (nameMovies === '') {
      return;
    }
    async function fetchSearchMovies() {
      try {
        const results = await getSearchMovies(nameMovies, page);
        if (results.length === 0) {
          toast.error('Cannot find your request!');
        }
        setListMovies(listMovies => [...listMovies, ...results]);
      } catch (error) {
        setError(error);
      } finally {
        if (page !== 1) {
          scrollBy();
        }
      }
    }
    fetchSearchMovies();
  }, [nameMovies, page]);
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };
  const handleSearchMovies = searchMovies => {
    setNameMovies(searchMovies);
    setListMovies([]);
  };
  return { listMovies, error, handleSearchMovies, handleLoadMore };
};
