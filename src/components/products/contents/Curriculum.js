import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from '../../common/Loader';

const CurriculumWrap = styled.section`
  padding: 48px 0px;
`;
const CurriculumH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const Description = styled.p`
  margin: 12px 0px 16px;
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  color: rgb(26, 26, 26);
`;
const OrderList = styled.ol``;
const OrderListItem = styled.li`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgb(248, 248, 248);
  &:first-child {
    padding-top: 0;
    border-top: none;
  }
`;
const CurriculumList = styled.ol``;
const CurriculumListItem = styled.li`
  margin-top: 12px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 13px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 0px;
    color: rgb(26, 26, 26);
  }
`;
const FreeLink = styled(CurriculumListItem)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 13px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const Badge = styled.span`
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(58, 58, 58);
  border-radius: 3px;
  padding: 4px 5px;
  color: #fff;
  margin-left: auto;
  white-space: nowrap;
`;
const Sequence = styled.span`
  font-size: 10px;
  font-weight: normal;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px 16px 0px 0px;
  background-color: rgb(248, 248, 248);
  color: rgb(98, 98, 98);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

export function Curriculum() {
  const [curryData, setCurryData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCurriculum = async () => {
    try {
      setLoading(true);
      const response = await (
        await axios.get('http://localhost:4000/curriculum')
      ).data;
      setCurryData(response);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCurriculum();
  }, [setCurryData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CurriculumWrap id="curriculum">
          <CurriculumH3>커리큘럼</CurriculumH3>
          <Description>
            클래스를 신청하신 분들이 배우고 있는 커리큘럼입니다. 콘텐츠는 배우기
            쉽게 영상, 수업노트, 첨부파일로 구성되어있습니다.
          </Description>

          <OrderList>
            {curryData.map((items) => (
              <OrderListItem key={items.bigMenu.id}>
                {items.bigMenu.name}
                <CurriculumList>
                  {items.menuLink.map((item) => (
                    <CurriculumListItem key={item.id}>
                      {item.free ? (
                        <FreeLink as="div">
                          <Sequence>{item.id}</Sequence>
                          {item.name}
                          <Badge>무료 공개</Badge>
                        </FreeLink>
                      ) : (
                        <Link to="#">
                          <Sequence>{item.id}</Sequence>
                          {item.name}
                        </Link>
                      )}
                    </CurriculumListItem>
                  ))}
                </CurriculumList>
              </OrderListItem>
            ))}
          </OrderList>
        </CurriculumWrap>
      )}
    </>
  );
}
