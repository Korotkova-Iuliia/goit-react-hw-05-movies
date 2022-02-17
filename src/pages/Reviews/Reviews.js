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
