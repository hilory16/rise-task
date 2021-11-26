import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { uuid } from '../../../node_modules/uuidv4/build/lib/uuidv4';
import { HeaderWrapper } from './header.style';
import ArrowDown from 'assets/icons/arrow-down.svg';
import RiseLogo from 'assets/logos/rise.svg';
import MenuIcon from 'assets/icons/menu.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: uuid(),
      name: 'Home',
      link: '/'
    },
    {
      id: uuid(),
      name: 'Products',
      link: '/products',
      arrow: true
    },
    {
      id: uuid(),
      name: 'Investment Club',
      link: '/investments'
    },
    {
      id: uuid(),
      name: 'Blog',
      link: '/blogs'
    },
    {
      id: uuid(),
      name: 'About Us',
      link: '/about'
    },
    {
      id: uuid(),
      name: 'FAQs',
      link: '/faq'
    }
  ];
  return (
    <HeaderWrapper className="wrapper" isOpen={isOpen}>
      <section className="header-content">
        <div className="logo-container">
          <NavLink to="">
            <img src={RiseLogo} alt="rise-logo" />
          </NavLink>
          <img
            src={MenuIcon}
            alt="menu-icon"
            className="menu-icon"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <nav className="header-links">
          <ul>
            {links.map(({ name, link, id, arrow }) => (
              <li className="link-item" key={id}>
                <NavLink to={link}>{name}</NavLink>
                {arrow && <img src={ArrowDown} alt="arrow-down" />}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </HeaderWrapper>
  );
}
