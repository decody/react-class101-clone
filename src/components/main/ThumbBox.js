import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ThumbBox = ({
    imgUrl,
    imgTxt,
    imgType,
    tags,
    title,
    favors,
    likes,
    isShowPrice,
    UpdatedTime,
    discount,
    monthPrice,
    payUnit
}) => {
    console.log("imgType >>", imgType)

    return (
        <>
            <Link to="/products">
                <ImgBox>
                    <img
                        src={imgUrl}
                        alt={imgTxt}
                        style={{ height: imgType === 'long' ? '368px' : '211px' }}
                    />
                </ImgBox>
                <InfoBox>
                    <Tags>{tags}</Tags>
                    <Title>{title}</Title>
                    <Additional>
                        <Favors>{favors}</Favors>
                        <Likes>{likes}</Likes>
                    </Additional>
                    {isShowPrice
                        ? <PriceInfo>
                            <Discount>{discount}%</Discount>
                            <MonthPrice>월 {monthPrice}원</MonthPrice>
                            <MonthUnit>({payUnit}개월)</MonthUnit>
                        </PriceInfo>
                        : <UpdatedInfo>
                            미션 답변 작성
                            <em>{UpdatedTime}</em>
                        </UpdatedInfo>
                    }
                </InfoBox>
            </Link>
        </>
    );
};

export default ThumbBox;

const ImgBox = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 4px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 1;
        transform: scale(1);
        transition: transform 0.3s ease 0s, opacity 0.1s linear 0s !important;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const InfoBox = styled.div`
    padding: 10px 0;
`;

const Tags = styled.p`
    display: flex;
    width: 100%;
    -webkit-box-align: stretch;
    align-items: stretch;
    flex-direction: row;
    color: #000;
    margin: 0;
    padding: 0;
    font-size: 0.675em;
    font-weight: 700;
    line-height: 0.875rem;
`;

const Title = styled.div`
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    color: rgb(26, 26, 26);
    height: 40px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 4px 0px 8px;
`;

const Additional = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const Favors = styled.span`
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px 8px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(162, 162, 162);
`;

const Likes = styled.span`
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px 8px 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(162, 162, 162);
`;

const UpdatedInfo = styled.div`
    padding: 14px 0 0;
    font-size: 11px;
    font-weight: normal;
    line-height: 16px;
    letter-spacing: normal;
    margin: 0px;
    color: rgb(26, 26, 26);
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    em {
        padding-left: 4px;
        color: rgb(243, 33, 59);
    }
`;

const PriceInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
`;

const Discount = styled.span`
    border-width: 0;
    color: #FD3049;
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.125rem;
`;

const MonthPrice = styled.strong`
    border-width: 0;
    color: #1A1A1A;
    margin: 0;
    padding: 0 8px 0 4px;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.125rem;
`;

const MonthUnit = styled.em`
    border-width: 0;
    color: #A2A2A2;
    margin: 0;
    padding: 0;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.875rem;
`;