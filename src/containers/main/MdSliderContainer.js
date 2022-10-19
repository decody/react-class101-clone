import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderTitle from '../../components/common/SliderTitle';
import ThumbBox from '../../components/main/ThumbBox';
import slideImg1 from '../../assets/main/750xauto_01.webp';
import slideImg2 from '../../assets/main/750xauto_02.webp';
import slideImg3 from '../../assets/main/750xauto_03.webp';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { getMdClass } from '../../services';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MdSliderContainer = () => {
    const mdImgs = [slideImg1, slideImg2, slideImg3];
    const [thumbInfos, setThumbInfos] = useState([]);

    useEffect(() => {
        getMdClass()
            .then((res) => {
                const result = res.data;
                for (let i = 0; i < result.length; i++) {
                    result[i].imgUrl = mdImgs[i];
                }
                setThumbInfos(result);
            })
            .catch(error => console.log("error"));
    }, []);

    return (
        <MdSliderWrap>
            <SliderTitle titleText={'MD 추천 클래스'} />
            <SwiperWrap>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                >
                    {thumbInfos.map((item, key) => (
                        <SwiperSlide key={key}>
                            <ThumbBox
                                imgUrl={item.imgUrl}
                                imgTxt={item.imgTxt}
                                imgType={'long'}
                                tags={item.tags}
                                title={item.title}
                                favors={item.favors}
                                likes={item.likes}
                                isShowPrice={true}
                                UpdatedTime={null}
                                discount={item.discount}
                                monthPrice={item.monthPrice}
                                payUnit={item.payUnit}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SwiperWrap>
        </MdSliderWrap>
    );
};

export default MdSliderContainer;

const MdSliderWrap = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column; 
`;

const SwiperWrap = styled.div`
    margin-top: 16px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
    }
`;