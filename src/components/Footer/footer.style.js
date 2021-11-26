import styled from 'styled-components';

export const FooterWrapper = styled.div`
    padding:50px 0 90px 0;
    display:flex;
    & > *{
        flex:1;
    }
    .footer-links{
        h4{
            font-weight: 600;
            font-size: 16px;
            line-height: 90%;
            letter-spacing: -0.05em;
            color: #2D2D2D;
            margin-bottom:34px;
        }
        .footer-logo{
            margin-bottom:34px;
            width:56px;
        }
        ul{
            li{
                margin-bottom:16px;
                a{
                    font-family: DM Sans;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color:  ${({theme}) => theme?.colors?.dark1};
                }
                .link-arrow{
                    padding-left:10px;
                    padding-bottom:2px;
                }
            }
        }
    }
`;
