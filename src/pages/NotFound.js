import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkWrap = styled.div`
  display: flex;
  gap: 10px;
`;

const NotFound = () => {
  return (
    <>
      <StyledNotFound>
        <Info>
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소가 정확한지 다시 한번 확인해 주세요.
        </Info>
        <LinkWrap>
          <Link to="/">홈으로 가기</Link>
          <Link to="/products">Products로 가기</Link>
        </LinkWrap>
      </StyledNotFound>
    </>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1216px;
  margin: 0 auto;
  padding: 80px 0 60px;

  a {
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    color: rgb(26, 26, 26);
    background-color: rgb(248, 248, 248);
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.2px;
    padding: 0px 16px;
    height: 40px;
    transition: background-color 0.1s ease 0s;
    text-decoration-line: none;
  }
`;

const Info = styled.div`
  text-align: center;
  line-height: 1.5;
`;
