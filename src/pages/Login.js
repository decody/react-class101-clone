import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  font-weight: bold;
  width: 1216px;
  height: calc(100vh - 250px);
  margin: 0 auto;
  padding: 20px 0;
  a {
    font-size: 24px;
    text-decoration: none;
    margin-top: 20px;
    color: #000;
  }
`;

const Login = () => {
  return (
    <>
      <LoginWrap>
        로그인을 하시오. 지발...
        <Link to="/products">Products</Link>
      </LoginWrap>
    </>
  );
};

export default Login;
