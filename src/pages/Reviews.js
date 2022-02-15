import { useEffect, useState } from 'react';
import { useFetchMovieReviews } from 'hooks';
import { useParams } from 'react-router-dom';

import { Layout, LayoutFeatureMovie } from '../components/layout/Layout';

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
