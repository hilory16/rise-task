import { Link } from 'react-router-dom';
import AppStore from 'components/AppStore';
import Header from 'components/Header/index';
import FloatingBubble from 'components/FloatingBubble';
import HeroImage from 'assets/images/hero-phone.png';
import AppleLogo from 'assets/logos/apple.svg';
import PlaystoreLogo from 'assets/logos/playstore.svg';
import { HeroWrapper, HeroContent } from './hero.style';

export default function Hero() {
  return (
    <HeroWrapper className="wrapper">
      <Header />
      <FloatingBubble />
      <HeroContent>
        <div className="text-layout">
          <div className="text">
            <h1>
              Dollar investments that help you <span className="grow">grow</span>
            </h1>
            <p className="hero-desc">
              We put your money in high quality assets that help you build wealth and achieve your
              financial goals.
            </p>
            <div className="appstores">
              <Link to="/" className="apple">
                <AppStore icon={AppleLogo} text="App Store" />
              </Link>
              <Link to="/">
                <AppStore icon={PlaystoreLogo} text="Play Store" />
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-img">
          <img src={HeroImage} alt="rise-phone" />
        </div>
      </HeroContent>
    </HeroWrapper>
  );
}
