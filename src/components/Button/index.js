import { string } from 'prop-types';
import { ButtonWrapper } from './button.style';
export default function Button({ title }) {
  return (
    <ButtonWrapper>
      <p>{title}</p>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  title: string.required
};
