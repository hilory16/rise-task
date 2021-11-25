import { PartnersWrapper } from './partners.style';
import PartnersImg from 'assets/logos/partners.svg';
export default function Partners() {
  return (
    <PartnersWrapper className="wrapper">
      <img src={PartnersImg} alt="partners-images" />
    </PartnersWrapper>
  );
}
