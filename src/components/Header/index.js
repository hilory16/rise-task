import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './header.style';
import RiseLogo from 'assets/logos/rise.svg';
import { ThemeContext } from 'context/themeContext';

export default function Header() {
  return (
    <HeaderWrapper className="wrapper">
      <section className="header-content">
        <div className="logo-container">
          <NavLink to="">
            <img src={RiseLogo} alt="rise-logo" />
          </NavLink>
        </div>
        <nav className="header-links">
          <ul>
            <li className="link-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/investment">Investment Club</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li className="link-item">
              <NavLink to="/faq">FAQs</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </HeaderWrapper>
  );
}
