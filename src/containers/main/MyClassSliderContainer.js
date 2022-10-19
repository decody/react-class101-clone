import { useState, useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import SliderTitle from '../../components/common/SliderTitle';
import ClassThumbBox from '../../components/main/ClassThumbBox';
import myClassImg1 from '../../assets/main/myclass_01.webp';
import myClassImg2 from '../../assets/main/myclass_02.webp';
import myClassImg3 from '../../assets/main/myclass_03.webp';
import myClassImg4 from '../../assets/main/myclass_04.webp';
import myClassImg5 from '../../assets/main/myclass_05.webp';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { getMyClass } from '../../services';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MyClassSliderContainer = () => {
    const myClassImgs = [myClassImg1, myClassImg2, myClassImg3, myClassImg4, myClassImg5];
    const [thumbInfos, setThumbInfos] = useState([]);

    const addImgsFromFetch = () => {
        getMyClass()
            .then((res) => {
                const result = res.data;
                for (let i = 0; i < result.length; i++) {
                    result[i].imgUrl = myClassImgs[i];
                }
                setThumbInfos(result);
            })
            .catch(error => console.log("error"));
    }
    useEffect(() => {
        addImgsFromFetch();
    }, []);

    return (
        <MyClassSliderWrap>
            <SliderTitle titleText={'내 클래스'} />
            <SwiperWrap>
                <MyClasSwiper
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{ clickable: true }}
                >
                    {thumbInfos.map((item, key) => (
                        <SwiperSlide key={key}>
                            <ClassThumbBox
                                imgUrl={item.imgUrl}
                                imgTxt={item.imgTxt}
                                title={item.title}
                                classIng={item.classIng}
                                validDate={item.validDate}
                            />
                        </SwiperSlide>
                    ))}
                </MyClasSwiper>
            </SwiperWrap>
        </MyClassSliderWrap>
    );
};

export default MyClassSliderContainer;

const MyClassSliderWrap = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column; 
    margin-top: 40px;
`;

const SwiperWrap = styled.div`
    margin-top: 16px;
    margin-bottom: 20px;

    a {
        text-decoration: none;
    }
`;

const MyClasSwiper = styled(Swiper)`
    overflow-x: clip;
    overflow-y: visible;

    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        top: -50px;
        left: inherit;
        right: 0;
        bottom: 0;
        width: 32px;
        height: 32px;
        margin: 0;
        background-image: none;

        &:after {
            color: #000;
            font-size: 18px;
        }
    }
    .swiper-button-prev {
        right: 40px;
    }
`;