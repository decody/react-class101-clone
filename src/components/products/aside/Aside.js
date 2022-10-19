import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { LayerPopup } from '../../common/LayerPopup';
import { Link } from 'react-router-dom';
import Loader from '../../common/Loader';

const AsideWrap = styled.section`
  width: 400px;
`;
const AsideInner = styled.div`
  position: sticky;
  top: 78px;
`;
const Section = styled.div`
  padding: 24px;
  border-radius: 3px;
  box-shadow: rgb(41 42 43 / 16%) 0px 2px 6px -2px;
  border: 1px solid rgb(255, 255, 255);
  margin-bottom: 12px;
`;
const ServiceBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;
const ServiceTitle = styled.div``;
const ServiceLogo = styled.span`
  display: block;
  width: auto;
  height: 36px;

  svg {
    display: block;
    width: auto;
    height: 100%;
    fill: rgb(0, 0, 0);
  }
`;
const ServiceObj = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const ServiceSbj = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 4px 0px 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: 500;
  color: rgb(202, 202, 202);
  svg {
    margin: -2px 0 0 5px;
  }
`;
const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
`;
const H2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 28px;
  margin: 5px 0 0 0;
`;
const Chips = styled.div`
  margin-bottom: -4px;
`;
const Chip = styled.span`
  display: inline-block;
  margin-right: 4px;
  border-radius: 3px;
  margin-top: 8px;
  padding: 3px 6px;
  background-color: rgb(248, 248, 248);
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => props?.color || 'rgb(162, 162, 162)'};
`;
const Sale = styled.p`
  font-size: 11px;
  font-weight: normal;
  color: rgb(162, 162, 162);
  line-height: 16px;
  letter-spacing: normal;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: flex-end;
`;
const SaleInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;
const PriceBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
`;
const Percent = styled.span`
  font-size: 16px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0 10px 0 0;
`;
const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.45px;
  margin: 0px;
`;
const SaleModal = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const SaleButton = styled.button`
  vertical-align: middle;
  margin: 3px 0 0 3px;
`;
const UserEvaluation = styled.div`
  margin-top: 16px;
  padding: 20px 0px;
  border-top: 1px solid rgb(248, 248, 248);
`;

const UserList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
const UserListItem = styled(SaleModal)`
  width: calc(50% - 20px);
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;
const Share = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  -webkit-box-align: center;
  align-items: center;
`;
const ShareButton = styled.button`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding: 16px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  svg {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(223, 223, 223);
  }
`;
const AsideButtonPage = styled.div`
  margin-top: 12px;
  a {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 86, 0);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.2px;
    padding: 0px 20px;
    height: 48px;
    transition: background-color 0.1s ease 0s;
    text-decoration-line: none;
    &:hover,
    &:active {
      background-color: rgb(204, 69, 0);
    }
  }
`;
const LayerSale = styled.div``;
const LayerSaleH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 24px;
  letter-spacing: -0.45px;
  margin: 0px;
`;
const LayerSaleDl = styled.dl`
  margin: 16px 0;
  padding: 16px 0;
  border-top: 1px solid rgb(248 248 248);
  border-bottom: 1px solid rgb(248 248 248);
`;
const LayerSaleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;
const LayerSaleDt = styled.dt`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const LayerSaleDd = styled.dd`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const OrderList = styled.ol`
  margin-top: 16px;
`;
const OrderItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 8px 0;
`;
const NoticeBox = styled.div`
  margin-top: 32px;
`;
const Notice = styled.ul``;
const NoticeItem = styled.li`
  font-size: 14px;
  font-weight: normal;
  color: #625f5f;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 8px 0 0 18px;
  text-indent: -18px;
`;
const NoticeTitle = styled(NoticeItem)``;
const BannerPopParam = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const BannerPopList = styled.ul`
  display: flex;
`;
const BannerPopListItem = styled.li`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 12px 16px 0 0;
  display: flex;
  font-weight: 600;
  color: rgb(255, 61, 0);
