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

SwiperCore.use([Navigation, Pagination, Autoplay]);

const MyClassSlider = () => {
    const thumbInfos = [
        {
            imgUrl: myClassImg1,
            imgTxt: '디자인 시스템의 모든 것',
            title: 'UIUX 디자인이 쉬워지는 디자인 시스템의 모든 것',
            classIng: 56,
            validDate: 56,
        },
        {
            imgUrl: myClassImg2,
            imgTxt: '화장품 패키지 디자인 실무',
            title: '핵심만 쏙쏙! 20년 경력 디자이너가 알려주는 화장품 패키지 디자인 실무',
            classIng: 15,
            validDate: 108,
        },
        {
            imgUrl: myClassImg3,
            imgTxt: '디자인 시스템의 모든 것',
            title: '풀스택 웹 개발로 배우는 확진자 지도 서비스 만들기',
            classIng: 28,
            validDate: 20,
        },
        {
            imgUrl: myClassImg4,
            imgTxt: '디자인 시스템의 모든 것',
            title: '포토샵과 일러스트레이터로 시작하는 나만의 굿즈 제작',
            classIng: 7,
            validDate: 20,
        },
        {
            imgUrl: myClassImg5,
            imgTxt: '디자인 시스템의 모든 것',
            title: '크리에이터 & 사업자를 위한 셀프 디자인 (로고, 명함, 포스터, 스터커)',
            classIng: 53,
            validDate: 262,
        },
    ];

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

export default MyClassSlider;

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