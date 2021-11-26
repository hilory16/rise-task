import styled from 'styled-components';

export const AssetsWrapper = styled.div`
    padding-bottom:80px;
    h2{
        font-weight: 600;
        font-size: 40px;
        line-height: 120%;
        text-align: center;
        letter-spacing: -0.05em;
        color: ${({theme}) => theme.colors.dark1};
        margin-bottom:7px;
    }
    .description{
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: -0.05em;
        color: ${({theme}) => theme.colors.dark1};
        margin-bottom:42px;
    }
    .assets-collection{
        display:flex;
        justify-content:space-between;
    }
`;
