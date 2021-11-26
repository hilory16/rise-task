import styled from 'styled-components';

export const TestimoniesWrapper = styled.div`
    padding-bottom:100px;
    .text-content{
        max-width:540px;
        margin:0 auto;
        h2{
            font-weight: 600;
            font-size: 40px;
            line-height: 120%;
            text-align: center;
            letter-spacing: -0.05em;
            color: ${({theme}) => theme?.colors?.primary};
            margin-bottom:8px;
        }
        .testimony-desc{
            font-weight: 500;
            font-size: 18px;
            line-height: 23px;
            text-align: center;
            letter-spacing: -0.05em;
            color: ${({theme}) => theme?.colors?.dark2};
            margin-bottom:40px;
        } 
    }
    .testimonies{
        
    }
`;
