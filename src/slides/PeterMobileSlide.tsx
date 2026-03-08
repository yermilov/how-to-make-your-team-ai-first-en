import { SlideDefinition } from '../types/slides';
import billionDollarTweet from '/billion-dollar-tweet.png?url';
import peterMobileMp4 from '/petermobile.mp4?url';

export const PeterMobileSlide: SlideDefinition = {
  id: 'peter-mobile',
  content: (
    <div className="image-slide overlay-slide">
      <img src={billionDollarTweet} alt="Tweet: ok claude, make a billion dollar b2b todo app" loading="lazy" />
      <video
        autoPlay
        loop
        muted
        playsInline
        src={peterMobileMp4}
        className="overlay-gif"
        style={{ transform: 'translate(-50%, -50%) scale(2)' }}
      />
    </div>
  ),
};
