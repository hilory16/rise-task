import Testimony from 'components/Testimony';
import { TestimoniesWrapper } from './testimonies.style';
export default function Testimonies() {
  return (
    <TestimoniesWrapper>
      <h2>From The People Who Use Rise</h2>
      <p className="testimony-desc">
        Our mission at Risevest is to empower more people just like you to achieve your personal
        financial goals.
      </p>

      <div className="testimonies">
        <Testimony />
        <Testimony />
        <Testimony />
      </div>
    </TestimoniesWrapper>
  );
}
