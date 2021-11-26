import { Link } from 'react-router-dom';
import { uuid } from 'uuidv4';
import RiseLogo from 'assets/logos/rise-black.svg';
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
                  {arrow && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      /* eslint-disable-next-line */
                      className="link-arrow"
                    >
                      <path
                        d="M1.07108 9.55636C1.26624 9.75152 1.58303 9.75152 1.77819 9.55636L8.8314 2.50314L8.70306 7.77639C8.69634 8.05216 8.91413 8.28162 9.19079 8.28851C9.46691 8.29523 9.69602 8.07709 9.70273 7.80096L9.84928 1.77836C9.84928 1.51107 9.74534 1.26005 9.55636 1.07108C9.36757 0.882278 9.11637 0.778157 8.83706 0.77851L2.82665 0.924881C2.55053 0.931598 2.33256 1.16088 2.3391 1.43683C2.34546 1.71295 2.57492 1.93109 2.85105 1.92438L8.13561 1.78472L1.07108 8.84925C0.87592 9.04441 0.87592 9.3612 1.07108 9.55636Z"
                        fill="#2D2D2D"
                        className="link-arrow"
                      />
                    </svg>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </FooterWrapper>
  );
}
