import { useState } from 'react';
import './Ratings.scss'
import Ratingscomp from './Ratingscomp';

export default function Ratings() {

  const [rating, setRating] = useState(null); // mer astxerov nshats rating-y
  const [hover, setHover] = useState(null); // sra mej pahvum enq te vor astxi vra enq hover are vor guyn ta
  const [totalStars, setTotalStars] = useState(5); //astxeri qanak

  // random ratings
  const ratingsData = { 5: 177, 4: 9, 3: 6, 2: 0, 1: 7 };

  const ratingCount = Object.values(ratingsData).reduce((acc, cv) => {
    return acc + cv;
  }, 0);


  const ratingSum = Object.entries(ratingsData).reduce((acc, [rating, count]) => {
    return acc + (parseInt(rating) * count);
  }, 0);


  return (
    <div className="RatingsBG padding-m">
      <div className="Ratings">
        <div className="content">
          <h4>Orlando Car Transport Review</h4>
          <p>We strongly encourage all our customers to leave comments about the quality of our services that will help us improve our services constantly.Here is the list of our good partners: Golf Cart of Houston, Miller Honda, Glendale Hyundai, LA Auto World, Monarch Ford, Orange Cost Fiat, Hayward Nissan, Hub Hyundai West, and many others.</p>
        </div>
        <div className="rating">
          <div className="rating-left">

            <h2>{(ratingSum / ratingCount).toFixed(1)}/{totalStars}</h2> {/* mijin rating */}


            <div className="stars">
              {[...Array(totalStars)].map((star, index) => {
                const currentRating = index + 1;

                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onChange={() => setRating(currentRating)}
                    />
                    <span
                      className="star"
                      style={{
                        color:
                          currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9" // hoveri paymanna, yst sra guyna talis
                      }}
                      onMouseEnter={() => setHover(currentRating)}  // hoveri jhamanak  astxi ratingy pahuma hover state-i mej
                      onMouseLeave={() => setHover(null)} // ete hanumes mkniky vric noric null
                    >
                      &#9733;
                    </span>
                  </label>
                );
              })}
            </div>

            <h3>{ratingCount} Review</h3>
          </div>
          <div className="rating-right">
            <Ratingscomp ratingsData={ratingsData} />
          </div>
        </div>
        <div className="btns">
          <button className='Read-more'>Read More</button>
          <button className='Give-us'>Give us Your Feedback</button>
        </div>
      </div>
    </div>
  )
}
