import PropTypes from 'prop-types';
import { useFetchMovieReviews } from 'hooks';
export const Reviews = () => {
  const { reviews, loading, error } = useFetchMovieReviews();
  return (
    <ul>
      {loading}
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
Reviews.propTypes = {
  reviews: PropTypes.arrayOf({
    id: PropTypes.number,
    author_details: PropTypes.string,
    content: PropTypes.string,
  }),
};
// ImageGalleryItem.propTypes = {
//   dataImage: PropTypes.shape({
//     previewURL: PropTypes.string,
//     largeImageURL: PropTypes.string,
//     tags: PropTypes.string,
//     showModal: PropTypes.string,
//   }),
//   onSelectImages: PropTypes.func,
// };
