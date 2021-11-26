import styled from 'styled-components';

export const RegulationWrapper = styled.div`
    display:flex;
    justify-content:center;
    position:relative;
    margin-bottom:80px;
    padding:80px 0;
    background: ${({theme}) => theme?.colors?.white};
    // background
    .color-gradient{
        position:absolute;
        top:0;
        bottom:0;
        width:20%;
        height:100%;
    }
    .left-item{
        left:0;
        mix-blend-mode: multiply;
        .top{
            background: ${({theme}) => theme?.colors?.orange};
            height:50%;
            filter: blur(20px);
            opacity: 0.9;
        }
        .bottom{
            background: ${({theme}) => theme?.colors?.pink};
            height:50%;
            filter: blur(20px);
            mix-blend-mode: multiply;
            opacity: 0.5;
        }
    }
    .right-item{
        right:0;
        .top{
            background: ${({theme}) => theme?.colors?.purple};
            height:50%;
            filter: blur(20px);
            mix-blend-mode: multiply;
        }
        .bottom{
            background: ${({theme}) => theme?.colors?.green};
            height:50%;
            filter: blur(20px);
            mix-blend-mode: multiply;
            opacity: 0.9;
        }
    }
    .text-content{
        width:50%;
        h2{
            font-weight: 600;
            font-size: 40px;
            line-height: 120%;
            text-align: center;
            letter-spacing: -0.05em;
            color: ${({theme}) => theme?.colors?.dark1};
            margin-bottom:16px;
        }
        .description{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color:${({theme}) => theme?.colors?.dark2};
        }
    }
`;
