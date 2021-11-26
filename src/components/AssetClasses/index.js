import { AssetsWrapper } from './assetClasses.style';
import AssetItem from 'components/AssetItem';
import StockIcon from 'assets/icons/stocks.png';
import FixedIncomeIcon from 'assets/icons/fixed-income.png';
import RealEstateIcon from 'assets/icons/real-estate.png';
export default function Partners() {
  return (
    <AssetsWrapper className="wrapper">
      <h2>Asset Classes</h2>
      <p className="description">It’s your money, choose where you invest it</p>
      <div className="assets-collection">
        <AssetItem
          title="Stocks"
          desc="We help you invest and manage your money by investing in our portfolio of 30 high-growth
          stocks across the US market with our equity portfolio of power stocks."
          cta="Learn how Stocks work"
          link="/"
          returns="14% per annum"
          risk="Medium"
          icon={StockIcon}
          bg="orange"
        />
        <AssetItem
          title="Real Estate"
          desc="Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US."
          cta="Learn how Real Estate work"
          link="/"
          returns="14% per annum"
          risk="Medium"
          icon={RealEstateIcon}
          bg="purple"
        />
        <AssetItem
          title="Fixed Income"
          desc="A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns."
          cta="Learn how Fixed Income work"
          link="/"
          returns="14% per annum"
          risk="Medium"
          icon={FixedIncomeIcon}
          bg="green"
        />
      </div>
    </AssetsWrapper>
  );
}
