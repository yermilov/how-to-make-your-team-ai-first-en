import { SlideDefinition } from '../types/slides';
import billionDollarTweet from '/billion-dollar-tweet.png?url';
import peterMobileGif from '/petermobile.gif?url';

export const PeterMobileSlide: SlideDefinition = {
  id: 'peter-mobile',
  content: (
    <div className="image-slide overlay-slide">
      <img src={billionDollarTweet} alt="Tweet: ok claude, make a billion dollar b2b todo app" />
      <img
        src={peterMobileGif}
        alt="Peter Griffin reaction"
        className="overlay-gif"
        style={{ transform: 'translate(-50%, -50%) scale(2)' }}
      />
    </div>
  ),
};
