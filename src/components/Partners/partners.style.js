import styled from 'styled-components';

export const PartnersWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom:50px;
  width: 60%;
  img {
    filter: grayscale(100%) sepia(15%) hue-rotate(185deg) saturate(4.5);
    margin-right: 25px;
    transition: all ease 0.3s;
    :hover {
      filter: grayscale(100%) sepia(15%) hue-rotate(1deg) saturate(4.5);
    }
  }
  img:last-child {
    margin-right: 0;
  }
  .arm-logo {
    height: 50px;
  }
  .wu-logo {
    height: 110px;
  }
  .venture-images {
    height: 60px;
  }
  .techstars-logo {
    height: 70px;
  }
  ${({ theme }) => theme.mediaQueries.medium}{
    padding-bottom:50px;
    padding-top:50px;
    width: 100%;
    justify-content;space-between;
    img{
      width:22%;
      height: auto !important;
      margin-right: 0;
      object-fit:contain;
    }
    .arm-logo {
      width:18%;
    }
    .wu-logo {
      width:42%;
    }
    .venture-images {
      width:12%;
    }
    .techstars-logo {
      width:22%;
    }
  }
`;
