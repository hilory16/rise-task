import { string } from 'prop-types';

import { AppStoreWrapper } from './appStore.style';
export default function AppStore({ text, icon }) {
  return (
    <AppStoreWrapper>
      <div className="store-icon">
        <img src={icon} alt={`download app on ${text}`} />
      </div>
      <div className="store-desc">
        <p>Download on the</p>
        <h6>{text}</h6>
      </div>
    </AppStoreWrapper>
  );
}
AppStore.propTypes = {
  text: string.required,
  icon: string.required
};
