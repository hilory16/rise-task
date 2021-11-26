import styled from 'styled-components';

export const CtaWrapper = styled.section`
  padding-bottom: 50px;
  padding-top: 80px;
  .padded {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
  }
  .cta-item {
    width: 50%;
  }
  .text-content {
    display: flex;
    align-item: center;
    h4 {
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme?.colors?.dark1};
      margin-bottom: 8px;
    }
    h2 {
      font-weight: 600;
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme?.colors?.dark1};
      margin-bottom: 16px;
      span {
        color: ${({ theme }) => theme?.colors?.purple2};
      }
    }
    .description {
      font-family: Tomato Grotesk;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme?.colors?.dark1};
      margin-bottom: 32px;
      max-width: 400px;
    }
  }
  ${({ theme }) => theme.mediaQueries.semiLarge} {
    .padded {
      padding-left: 0px;
    }
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    .cta-item {
      width: 48%;
      img {
        width: 95% !important;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    margin-top: 40px;
    padding-top: 0px;
    .padded {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-left: 0px;
    }
    .cta-item {
      width: 100%;
    }
    .text-content {
      display: flex;
      align-item: center;
      h4 {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 8px;
        text-align: center;
      }
      h2 {
        font-weight: 600;
        font-size: 32px;
        margin-bottom: 12px;
        text-align: center;
      }
      .description {
        font-size: 16px;
        line-height: 24px;
        max-width: 400px;
        text-align: center;
      }
    }
    .image-content {
      margin-bottom: 30px;
      img {
        width: 85%;
        margin: 0 auto;
        display: block;
      }
    }
  }
`;
