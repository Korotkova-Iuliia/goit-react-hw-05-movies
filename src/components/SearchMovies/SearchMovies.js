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
} from './SearchMovies.styled.js';
function SearchMovies({ onSearch }) {
  const [searchMovies, setsearchMovies] = useState('');
  const handleInputName = e => {
    setsearchMovies(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (searchMovies.trim() === '') {
      return console.log('поисковая строка пуста!');
      // return toast.warn('поисковая строка пуста!');
    }
    onSearch(searchMovies);
    setsearchMovies('');
  };
  return (
    <SurchBarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel></SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          value={SearchMovies}
          autoFocus
          onChange={handleInputName}
          placeholder="Search films"
        />
      </SearchForm>
    </SurchBarWrapper>
  );
}
export default SearchMovies;
// SearchMovies.propTypes = {
//   onSubmit: PropTypes.func,
//   onChange: PropTypes.func,
// };
