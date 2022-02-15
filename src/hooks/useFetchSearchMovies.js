import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovies } from 'services';
import { SearchMovies } from '../components/SearchMovies';
import Button from '../components/Button/Button';
export const useFetchSearchMovies = () => {
  const [listMovies, setListMovies] = useState([]);
  const [nameMovies, setNameMovies] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (nameMovies === '') {
      return;
    }
    async function fetchSearchMovies() {
      setLoading(true);
      try {
        const results = await getSearchMovies(nameMovies, page);
        console.log(listMovies);
        console.log(results);

        setListMovies(listMovies => [...listMovies, ...results]);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchSearchMovies();
  }, [nameMovies, page]);
  const handleLoadMore = () => {
    setPage(page => page + 1);
  };
  const handleSearchMovies = searchMovies => {
    setNameMovies(searchMovies);
  };
  return { listMovies, loading, error, handleSearchMovies, handleLoadMore };
};
