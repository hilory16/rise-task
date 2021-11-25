import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import { AssetItemWrapper } from './assetItem.style';
import StockIcon from 'assets/icons/stocks.png';
export default function AssetItem({ title, desc }) {
  return (
    <AssetItemWrapper>
      <div className="asset-item">
        <div className="icon-wrapper">
          <img src={StockIcon} alt="partners-images" />
        </div>
        <h4>Stocks</h4>
        <p className="asset-description">
          We help you invest and manage your money by investing in our portfolio of 30 high-growth
          stocks across the US market with our equity portfolio of power stocks.
        </p>
        <ul className="asset-meta">
          <li>
            Historical returns: <span>14% per annum</span>
          </li>
          <li>
            Risk Level: <span>Medium</span>
          </li>
        </ul>
        <div>
          <Link to="">
            <p className="anchor-link">cta</p>{' '}
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
