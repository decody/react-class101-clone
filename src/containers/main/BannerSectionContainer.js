import styled from 'styled-components';
import eventImage from '../../assets/main/2048xauto.png';

const BannerSectionContainer = () => {
    return (
        <BannerSectionWrap>
            <BannerWrap>
                <EventCopy>
                    <h4>하루 1장, 하루 10분 영어회화</h4>
                    <p>101학습지로 가볍게 공부하세요!</p>
                    <div>더 알아보기</div>
                </EventCopy>
                <ImgBox>
                    <img
                        src={eventImage}
                        alt="글래스101 구독"
                    />
                </ImgBox>
            </BannerWrap>
        </BannerSectionWrap>
    );
};

export default BannerSectionContainer;

const BannerSectionWrap = styled.div`
    display: block;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
`;

const BannerWrap = styled.a`
    position: relative;
    display: block;
    width: 1176px;
    margin: 0 auto;
    height: 206px;
    background-color: #0c0c0c;
    color: #fff;
`;

const ImgBox = styled.div`
    position: absolute;
    right: 32px;
    bottom: 0;
    width: 360px;
    height: auto;

    & > img {
        width: 100%;
        vertical-align: bottom;
    }
`;

const EventCopy = styled.div`
    padding-top: 40px;

    h4 {
        font-size: 32px;
        line-height: 44px;
        letter-spacing: -0.6px;
        margin: 0px;
        font-weight: bold;
        color: inherit;
    }

    p {
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 6px 0px 0px;
        color: inherit;
    }

    div {
        font-size: 14px;
        font-weight: normal;
        color: rgb(26, 26, 26);
        line-height: 20px;
        letter-spacing: -0.15px;
        margin: 0px;
        margin-top: 24px;
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        height: 32px;
        padding: 0px 14px;
        text-decoration: none;
        border-radius: 3px;
        background-color: rgb(248, 248, 248); 
    }
`;

