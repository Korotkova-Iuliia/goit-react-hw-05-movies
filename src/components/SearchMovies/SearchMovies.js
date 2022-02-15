import { useState } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import {
  SurchBarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  Icon,
} from './SearchMovies.styled.js';
export function SearchMovies({ onSearch }) {
  const [movieName, setMovieName] = useState('');
  const handleInputName = e => {
    setMovieName(e.currentTarget.value.toLowerCase());
    console.log(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    // if (searchMovies.trim() === '') {
    //   return console.log('поисковая строка пуста!');
    //   // return toast.warn('поисковая строка пуста!');
    // }
    console.log(movieName);
    onSearch(movieName);
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
