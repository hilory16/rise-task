import styled from 'styled-components';

export const AssetItemWrapper = styled.div`
  width: 30.5%;
  padding-top: 127px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  position: relative;
  height: auto;
  &::before {
    content: '';
    height: 127px;
    width: 100%;
    background: ${({ theme, bg }) => theme?.colors?.[bg]};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  .asset-item {
    // background:${({ theme }) => theme?.colors?.white};
    padding: 0 10px 33px 10px;
    border-radius: 0 0 16px 16px;
  }
  .icon-wrapper {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background: ${({ theme }) => theme?.colors?.white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 8px auto;
    margin-top: -57.5px;
    img {
    }
  }
  h4 {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme?.colors?.dark1};
    margin-bottom: 16px;
    text-align: center;
  }
  .asset-description {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.05em;
    color: ${({ theme }) => theme?.colors?.dark2};
    margin-bottom: 8px;
  }
  .asset-meta {
    margin-bottom: 50px;
    li {
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme?.colors?.grey};
      span {
        color: ${({ theme }) => theme?.colors?.dark2};
      }
    }
  }
  .anchor-link {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 33px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.semiLarge} {
    width: 32%;
    .anchor-link {
      font-size: 15px;
      p {
        margin-right: 10px;
      }
    }
    .asset-item {
      padding: 0 4px 33px 4px;
    }
  }
  ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
    margin-bottom: 30px;
  }
`;
