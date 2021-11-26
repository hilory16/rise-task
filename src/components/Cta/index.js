import Button from 'components/Button';
import BuildWealthImage from 'assets/images/build-wealth.png';
import { CtaWrapper } from './cta.style';

export default function Cta() {
  return (
    <CtaWrapper className="wrapper">
      <div className="padded">
        <div className="image-content cta-item">
          <img src={BuildWealthImage} alt="rise-mobile-app" />
        </div>
        <div className="text-content cta-item">
          <div>
            <h4>The Rise App</h4>
            <h2>
              Save for your <span>future</span>
            </h2>
            <p className="description">
              With Rise, you achieve your financial goals faster. Save for school, your home,
              vacations, your children’s future and more.
            </p>
            <Button title="Start Saving" />
          </div>
        </div>
      </div>
    </CtaWrapper>
  );
}
