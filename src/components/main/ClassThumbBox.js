import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as PlayBtn } from '../../assets/play-btn.svg';

const ClassThumbBox = ({
    imgUrl,
    imgTxt,
    title,
    classIng,
    validDate
}) => {
    return (
        <>
            <Link to="/products">
                <ImgBox>
                    <img
                        src={imgUrl}
                        alt={imgTxt}
                    />
                    <PlayBtnWrap>
                        <PlayBtn />
                    </PlayBtnWrap>
                </ImgBox>
                <InfoBox>
                    <Title>{title}</Title>
                    <ClassInfo>
                        <ClassIng>
                            <strong>{classIng}% 수강완료</strong>
                        </ClassIng>
                        <ValidDate>{validDate}일 남음</ValidDate>
                    </ClassInfo>
                </InfoBox>
            </Link>
        </>
    );
};

export default ClassThumbBox;

const ImgBox = styled.div`
    position: relative;
    width: 100%;
    height: 211px;
    overflow: hidden;
    border-radius: 1px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const InfoBox = styled.div`
    padding: 10px 0;
`;

const Title = styled.div`
    border-width: 0px;
    color: #101010;
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    font-weight: 700;
    line-height: 1.125rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;

const PlayBtnWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 30%;
        height: 30%;
        fill: #fff;
    }
`;

const ClassInfo = styled.div`
    display: block;
`;

const ClassIng = styled.div`
    border-width: 0px;
    margin: 20px 0 0 0;
    padding: 0;

    strong {
        color: rgb(255, 61, 0);
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
    }
`;

const ValidDate = styled.div`
    border-width: 0;
    color: rgb(102, 102, 102);
    margin: 20px 0 0 0;
    padding: 0;
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: 0.875rem;  
`;
