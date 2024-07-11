import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import { getNextIndex, getPrevIndex, getRandomIndex } from './utils/helpers';
import './App.css';
import Review from './components/Review';
import reviews from './utils/data';

function App() {
  const [index, setIndex] = useState(0);

  const getPrev = () => setIndex(getPrevIndex(index));
  const getNext = () => setIndex(getNextIndex(index));
  const getRandom = () => setIndex(getRandomIndex(index));

  return (
    <main>
      <article className="review">
        <Review review={reviews[index]} />
        <div className="btn-container">
          <button className="prev-btn" onClick={getPrev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={getNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={getRandom}>
          Surprise Me
        </button>
      </article>
    </main>
  );
}

export default App;
