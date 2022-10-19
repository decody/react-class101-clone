import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const VisualWrap = styled(motion.div)`
  display: flex;
  gap: 6px;
  width: 1216px;
  margin: 0 auto;
  height: 520px;
`;
const Picture = styled.picture`
  width: 58%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Grid = styled.div`
  width: 42%;
  display: grid;
  gap: 6px;
`;
const GridList = styled.div`
  grid-template-columns: 1fr;
  height: 257px;

  &:first-child {
    grid-column: 1 / span 2;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
`;
const VisualLayer = styled(motion.div)`
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
const LayerInner = styled(motion.div)`
  position: relative;
  max-width: 896px;
  width: 100%;
`;
const CloseButton = styled(motion.button)`
  position: absolute;
  right: 0;
  top: -24px;
  z-index: 11;
  color: #fff;
`;
const VisualSwiper = styled(Swiper)`
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
    }
  }
  .swiper-slide {
  }
  .swiper-button-prev,
  .swiper-button-next {
    transition: 0.3s;
    opacity: 0;

    &:after {
      font-size: 32px;
      color: #fff;
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 10px;
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0px px 8px;
      border-radius: 3px;
      background-color: #fff;
      opacity: 0.56;
      transition: 0.3s;
      &.swiper-pagination-bullet-active {
        width: 24px;
        background-color: #fff;
        opacity: 1;
      }
    }
  }
`;

export function Visual() {
  // popup
  const [selectedId, setSelectedId] = useState(null);
  const handleSwiper = (swiper) => {};

  return (
    <>
      <VisualWrap layoutId={selectedId} onClick={() => setSelectedId('modal')}>
        <Picture>
          <Button>
            <Image
              src="https://cdn.class101.net/images/ea525942-0943-4ed5-93ca-83532da5c459"
              alt=""
            />
          </Button>
        </Picture>
        <Grid>
          <GridList>
            <Button>
              <Image
                src="https://cdn.class101.net/images/a116782d-efa0-4049-a7a8-75f51cd1e20c"
                alt=""
              />
            </Button>
          </GridList>
          <GridList>
            <Button>
              <Image
                src="https://cdn.class101.net/images/c2580a6e-45e8-4594-80a6-2ad95519cca0"
                alt=""
              />
            </Button>
          </GridList>
          <GridList>
            <Button>
              <Image
                src="https://cdn.class101.net/images/f58db5ef-35c3-4e29-b412-8955b3a4f972"
                alt=""
              />
            </Button>
          </GridList>
        </Grid>
      </VisualWrap>

      {selectedId && (
        <VisualLayer onClick={() => setSelectedId(null)}>
          <AnimatePresence>
            <LayerInner
              layoutId={selectedId}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <CloseButton onClick={() => setSelectedId(null)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.5 4L12 10.5 5.5 4 4 5.5l6.5 6.5L4 18.5 5.5 20l6.5-6.5 6.5 6.5 1.5-1.5-6.5-6.5L20 5.5 18.5 4z"
                    fill="#FFF"
                  ></path>
                </svg>
              </CloseButton>
              <VisualSwiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                navigation
                autoplay={false}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => handleSwiper(swiper)}
              >
                <SwiperSlide>
                  <Image
                    src="https://cdn.class101.net/images/ea525942-0943-4ed5-93ca-83532da5c459"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://cdn.class101.net/images/a116782d-efa0-4049-a7a8-75f51cd1e20c"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://cdn.class101.net/images/c2580a6e-45e8-4594-80a6-2ad95519cca0"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="https://cdn.class101.net/images/f58db5ef-35c3-4e29-b412-8955b3a4f972"
                    alt=""
                  />
                </SwiperSlide>
              </VisualSwiper>
            </LayerInner>
          </AnimatePresence>
        </VisualLayer>
      )}
    </>
  );
}
