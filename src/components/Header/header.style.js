import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  width: 100%;
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: between;
      align-items: center;
      li {
        margin-right: 26px;
        img {
          margin-left: 5px;
        }
      }
      li:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        font-size: 16px;
        line-height: 19px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.primary};
      }
      .active {
        font-weight: bold;
        position: relative;
        :before {
          content: '';
          height: 8px;
          width: 8px;
          background: ${({ theme }) => theme.colors.green3};
          display: block;
          border-radius: 50%;
          position: absolute;
          top: 24px;
          left: 50%;
        }
      }
    }
  }
`;
