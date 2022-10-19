import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeLogo } from '../../assets/home_logo.svg';

export function Footer() {
  return (
    <FooterWrap>
      <FooterBox>
        <FooterCopyBox>
          <FooterLogo>
            <HomeLogo />
          </FooterLogo>
          <Slogun>
            클래스101은 모든 사람이 사랑하는 일을 하며<br />살 수 있도록 세상을 바꾸고자 합니다.
          </Slogun>
          <div>
            <button>kr 한국어</button>
          </div>
        </FooterCopyBox>
        <FooterMenu>
          <FooterCol>
            <FooterTitle>클래스101</FooterTitle>
            <div>
              <Link to="/">홈</Link>
              <Link to="/">기업교육</Link>
              <Link to="/">채용</Link>
              <Link to="/">도움말</Link>
            </div>
          </FooterCol>
          <FooterCol>
            <FooterTitle>크리에이터</FooterTitle>
            <div>
              <Link to="/">크리에이터 센터</Link>
              <Link to="/">정규 클래스 지원하기</Link>
              <Link to="/">도움말</Link>
            </div>
          </FooterCol>
          <FooterCol>
            <FooterTitle>고객센터</FooterTitle>
            <QnaBox>
              <QnaButton>문의하기</QnaButton>
              <QnaGuide>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</QnaGuide>
            </QnaBox>
          </FooterCol>
        </FooterMenu>
      </FooterBox>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  max-width: 1216px;
  margin: 0 auto;
`;

const FooterBox = styled.div`
  display: flex;
  padding-top: 40px;
  padding-bottom: 64px;
`;

const FooterCopyBox = styled.div`
  width: 366px;
  margin-top: 24px;
`;

const FooterLogo = styled.div`
  width: 110px;
  height: auto;
  overflow: hidden;
`;

const Slogun = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(102, 102, 102);
  font-feature-settings: "case", "ss02";
  margin-top: 20px;
`;

const FooterMenu = styled.h5`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  flex: 1 1 33.33%;
`;

const FooterTitle = styled.h5`
  color: rgb(26, 26, 26);
  margin-bottom: 8px;
  padding: 0 14px 0;
  font-size: 16px;
  line-height: 24px;
`;

const FooterCol = styled.div`
  width: 100%;

  a {
    display: flex;
    padding: 8px 12px;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    color: rgb(26, 26, 26);
    line-height: 20px;
    letter-spacing: -0.15px;
  }
`;

const QnaBox = styled.div`
  padding: 0 14px 0;
`;

const QnaButton = styled.button`
  display: flex;
  vertical-align: middle;
  border-radius: 3px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.15px;
  width: 100%;
  height: 40px;
  color: rgb(26, 26, 26);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgb(248, 248, 248);
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;

  &:hover,
  &:active {
    background-color: rgb(223, 223, 223);
  }
`;

const QnaGuide = styled.div`
  text-align: center;
  padding-top: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  color: rgb(162, 162, 162);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;