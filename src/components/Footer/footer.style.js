import styled from 'styled-components';

export const FooterWrapper = styled.section`
  padding: 50px 0 90px 0;
  display: flex;
  & > * {
    flex: 1;
  }
  .footer-links {
    h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 90%;
      letter-spacing: -0.05em;
      color: #2d2d2d;
      margin-bottom: 34px;
    }
    .footer-logo {
      margin-bottom: 34px;
      width: 56px;
    }
    ul {
      li {
        margin-bottom: 16px;
        a {
          font-family: DM Sans;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: ${({ theme }) => theme?.colors?.dark1};
          transition: all ease 0.3s;
          :hover {
            color: ${({ theme }) => theme?.colors?.primary} !important;
          }
        }
        .link-arrow {
          margin-left: 10px;
        }
        :hover .link-arrow {
          fill: ${({ theme }) => theme?.colors?.primary};
        }
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 20px 20px 50px 20px;
    flex-wrap: wrap;
    .footer-links {
      width: 50%;
      margin-bottom: 40px;
    }
    .footer-links.rise {
      order: 1;
    }
    .footer-links.explore {
      order: 4;
    }
    .footer-links.products {
      order: 3;
    }
    .footer-links.contact {
      order: 2;
    }
    & > * {
      flex: auto;
    }
  }
`;
