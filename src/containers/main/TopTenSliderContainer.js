import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderTitle from '../../components/common/SliderTitle';
import ThumbBox from '../../components/main/ThumbBox';
import imgUrl1 from '../../assets/main/top10_01.webp';
import imgUrl2 from '../../assets/main/top10_02.webp';
import imgUrl3 from '../../assets/main/top10_03.webp';
import imgUrl4 from '../../assets/main/top10_04.webp';
import imgUrl5 from '../../assets/main/top10_05.webp';
import imgUrl6 from '../../assets/main/top10_06.webp';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import { getTopTenClass } from '../../services';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const TopTenSliderContainer = () => {
    const topTenImgs = [imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6];
    const [thumbInfos, setThumbInfos] = useState([]);

    const addImgsFromFetch = () => {
        getTopTenClass()
            .then((res) => {
                const result = res.data;
                for (let i = 0; i < result.length; i++) {
                    result[i].imgUrl = topTenImgs[i];
                }
                setThumbInfos(result);
            })
            .catch(error => console.log("error"));
    }

    useEffect(() => {
        addImgsFromFetch();
    }, []);

    return (
        <TopTenSliderWrap>
            <SliderTitle titleText={'실시간 TOP10 클래스'} />
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
        </TopTenSliderWrap>
    );
};

export default TopTenSliderContainer;

const TopTenSliderWrap = styled.div`
    display: flex;
    align-items: stretch;
    flex-direction: column; 
`;

const SwiperWrap = styled.div`
    margin-top: 16px;
    margin-bottom: 70px;

    a {
        text-decoration: none;
    }
`;

