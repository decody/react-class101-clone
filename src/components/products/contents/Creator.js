import styled from 'styled-components';
import axios from 'axios';
import Loader from '../../common/Loader';
import { useEffect, useState } from 'react';

const CreatorWrap = styled.section`
  position: relative;
  padding: 48px 0px;
`;
const CreatorH3 = styled.h3`
  font-size: 24px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
  strong {
    font-weight: bold;
  }
`;
const CreatorAvatar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Exposure = styled.p`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  color: rgb(162, 162, 162);
`;
const ExposureImage = styled.img`
  width: 18px;
  height: 18px;
`;
const Avatar = styled.img`
  object-fit: cover;
  width: 64px;
  height: 64px;
  border: 1px solid rgb(248, 248, 248);
  border-radius: 100%;
`;
const LastActivity = styled.p`
  font-size: 11px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 16px;
  letter-spacing: normal;
  margin: 10px 0 0 0;
`;
const CreatorText = styled.div`
  position: relative;
  max-height: 384px;
  overflow: hidden;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(248, 248, 248);
  &.active {
    max-height: 100%;
    &:after {
      display: none;
    }
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 90px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
  }
  p {
    margin-top: 10px;
    white-space: pre-wrap;
  }
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;
const ButtonFolder = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  margin-top: 24px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  &:hover,
  &:active {
    background-color: rgb(223, 223, 223);
  }
`;

export function Creator() {
  // data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCreator = async () => {
    try {
      setLoading(true);
      const response = await (
        await axios.get('http://localhost:4000/creator')
      ).data;
      setData(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCreator();
  }, [setData]);

  // 더보기 toggled
  const itemRef = document.querySelector(CreatorText);
  const [toggled, setToggled] = useState(false);

  const handleMoreView = (e) => {
    if (toggled) {
      const scrollTop = e.target.offsetParent.offsetTop - 128;
      window.scrollTo({ top: scrollTop });
    }
    setToggled((prev) => !prev);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CreatorWrap id="creator">
          <CreatorAvatar>
            <CreatorH3>
              크리에이터
              <br />
              <strong>주언규PD</strong> 입니다.
            </CreatorH3>
            <Avatar src={data.avatar} alt={data.summary} />
          </CreatorAvatar>
          <Exposure>
            <ExposureImage src={data.snsImageUrl} alt={data.snsSummary} />
            {data.nickname}
          </Exposure>
          <LastActivity>
            마지막 활동 <strong>{data.answer}시간 전 미션 답변 작성</strong>
          </LastActivity>
          <CreatorText itemRef={itemRef} className={toggled ? 'active' : null}>
            <p>
              <img src={data.image} alt={data.alt} />
            </p>
            <p dangerouslySetInnerHTML={{ __html: data.text }} />
          </CreatorText>
          <ButtonFolder onClick={handleMoreView}>
            {toggled ? '접기' : '더보기'}
          </ButtonFolder>
        </CreatorWrap>
      )}
    </>
  );
}