`;

export function Aside() {
  // 클래스 할인가 show hide
  const [saleSelectedId, setSaleSelectedId] = useState(null);
  const saleLayerToggle = () => {
    setSaleSelectedId((prev) => !prev);
  };
  // 준비물까지 챙겨주는 온라인 클래스 show hide
  const [bannerSelectedId, setBannerSelectedId] = useState(null);
  const BannerLayerToggle = () => {
    setBannerSelectedId((prev) => !prev);
  };

  // DATA
  const [asideData, setAsideData] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchAside = async () => {
    try {
      setLoading(true);
      const response = await (
        await axios.get('http://localhost:4000/aside')
      ).data;
      setAsideData(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAside();
  }, [setAsideData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AsideWrap>
          <AsideInner>
            <Section>
              <SubTitle>
                {asideData.channel} · {asideData.director}
              </SubTitle>
              <H2>{asideData.title}</H2>

              <Chips>
                {asideData.chips &&
                  asideData.chips.map((item, i) =>
                    i === 0 ? (
                      <Chip key={item} color="red">
                        {item}
                      </Chip>
                    ) : (
                      <Chip key={item}>{item}</Chip>
                    ),
                  )}
              </Chips>
              <Sale>{asideData.monthlyInstallment}개월 할부</Sale>

              <SaleInfo>
                <SaleModal>
                  클래스 할인가
                  <SaleButton
                    layoutId={saleSelectedId}
                    onClick={saleLayerToggle}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#1a1a1a"
                      fillRule="evenodd"
                      viewBox="0 0 24 24"
                    >
                      <motion.path d="M11 18h2v-2h-2v2zm1-12a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 00-4-4zm0 15a9 9 0 100-18 9 9 0 100 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></motion.path>
                    </motion.svg>
                  </SaleButton>
                </SaleModal>

                <PriceBox>
                  <Percent>{asideData.sale}%</Percent>
                  <Price>월 {asideData.price}원</Price>
                </PriceBox>
              </SaleInfo>

              <UserEvaluation>
                <UserList>
                  {asideData.classInfo &&
                    asideData.classInfo.map((item, i) => (
                      <UserListItem key={item} as="li">
                        {i === 0 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="#1a1a1a"
                            viewBox="0 0 24 24"
                          >
                            <path d="M15.5 12L10 9v6l5.5-3z"></path>
                            <path
                              fillRule="evenodd"
                              d="M3 3a2 2 0 00-2 2v14a2 2 0 002 2h18a2 2 0 002-2V5a2 2 0 00-2-2H3zm0 16h18V5H3v14z"
                            ></path>
                          </svg>
                        )}
                        {i === 1 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M21 6h-3.337c.216-.455.337-.963.337-1.5A3.5 3.5 0 0014.5 1 3.49 3.49 0 0012 2.051 3.49 3.49 0 009.5 1 3.5 3.5 0 006 4.5c0 .537.121 1.045.337 1.5H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.5 1.5 0 01-.5.085H13V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 1115 5.915zM11 4.5V6H9.5a1.5 1.5 0 111.415-2c.055.156.085.325.085.5z"
                              fill="#1a1a1a"
                            ></path>
                          </svg>
                        )}
                        {i === 2 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            viewBox="0 0 23 22"
                          >
                            <path
                              d="M14.7084 10.9082C16.0834 9.89984 17 8.29567 17 6.50817C17.0459 3.529 14.6625 1.054 11.7292 0.916503C8.56671 0.779003 6.00004 3.29984 6.00004 6.4165C6.00004 8.24984 6.91671 9.89984 8.29171 10.9082C4.80837 12.1915 2.33337 15.5373 2.33337 19.479C2.33337 19.6165 2.33337 19.7998 2.33337 19.9373C2.33337 20.0748 2.42504 20.1665 2.56254 20.1665H4.39587C4.53337 20.1665 4.62504 20.0748 4.62504 19.9373C4.62504 19.7998 4.62504 19.6623 4.62504 19.479C4.62504 15.6748 7.69587 12.604 11.5 12.604C15.3042 12.604 18.375 15.6748 18.375 19.479C18.375 19.6165 18.375 19.754 18.375 19.9373C18.375 20.0748 18.4667 20.1665 18.6042 20.1665H20.4375C20.575 20.1665 20.6667 20.0748 20.6667 19.9373C20.6667 19.7998 20.6667 19.6165 20.6667 19.479C20.6667 15.5373 18.1917 12.1915 14.7084 10.9082ZM11.5 9.62484C9.71254 9.62484 8.29171 8.204 8.29171 6.4165C8.29171 4.629 9.71254 3.20817 11.5 3.20817C13.2875 3.20817 14.7084 4.629 14.7084 6.4165C14.7084 8.204 13.2875 9.62484 11.5 9.62484Z"
                              fill="#1a1a1a"
                            ></path>
                          </svg>
                        )}
                        {i === 3 && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="#1a1a1a"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fillRule="evenodd"
                              d="M13.139 10l.844-5.066a2 2 0 00-1.279-2.205l-.419-.155-2.604 7.205V20h8.8l1.467-8.836A1 1 0 0018.961 10h-5.822zm-5.458-.571L11.089 0l2.308.853a4 4 0 012.559 4.41L15.5 8h3.461a3 3 0 012.96 3.491l-1.573 9.477C20.25 21.566 19.779 22 19.23 22H7.681V9.429z"
                            ></path>
                            <path d="M3.135 9.429C2.503 9.429 2 9.989 2 10.68v10.069C2 21.427 2.508 22 3.135 22h2.273V9.429H3.135z"></path>
                          </svg>
                        )}

                        {item}
                      </UserListItem>
                    ))}
                </UserList>
              </UserEvaluation>

              <Share>
                <ShareButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.5 9c0-2-1.5-3.9-3.7-3.9-2.3 0-3.8 1.63-4.8 3.33-1-1.7-2.5-3.33-4.8-3.33C5 5.1 3.5 6.867 3.5 9c0 4.62 4.949 7.667 8.5 9.623 3.551-1.956 8.5-5.003 8.5-9.623zm-19-.176C1.5 5.607 3.962 3 7 3c2.7 0 4 1 5 2.2C13 4 14.3 3 17 3c3.038 0 5.5 2.607 5.5 5.824C22.5 14.827 16.684 18.52 12 21 7.316 18.52 1.5 14.827 1.5 8.824z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                  {asideData.goodNumber}
                </ShareButton>
                <ShareButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 19v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7h16zM13 5.829l3.586 3.587L18 8.001 12 2 6 8.001l1.414 1.414L11 5.829v10.173h2V5.829z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                  공유하기
                </ShareButton>
                <ShareButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M21 6h-3.337c.216-.455.337-.963.337-1.5A3.5 3.5 0 0014.5 1 3.49 3.49 0 0012 2.051 3.49 3.49 0 009.5 1 3.5 3.5 0 006 4.5c0 .537.121 1.045.337 1.5H3a1 1 0 00-1 1v4a1 1 0 001 1v8a1 1 0 001 1h16a1 1 0 001-1v-8a1 1 0 001-1V7a1 1 0 00-1-1zM4 8v2h7V8H4zm9 0v2h7V8h-7zm-2 4H5v7h6v-7zm2 7v-7h6v7h-6zm2-13.085a1.5 1.5 0 01-.5.085H13V4.5c0-.175.03-.344.085-.5A1.5 1.5 0 1115 5.915zM11 4.5V6H9.5a1.5 1.5 0 111.415-2c.055.156.085.325.085.5z"
                      fill="#1a1a1a"
                    ></path>
                  </svg>
                  선물하기
                </ShareButton>
              </Share>
              <AsideButtonPage>
                <Link to="/login">수강 옵션 구경하기</Link>
              </AsideButtonPage>
            </Section>
            <Section>
              <ServiceBanner
                layoutId={bannerSelectedId}
                onClick={BannerLayerToggle}
              >
                <ServiceTitle>
                  <ServiceObj>{asideData.bannerTitle}</ServiceObj>
                  <ServiceSbj>
                    {asideData.bannerDesc}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="#cacaca"
                      fillRule="evenodd"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11 18h2v-2h-2v2zm1-12a4 4 0 00-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 00-4-4zm0 15a9 9 0 100-18 9 9 0 100 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                    </svg>
                  </ServiceSbj>
                </ServiceTitle>
                <ServiceLogo>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 33">
                    <path d="M30.603 6.187v7.027l-.043.053-.069-.215-.073-.214a10.546 10.546 0 0 0-9.901-7.088h-.018a10.545 10.545 0 0 0-9.909 7.095l-.073.215-.068.214-.046-.052V6.187H.3v20.621h10.103v-7.027l.046-.053.068.215.073.212a10.545 10.545 0 0 0 9.902 7.09h.017a10.545 10.545 0 0 0 9.902-7.09l.073-.212.068-.215.043.053v7.035h10.103V6.186H30.603Z"></path>
                  </svg>
                </ServiceLogo>
              </ServiceBanner>
            </Section>
          </AsideInner>

          <LayerPopup
            visible={false}
            title="할인 및 할부 안내"
            selectedId={saleSelectedId}
          >
            <LayerSale>
              <LayerSaleH3>할인가 안내</LayerSaleH3>
              <LayerSaleDl>
                <LayerSaleDiv>
                  <LayerSaleDt>정가</LayerSaleDt>
                  <LayerSaleDd>{asideData.price}원</LayerSaleDd>
                </LayerSaleDiv>
                <LayerSaleDiv>
                  <LayerSaleDt>기본 할인 금액</LayerSaleDt>
                  <LayerSaleDd>
                    -{(asideData.price * (asideData.sale * 0.01)).toFixed(0)}원
                  </LayerSaleDd>
                </LayerSaleDiv>
                <LayerSaleDiv>
                  <LayerSaleDt>
                    {asideData.monthlyInstallment}개월 할부
                  </LayerSaleDt>
                  <LayerSaleDd>
                    {asideData.sale}% 월{' '}
                    {(
                      asideData.price / asideData.monthlyInstallment -
                      (asideData.price / asideData.monthlyInstallment) *
                        (asideData.sale * 0.01)
                    ).toFixed(0)}
                    원
                  </LayerSaleDd>
                </LayerSaleDiv>
              </LayerSaleDl>

              <LayerSaleH3>카드사 무이자 할부 안내</LayerSaleH3>
              <OrderList>
                <OrderItem>1. 신한카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
                <OrderItem>2. 현대카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
                <OrderItem>3. 삼성카드: 2, 3, 4, 5, 6 개월 무이자</OrderItem>
                <OrderItem>4. 우리카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
                <OrderItem>5. 국민카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
                <OrderItem>6. 롯데카드: 2, 3, 4 개월 무이자</OrderItem>
                <OrderItem>
                  7. 농협카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자
                </OrderItem>
                <OrderItem>
                  8. 하나카드: 2, 3, 4, 5, 6, 7, 8 개월 무이자
                </OrderItem>
                <OrderItem>9. BC카드: 2, 3, 4, 5, 6, 7 개월 무이자</OrderItem>
                <OrderItem>10. 전북카드: 2, 3, 4, 5 개월 무이자</OrderItem>
              </OrderList>

              <NoticeBox>
                <NoticeTitle as="p">[유의사항]</NoticeTitle>
                <Notice>
                  <NoticeItem>
                    ※ 상기행사는 카드사 사정에 의해 변경 및 중단될 수 있습니다.
                    자세한 사항은 각 카드사 홈페이지를 참조 바랍니다.
                  </NoticeItem>
                  <NoticeItem>
                    ※ 법인/기업(개인사업자)/체크/선불/GIFT/하이브리드/ 은행계열
                    카드 등 제외
                  </NoticeItem>
                  <NoticeItem>
                    ※ 무이자/부분무이자 적용 시, 포인트/마일리지 적립 불가.
                  </NoticeItem>
                  <NoticeItem>
                    ※ 상점부담
                    무이자/직계약/특별제휴가맹점,오프라인(비인증),대학등록금,지방세(세외수입,상수도),제약(B2B),주유,자동차,승차권,방송수신료,보험
                    등 제외
                  </NoticeItem>
                  <NoticeItem>
                    ※ 하나카드는 PG업종 외 서적, 학원, 면세점 등 별도업종 및
                    환금성가맹점 제외
                  </NoticeItem>
                </Notice>
              </NoticeBox>
            </LayerSale>
          </LayerPopup>

          <LayerPopup
            visible={false}
            title="준비물과 함께<br />언제 어디서든 수강하세요"
            selectedId={bannerSelectedId}
          >
            <BannerPopParam>
              필요한 모든 준비물을 무료배송으로 보내드려요.
              <br />
              언제 어디서든 편하게 시작해보세요
            </BannerPopParam>
            <BannerPopList>
              <BannerPopListItem>모든 디바이스 지원</BannerPopListItem>
              <BannerPopListItem>
                수강 기간 내 무제한 반복수강
              </BannerPopListItem>
            </BannerPopList>
          </LayerPopup>
        </AsideWrap>
      )}
    </>
  );
}
