import styled from 'styled-components';

export const CommunityWrapper = styled.section`
  display: flex;
  align-items: center;
  & > * {
    flex: 1;
  }
  h2 {
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme?.colors?.dark1};
    margin-bottom: 16px;
  }
  .description {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme?.colors?.dark1};
    margin-bottom: 32px;
    max-width: 478px;
  }
  .community-image {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 80px;
  }
  ${({ theme }) => theme.mediaQueries.tablet} {
    justify-content: space-between;
    padding-bottom: 80px;
    & > * {
      width: 48%;
      flex: initial;
    }
    .community-image {
      padding-bottom: 0;
      img {
        width: 100%;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    flex-wrap: wrap;
    align-items: intial;
    padding-bottom: 60px;
    flex-direction: column-reverse;
    .text-content {
      text-align: center;
      h2 {
        font-size: 30px;
      }
    }
    & > * {
      width: 100%;
      flex: initial;
    }
    .community-image {
      justify-content: initial;
      padding-bottom: 0;
      margin-bottom: 50px;
      img {
        width: 100%;
      }
    }
  }
`;
