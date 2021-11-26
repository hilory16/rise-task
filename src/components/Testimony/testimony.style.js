import styled from 'styled-components';

export const TestimonyWrapper = styled.div`
    width:36vw; 
    padding:30px 15px;
    .testimony-item{
        background: #FFFFFF;
        border: 1px solid #ECFEFE;
        box-sizing: border-box;
        box-shadow: 0px 12px 24px rgba(64, 187, 195, 0.15);
        border-radius: 10px;
        padding:28px;
        height:258px;
        position:relative;
        h6{
            font-family: DM Sans;
            font-weight: normal;
            font-size: 16px;
            line-height: 24px;
            color: ${({theme}) => theme?.colors?.dark2};
        }
        .user{
            display:flex;
            align-items:center;
            position:absolute;
            left:24px;
            bottom:24px;
        }
        .name{
            font-weight: 600;
            font-size: 16px;
            line-height: 90%;
            letter-spacing: -0.05em;
            color: #2D2D2D;
        }
        .user-avatar{   
            width:32px;
            height:32px;
            margin-right:16px;
        }
    }
`;
