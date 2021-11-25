import styled from 'styled-components';

export const AppStoreWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.dark1};
  border-radius: 10px;
  width: 145px;
  height: 48px;
  padding: 0 16px;
  .store-icon {
    margin-right: 9px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  .store-desc {
    font-size: 10px;
    color: ${({ theme }) => theme?.colors?.white};
    p {
      font-weight: 400;
      font-family: Tomato Grotesk;
    }
    h6 {
      font-weight: 600;
      line-height: 16px;
      font-size: 12px;
    }
  }
`;
