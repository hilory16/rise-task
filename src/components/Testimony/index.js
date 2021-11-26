import Person1Img from 'assets/images/person-1.png';
import { TestimonyWrapper } from './testimony.style';

export default function Partners() {
  return (
    <TestimonyWrapper>
      <div className="testimony-item">
        <h6>
          I don’t want to invest in separate stocks because I’m not a financial expert and I would
          rather trust my money in the hands of people like Rise who are skilled and knowledgeable.
        </h6>
        <div className="user">
          <img src={Person1Img} alt="user-avatar" className="user-avatar" />
          <h5 className="name">Jesse</h5>
        </div>
      </div>
    </TestimonyWrapper>
  );
}
