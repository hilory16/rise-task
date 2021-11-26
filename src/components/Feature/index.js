import { Link } from 'react-router-dom';
import { bool, elementType, oneOf, string } from 'prop-types';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import { FeatureWrapper } from './feature.style';

export default function Features({ title, description, illustration, cta, link, reverse }) {
  return (
    <FeatureWrapper reverse={reverse}>
      <div className="text-content">
        <div style={{ width: '100%' }}>
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <Link to={link} className="anchor-link">
            <p>{cta}</p>{' '}
            <span>
              <img src={ArrowRightIcon} alt="arrow-icon" />
            </span>
          </Link>
        </div>
      </div>

      <div className="feature-image">
        <img src={illustration} alt="illustration" />
      </div>
    </FeatureWrapper>
  );
}

Features.propTypes = {
  title: string.required,
  description: string.required,
  illustration: oneOf([string, elementType]),
  cta: string.required,
  link: string.required,
  reverse: bool.required
};
