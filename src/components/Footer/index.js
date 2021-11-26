import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import RiseLogo from 'assets/logos/rise-black.svg';
import ArrowSlantIcon from 'assets/icons/arrow-slant.svg';
import { FooterWrapper } from './footer.style';

const links = [
  {
    id: uuid(),
    name: '',
    arrow: false,
    styleClass: 'rise',
    links: [
      {
        id: uuid(),
        name: 'About Us',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Careers',
        link: '/'
      },
      {
        id: uuid(),
        name: 'FAQs',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Contact Info',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Press',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Rise Impact',
        link: '/'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Explore',
    arrow: true,
    styleClass: 'explore',
    links: [
      {
        id: uuid(),
        name: 'Investmet Club',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Blog',
        link: '/'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Products',
    arrow: false,
    styleClass: 'products',
    links: [
      {
        id: uuid(),
        name: 'Rise App',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Wallets',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Asset Classes',
        link: '/'
      }
    ]
  },
  {
    id: uuid(),
    name: 'Contact Us',
    arrow: true,
    styleClass: 'contact',
    links: [
      {
        id: uuid(),
        name: '0818 714 7405',
        link: '/'
      },
      {
        id: uuid(),
        name: 'hello@rise.capital',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Newsletter',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Instagram',
        link: '/'
      },
      {
        id: uuid(),
        name: 'Twitter',
        link: '/'
      }
    ]
  }
];
export default function Footer() {
  return (
    <FooterWrapper className="wrapper">
      {links.map(({ id, name, links, arrow, styleClass }) => (
        <div className={`footer-links ${styleClass}`} key={id}>
          {name ? <h4>{name}</h4> : <img src={RiseLogo} alt="rise-logo" className="footer-logo" />}
          <ul>
            {links.map(({ id, name, link }) => (
              <li key={id}>
                <Link to={link}>
                  {name}{' '}
                  {arrow && <img src={ArrowSlantIcon} alt="link-arrow" className="link-arrow" />}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </FooterWrapper>
  );
}
