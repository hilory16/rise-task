import styled from 'styled-components';

export const AssetsWrapper = styled.section`
  padding: 45px inherit 120px inherit;
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme.colors.dark1};
    margin-bottom: 7px;
  }
  .description {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme.colors.dark1};
    margin-bottom: 42px;
  }
  .assets-collection {
    display: flex;
    justify-content: space-between;
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    .assets-collection {
      flex-wrap: wrap;
    }
    .description {
      margin-bottom: 30px;
    }
  }
  h2 {
    font-size: 32px;
  }
`;
