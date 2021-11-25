import styled from 'styled-components';

export const HeroWrapper = styled.div`
  padding: 30px 0;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
  display: flex;
  width: 100%;
  .text-layout {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .text {
    h1 {
      font-size: 56px;
      line-height: 60px;
      letter-spacing: -0.05em;
      color: ${({ theme }) => theme?.colors?.primary};
      margin-bottom: 16px;
    }
    .hero-desc {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme?.colors?.dark2};
      margin-bottom: 32px;
    }
    .apple {
      margin-right: 16px;
    }
    .appstores {
      display: flex;
    }
  }
  .hero-img {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    img {
      filter: drop-shadow(0px 1.60087px 16.0087px rgba(53, 71, 89, 0.15));
      height: 461px;
    }
  }
`;
