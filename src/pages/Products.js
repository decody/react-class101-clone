import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Aside } from '../components/products/aside/Aside';
import { Review } from '../components/products/contents/Review';
import { Visual } from '../components/products/contents/Visual';
import { ClassIntro } from '../components/products/contents/ClassIntro';
import { Curriculum } from '../components/products/contents/Curriculum';
import { Creator } from '../components/products/contents/Creator';
import { Community } from '../components/products/contents/Community';
import { TodayProducts } from '../components/products/contents/TodayProducts';
import { Quick } from '../components/common/Quick';

const Containers = styled.div`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1216px;
  margin: 24px auto 0 auto;
`;
const Contents = styled.div`
  width: 800px;
`;
const Tabs = styled.ul`
  position: sticky;
  top: 78px;
  z-index: 5;
  background: #fff;
  display: flex;
  gap: 20px;
`;
const ItemList = styled.li`
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    letter-spacing: -0.15px;
    padding: 14px 0;
    display: flex;
    align-items: center;
    color: rgb(162, 162, 162);
  }
`;
const LeaderBoard = styled.div`
  width: 100%;
  margin-top: 10px;
  border-bottom: 1px solid rgb(248, 248, 248);
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 0 0 0 24px;
  }
`;
const Image = styled.img`
  max-width: 100%;
`;
const LeaderInfo = styled.dl``;
const LeaderInfoDT = styled.dt`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px;
  font-weight: bold;
  color: inherit;
`;
const LeaderInfoDD = styled(LeaderInfoDT)`
  font-size: 11px;
`;
const LeaderLink = styled.div`
  width: 120px;
`;
const ClassInfo = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(248, 248, 248);
`;
const ClassInfoH2 = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.3px;
  margin: 0px 0px 16px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;
const ClassInfoDL = styled.dl`
  display: flex;
`;
const ClassInfoDT = styled.dt`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px 12px 0px 0px;
  color: rgb(162, 162, 162);
`;
const ClassInfoDD = styled(ClassInfoDT)`
  margin: 0px 48px 0px 0px;
  color: rgb(26, 26, 26);
`;

const Products = () => {
  return (
    <Containers>
      <Visual />
      <Container>
        <Contents>
          <Tabs>
            <ItemList>
              <a href="#review">??????</a>
            </ItemList>
            <ItemList>
              <a href="#intro">????????? ??????</a>
            </ItemList>
            <ItemList>
              <a href="#curriculum">????????????</a>
            </ItemList>
            <ItemList>
              <a href="#creator">???????????????</a>
            </ItemList>
            <ItemList>
              <a href="#community">???????????? 0???</a>
            </ItemList>
          </Tabs>

          <LeaderBoard>
            <Link
              to="https://class101.net/store/products/62ec79c0c81c7000166b80b9"
              target={'_blank'}
            >
              <LeaderInfo>
                <LeaderInfoDT>????????? ????????? ????????? ?????? ?????????</LeaderInfoDT>
                <LeaderInfoDD>??? ??? ?????? ????????? ???????????? ????????????</LeaderInfoDD>
              </LeaderInfo>
              <LeaderLink>
                <Image
                  src="https://cdn.class101.net/images/9671c0c0-3349-48aa-b04a-a24c7a37fa19/autoxauto.webp"
                  alt="????????? ?????????"
                />
              </LeaderLink>
            </Link>
          </LeaderBoard>

          <ClassInfo>
            <ClassInfoH2>????????? ??????</ClassInfoH2>
            <ClassInfoDL>
              <ClassInfoDT>????????? ??????</ClassInfoDT>
              <ClassInfoDD>15??? ??????, 112??? ????????????</ClassInfoDD>
              <ClassInfoDT>?????? ?????????</ClassInfoDT>
              <ClassInfoDD>?????? ?????? ??????</ClassInfoDD>
              <ClassInfoDT>?????? ?????? ??????</ClassInfoDT>
              <ClassInfoDD>??????</ClassInfoDD>
            </ClassInfoDL>
          </ClassInfo>

          {/* ?????? */}
          <Review />

          {/* ????????? ?????? */}
          <ClassIntro />

          {/* ???????????? */}
          <Curriculum />

          {/* ??????????????? */}
          <Creator />

          {/* ???????????? */}
          <Community />
        </Contents>

        <Aside />
      </Container>

      <TodayProducts />

      <Quick />
    </Containers>
  );
};

export default Products;
