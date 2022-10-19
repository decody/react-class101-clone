import React from 'react';
import styled from 'styled-components';

const LoaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: #fff;
  background: rgba(0, 0, 0, 1);
`;

const Loader = () => {
  return <LoaderWrap>Loading...</LoaderWrap>;
};

export default Loader;
