import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PopupWrap = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  z-index: 10;
  inset: 0px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.72);
  opacity: 1;
  visibility: visible;
  overscroll-behavior: contain;
`;
const PopupInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 480px;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 2%) 0px 0px 5px, rgb(0 0 0 / 2%) 0px 6px 4px,
    rgb(0 0 0 / 3%) 0px 9px 6px, rgb(0 0 0 / 3%) 0px 16px 12px,
    rgb(0 0 0 / 8%) 0px 24px 24px;
`;
const PopupHeader = styled(motion.div)`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
const H2 = styled(motion.h2)`
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  white-space: pre-wrap;
`;
const CloseButton = styled(motion.button)`
  position: absolute;
  top: 0;
  right: 0;
`;
const Svg = styled.svg``;
const PopupBody = styled.div`
  max-height: 600px;
  overflow-y: auto;
  padding: 10px 0;
  line-height: 1.5;
`;
const PopupFooter = styled(motion.div)``;

/**
 *
 * @param {*} props
 * title: 제목
 * selectedId: 팝업 토글 boolean
 * visible: 팝업 기본 open 여부
 * @returns
 */
LayerPopup.propTypes = {
  title: PropTypes.string,
  selectedId: PropTypes.bool,
  visible: PropTypes.bool,
};

export function LayerPopup(props) {
  // show hide
  const [HandleShowHide, setHandleShowHide] = useState(true);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (setHandleShowHide) {
      setHandleShowHide((prev) => {
        if (props.visible) prev = false;
        return (prev = !prev);
      });

      setIsLoading(true);
    }
  }, [props.selectedId, props.visible]);

  return (
    <AnimatePresence>
      {IsLoading && HandleShowHide && (
        <PopupWrap
          layoutId={HandleShowHide}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <PopupInner>
            <PopupHeader>
              <H2 dangerouslySetInnerHTML={{ __html: props.title }} />
              <CloseButton onClick={() => setHandleShowHide(null)}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
                    fill="#1a1a1a"
                  ></path>
                </Svg>
              </CloseButton>
            </PopupHeader>
            <PopupBody>{props.children}</PopupBody>
            <PopupFooter></PopupFooter>
          </PopupInner>
        </PopupWrap>
      )}
    </AnimatePresence>
  );
}
