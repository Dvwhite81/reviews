import { FaQuoteRight } from 'react-icons/fa';
import { ReviewType } from '../utils/types';

interface ReviewProps {
  review: ReviewType;
}

const Review = ({ review }: ReviewProps) => {
  const { image, job, name, text } = review;

  return (
    <>
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <p className="author">{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </>
  );
};

export default Review;
