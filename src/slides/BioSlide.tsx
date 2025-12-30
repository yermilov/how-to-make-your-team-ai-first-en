import { SlideDefinition } from '../types/slides';
import yarikBadges from '/yarik-badges.jpg?url';

export const BioSlide: SlideDefinition = {
  id: 'bio',
  content: (
    <div className="bio-slide">
      <div className="bio-slide-content">
        <h2>8 років в греммерлі / суперхьюмані:</h2>
        <ul>
          <li>працював на бекенді</li>
          <li>лідив продуктові фічі</li>
          <li>техлідив платформену організацію</li>
          <li>зараз займаюся АІ-дев агентами</li>
        </ul>
        <p>
          пишу постійно в{' '}
          <a href="https://www.linkedin.com/in/yarik-yermilov/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
      <img
        src={yarikBadges}
        alt="Grammarly badges"
        className="bio-slide-image"
      />
    </div>
  ),
};
