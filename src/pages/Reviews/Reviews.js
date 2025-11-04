import PropTypes from 'prop-types';
import { useFetchMovieReviews } from 'hooks';
const Reviews = () => {
  const { reviews, error } = useFetchMovieReviews();
  return (
    <ul>
      {!error &&
        reviews &&
        reviews.map(review => (
          <li key={review.id}>
            <p> {review.author_details.username}</p>
            <p>{review.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;

Reviews.propTypes = {
  reviews: PropTypes.arrayOf({
    id: PropTypes.number,
    author_details: PropTypes.string,
    content: PropTypes.string,
  }),
};
