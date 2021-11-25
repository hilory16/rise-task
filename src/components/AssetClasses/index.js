import { AssetsWrapper } from './assetClasses.style';
import AssetItem from 'components/AssetItem';
export default function Partners() {
  return (
    <AssetsWrapper className="wrapper">
      <h2>Asset Classes</h2>
      <p className="description">It’s your money, choose where you invest it</p>
      <div className="">
        <AssetItem />
        <AssetItem />
        <AssetItem />
      </div>
    </AssetsWrapper>
  );
}
