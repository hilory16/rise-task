import styled from 'styled-components';

export const CommunityWrapper = styled.div`
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
  }
  .community-image{
      display:flex;
      justify-content:flex-end;
      padding-bottom:80px;
  }
`;
