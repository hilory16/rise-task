import styled from 'styled-components';

export const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => (!reverse ? 'row' : 'row-reverse')};
  .text-content {
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: ${({ reverse }) => (!reverse ? '0' : '70px')};
    .title {
      font-size: 32px;
      line-height: 90%;
      color: ${({ theme }) => theme.colors.dark1};
      margin-bottom: 10px;
    }
    .description {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.dark2};
      margin-bottom: 24px;
      max-width: 432px;
    }
  }
  .feature-image {
    width: 50%;
    display: flex;
    justify-content: ${({ reverse }) => (!reverse ? 'flex-end' : 'flex-start')};
    img {
      height: ${({ reverse }) => (!reverse ? '480px' : '488px')};
      max-width: 100%;
    }
  }
  ${({ theme }) => theme.mediaQueries.semiLarge} {
    .text-content {
      padding-left: ${({ reverse }) => (!reverse ? '0' : '0px')};
    }
    .feature-image {
      img {
        height: ${({ reverse }) => (!reverse ? '430px' : '438px')};
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    flex-wrap: wrap;
    flex-direction: column-reverse !important;
    margin-bottom: 40px;
    .text-content,
    .feature-image {
      width: 100%;
      padding-left: 0;
    }
    .text-content {
      margin-top: -30px;

      z-index: 1;
      .title {
        text-align: center;
        font-size: 20px;
      }
      .description {
        text-align: center;
        font-weight: 400;
        margin-bottom: 20px;
        max-width: 100%;
      }
    }
    .feature-image {
      display: flex;
      justify-content: center;
      img {
        height: 268.33px;
      }
    }
    .anchor-link {
      justify-content: center;
    }
  }
`;
