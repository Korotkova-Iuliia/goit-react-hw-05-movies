import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import {
  SurchBarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './SearchMovies.styled.js';
//
// export function SearchMovies({ onSearch }) {
//   const [movieName, setMovieName] = useSearchParams('');
//   const handleInputName = e => {
//     setMovieName({ query: e.currentTarget.query.value.toLowerCase() });
//     console.log(e.currentTarget.value);
//   };

export function SearchMovies({ onSearch }) {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const query = searchParams.get('query');
  // console.log(location);
  useEffect(() => {
    if (query) {
      // console.log('Dfsegsze');
      setMovieName(query);
    }
  }, [query]);
  const handleInputName = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
    // console.log(movieName);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setMovieName(query);
    // console.log(movieName);
    // console.log(query);
    if (movieName.trim() === '') {
      return toast.error('поисковая строка пуста!');
    }
    // setSearchParams({ query: e.currentTarget.elements.query.value });
    setSearchParams({ query: e.currentTarget.elements.query.value });
    // setSearchParams({ query: movieName });
    onSearch(movieName);
    // query ? onSearch(query) : onSearch(movieName);s
    setMovieName('');
  };
  return (
    <SurchBarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel></SearchFormButtonLabel>
          <Icon name="search" fill="gray" width="30px" height="30px" />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          name="query"
          value={movieName}
          autoFocus
          onChange={handleInputName}
          placeholder="Search films"
        />
      </SearchForm>
    </SurchBarWrapper>
  );
}

// SearchMovies.propTypes = {
//   onSubmit: PropTypes.func,
//   onChange: PropTypes.func,
// };
//
