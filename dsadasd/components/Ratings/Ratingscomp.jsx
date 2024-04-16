import React from 'react';
import './Ratingscomp.scss';

export default function Ratingscomp({ ratingsData }) {
  const totalRatings = Object.values(ratingsData).reduce((acc, count) => acc + count, 0);

  const reversedRatingsData = Object.entries(ratingsData).reverse();

  return (
    <div className="rating-summary">
      {reversedRatingsData.map(([rating, count]) => (
        <div key={rating} className="rating-summary-item">
          <span className="rating-summary-star">★ {rating}</span> &nbsp;
          <div className="summary-bar">
            <span className="full-bar" />
            <span className="completed-bar" style={{ width: `${(count / totalRatings) * 100}%` }} />
          </div>
          <span className="rating-summary-count">{count}</span>
        </div>
      ))}
     </div>
  );
}
