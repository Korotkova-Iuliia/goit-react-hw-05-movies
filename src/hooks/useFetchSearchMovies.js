import { useState, useEffect, useRef } from 'react';
import { getSearchMovies } from 'services';
import toast from 'react-hot-toast';
import scrollBy from '../components/ScrollBy';

export const useFetchSearchMovies = () => {
  const [listMovies, setListMovies] = useState(() => {
    const saved = sessionStorage.getItem('searchMovies');
    return saved ? JSON.parse(saved) : [];
  });

  const [nameMovies, setNameMovies] = useState(() => {
    return sessionStorage.getItem('searchQuery') || '';
  });

  const [page, setPage] = useState(() => {
    return Number(sessionStorage.getItem('searchPage')) || 1;
  });

  const [error, setError] = useState(null);
  const isRestored = useRef(!!listMovies.length); // отметка, что кэш уже есть

  useEffect(() => {
    if (!nameMovies) return;

    // если данные уже восстановлены из sessionStorage, не запрашиваем заново
    if (isRestored.current) {
      isRestored.current = false;
      return;
    }

    const fetchSearchMovies = async () => {
      try {
        const results = await getSearchMovies(nameMovies, page);

        if (results.length === 0) {
          toast.error('Cannot find your request!');
          return;
        }

        setListMovies(prev => {
          const newList = page === 1 ? results : [...prev, ...results];
          sessionStorage.setItem('searchMovies', JSON.stringify(newList));
          sessionStorage.setItem('searchQuery', nameMovies);
          sessionStorage.setItem('searchPage', String(page));
          return newList;
        });

        if (page > 1) scrollBy();
      } catch (err) {
        setError(err);
      }
    };

    fetchSearchMovies();
  }, [nameMovies, page]);

  const handleSearchMovies = searchMovies => {
    if (searchMovies === nameMovies) return;
    setNameMovies(searchMovies);
    setListMovies([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return { listMovies, error, handleSearchMovies, handleLoadMore };
};
