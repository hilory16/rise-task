import styled from 'styled-components';
import HeroPhoneImage from 'assets/images/hero-phone.png';

export const AppBannerWrapper = styled.section`
  background: ${({ theme }) => theme?.colors?.green};
  border-radius: 50px;
  padding: 100px 0 57px 24px;
  margin-bottom: 80px;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    height: 100%;
    width: 208px;
    position: absolute;
    right: 114px;
    top: 40px;
    background: url(${HeroPhoneImage}) no-repeat;
    background-size: cover;
  }
  .appstores {
    .apple {
      margin-right: 16px;
    }
  }
  .text-content {
    width: 50%;
    max-width: 464px;
    h2 {
      font-weight: 600;
      font-size: 32px;
      line-height: 120%;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme?.colors?.dark1};
      margin-bottom: 16px;
    }
    .sub-heading {
      font-family: DM Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */
      color: ${({ theme }) => theme?.colors?.primary};
      margin-bottom: 16px;
    }
    .section-description {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme?.colors?.dark2};
      margin-bottom: 32px;
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    padding: 40px 20px 57px 20px;
    padding-bottom: 230px;
    .text-content {
      width: 100%;
    }
    &::before {
      height: 100%;
      width: 70%;
      object-fit: contain;
      right: 50%;
      transform: translateX(50%);
      top: 70%;
      background-size: contain;
    }
    .text-content {
      text-align: center;
      h2 {
        font-size: 32px;
        margin-bottom: 16px;
      }
      .sub-heading {
        margin-bottom: 16px;
      }
      .section-description {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 32px;
      }
    }
    .appstores {
      justify-content: center;
    }
  }
  ${({ theme }) => theme.mediaQueries.small} {
    &::before {
      width: 90%;
    }
  }
`;
