import { PartnersWrapper } from './partners.style';
import ArmLogo from 'assets/logos/arm.png';
import WesternUnionLogo from 'assets/logos/western-union.png';
import TechstarsLogo from 'assets/logos/techstars.png';
import VentureLogo from 'assets/logos/venture.png';
export default function Partners() {
  return (
    <PartnersWrapper className="wrapper">
      <img src={ArmLogo} alt="arm-logo" className="arm-logo" />
      <img src={WesternUnionLogo} alt="wu-logo" className="wu-logo" />
      <img src={TechstarsLogo} alt="techstars-logo" className="techstars-logo" />
      <img src={VentureLogo} alt="venture-images" className="venture-images" />
    </PartnersWrapper>
  );
}
