import styled from 'styled-components';

export const CtaWrapper = styled.section`
  padding-bottom: 50px;
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
`;
