import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import InvestIllustration from 'assets/illustrations/invest.svg';
import { FeatureWrapper } from './feature.style';

export default function Features({ title, description, illustration, cta, link, reverse }) {
  return (
    <FeatureWrapper>
      <div className="text-content">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <Link to={link}>
          <p className="anchor-link">{cta}</p>{' '}
          <span>
            <img src={ArrowRightIcon} alt="arrow-icon" />
          </span>
        </Link>
      </div>

      <div className="feature-image">
        <img src={InvestIllustration} alt="invest-illustration" />
      </div>
    </FeatureWrapper>
  );
}

Features.propTypes = {
  title: string.required,
  description: string.required,
  illustration: string.required,
  cta: string.required,
  link: string.required
};
