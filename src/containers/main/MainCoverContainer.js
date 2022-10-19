import styled from 'styled-components';
import newClass from '../../assets/main/750xauto.webp';
import { ReactComponent as NextIcon } from '../../assets/next-icon.svg';
import { ReactComponent as PrevIcon } from '../../assets/prev-icon.svg';

const MainCoverContainer = () => {
    return (
        <MainCoverWrap>
            <MainCoverBox>
                <MainImage>
                    <img
                        src={newClass}
                        alt="New Class"
                    />
                </MainImage>
                <MainCopy>
                    <h4>
                        오픈 클래스 구경하고<br />
                        10% 구폰 받으세요!
                    </h4>
                    <p>
                        9월 5주차 막 오픈한<br />
                        뉴-클래스에 10% 쿠폰까지
                    </p>
                    <MainSlideNav>
                        <SlideCount>
                            <span>02</span>
                            <span>06</span>
                        </SlideCount>
                        <Slideline />
                        <NavBtns>
                            <PrevBtn>
                                <PrevIcon />
                            </PrevBtn>
                            <NextBtn>
                                <NextIcon />
                            </NextBtn>
                        </NavBtns>
                    </MainSlideNav>
                </MainCopy>

            </MainCoverBox>

        </MainCoverWrap>
    );
};

export default MainCoverContainer;

const MainCoverWrap = styled.div`
    position: relative;
    display: flex;
    height: 455px;
    margin-bottom: 20px;
    align-items: stretch;
    flex-direction: column;
    background-color: rgb(0, 0, 0);
`;

const MainCoverBox = styled.div`
    position: relative;
    width: 1216px;
    height: 455px;
    margin: 0 auto;
`;

const MainImage = styled.div`
    position: absolute;
    top: 32px;
    left: 0;
    width: 676px;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const MainCopy = styled.div`
    float: right;
    position: relative;
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    min-width: 450px;
    width: 516px;
    height: 455px;
    padding: 56px 0 32px 48px;
    z-index: 1;

    h4 {
        display: flex;
        white-space: pre-line;
        -webkit-box-align: center;
        align-items: center;
        max-width: 380px;
        color: rgb(255, 255, 255);
        font-size: 34px;
        line-height: 44px;
        font-weight: bold;
        letter-spacing: -0.02rem;
        word-break: keep-all;
        animation-duration: 600ms;
        animation-fill-mode: both;
        transition-timing-function: cubic-bezier(0, 0.63, 0.35, 1.01);
    }

    p {
        margin: 10px 0px 0px;
        white-space: pre-line;
        color: rgba(255, 255, 255, 0.6);
        font-size: 16px;
        line-height: 26px;
        max-width: 300px;
        font-weight: normal;
        animation-delay: 75ms;
        animation-duration: 600ms;
        animation-fill-mode: both;
        transition-timing-function: cubic-bezier(0, 0.63, 0.35, 1.01);
    }
`;

const MainSlideNav = styled.div`
    position: absolute;
    bottom: 30px;
    width: 468px
    height: 32px;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

const SlideCount = styled.div`
    display: flex;
    width: 50px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    cursor: default;
    margin-right: 8px;

    & span:nth-child(1) {
        margin-right: 10px;
    }
`;

const Slideline = styled.div`
    width: 300px;
    height: 6px;
    margin-right: 10px;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

const NavBtns = styled.span`
    
`;

const PrevBtn = styled.button`
    width: 24px;
    height: 24px;
    margin-right: 6px;

    svg {
        width: 100%;
        fill: none;
        opacity: 1;

        path {
            fill: #fff;
        }
    }
`;

const NextBtn = styled.button`
    width: 24px;
    height: 24px;

    svg {
        width: 100%;
        fill: none;
        opacity: 1;

        path {
            fill: #fff;
        }
    }
`;