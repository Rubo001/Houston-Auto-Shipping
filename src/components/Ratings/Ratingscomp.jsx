import { useEffect, useState } from "react";
import './Ratingscomp.scss'

export default function Ratingscomp({ ratings }) {

  const [ratingCounts, setRatingCounts] = useState({});

  //amen ratingi hamar qanakna hashvum., qani hat 1 astx ka, qani hat 2 astx ...
  useEffect(() => {
    if (ratings && ratings.length > 0) {
      const counts = ratings.reduce((acc, rating) => {
        acc[rating] = (acc[rating] || 0) + 1;
        return acc;
      }, {});
      setRatingCounts(counts);
    }
  }, [ratings]);

  return (
    <div className="rating-summary">
      {Object.entries(ratingCounts).map(([rating, count]) => (
        <div key={rating} className="rating-summary-item">
          <span className="rating-summary-star">★ {rating}</span> &nbsp;
          <span className="rating-summary-count">{count}</span>
          <span className="rating-summary-bar" />
        </div>
      ))}
    </div>
  );
}
