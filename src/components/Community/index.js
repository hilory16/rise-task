import { CommunityWrapper } from './community.style';
import PeopleImage from 'assets/images/people-connect.png';
import Button from 'components/Button/index';
export default function Community() {
  return (
    <CommunityWrapper className="wrapper">
      <div className="text-content">
        <h2>Join The Rise Community</h2>
        <p className="description">
          If you want to go far, go together. Our Telegram community surrounds you with others who
          can help you along your financial journey with tips, support, advice and learning.
          It&apos;s completely free and open to new and seasoned investors.
        </p>
        <Button secondary title="Join our Community" action="" />
      </div>
      <div className="community-image">
        <img src={PeopleImage} alt="community-connecting" />
      </div>
    </CommunityWrapper>
  );
}
