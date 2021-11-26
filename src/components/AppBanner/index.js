import { Link } from 'react-router-dom';
import AppStore from 'components/AppStore';
import AppleLogo from 'assets/logos/apple.svg';
import PlaystoreLogo from 'assets/logos/playstore.svg';
import { AppBannerWrapper } from './appBanner.style';
export default function AppBanner() {
  return (
    <AppBannerWrapper className="wrapper">
      <div className="text-content">
        <h6 className="sub-heading">Download The Rise App</h6>
        <h2>Join our 100,000 users investing and setting long term goals!</h2>
        <p className="section-description">Dollar investments that help you grow.</p>
        <div className="appstores">
          <Link to="/" className="apple">
            <AppStore icon={AppleLogo} text="App Store" />
          </Link>
          <Link to="/">
            <AppStore icon={PlaystoreLogo} text="Play Store" />
          </Link>
        </div>
      </div>
    </AppBannerWrapper>
  );
}
{
  /* <img src={RiseLogo} alt="rise-logo" /> */
}
