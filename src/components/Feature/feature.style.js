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
      max-width: 450px;
    }
  }
  .feature-image {
    width: 50%;
    display: flex;
    justify-content: ${({ reverse }) => (!reverse ? 'flex-end' : 'flex-start')};
    img {
      height: ${({ reverse }) => (!reverse ? '480px' : '488px')};
    }
  }
`;
