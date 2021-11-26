import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import { AssetItemWrapper } from './assetItem.style';
export default function AssetItem({ title, desc, cta, link, returns, risk,icon, bg }) {
  return (
    <AssetItemWrapper bg={bg}>
      <div className="asset-item">
        <div className="icon-wrapper">
          <img src={icon} alt={title} />
        </div>
        <h4>{title}</h4>
        <p className="asset-description">{desc}</p>
        <ul className="asset-meta">
          <li>
            Historical returns: <span>{returns}</span>
          </li>
          <li>
            Risk Level: <span>{risk}</span>
          </li>
        </ul>
        <div>
          <Link to={link} className="anchor-link">
            <p >{cta}</p>{' '}
            <span>
              <img src={ArrowRightIcon} alt="arrow-icon" />
            </span>
          </Link>
        </div>
      </div>
    </AssetItemWrapper>
  );
}

AssetItem.propTypes = {
  title: string.required,
  desc: string.required
};
