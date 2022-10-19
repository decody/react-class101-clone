import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SliderTitle from '../../components/common/SliderTitle';
import ThumbBox from '../../components/main/ThumbBox';
import imgUrl1 from '../../assets/main/lastest1.webp';
import imgUrl2 from '../../assets/main/lastest2.webp';
import imgUrl3 from '../../assets/main/lastest3.webp';
import imgUrl4 from '../../assets/main/lastest4.webp';
import imgUrl5 from '../../assets/main/lastest5.webp';
import imgUrl6 from '../../assets/main/lastest6.webp';
import imgUrl7 from '../../assets/main/lastest7.webp';
import imgUrl8 from '../../assets/main/lastest8.webp';

import { getLastestList } from '../../services';

const LastestListContainer = () => {
    const lastestImgs = [imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6, imgUrl7, imgUrl8];
    const [thumbInfos, setThumbInfos] = useState([]);

    const addImgsFromFetch = () => {
        getLastestList()
            .then((res) => {
                const result = res.data;
                for (let i = 0; i < result.length; i++) {
                    result[i].imgUrl = lastestImgs[i];
                }
                setThumbInfos(result);
            })
            .catch(error => console.log("error"));
    }

    useEffect(() => {
        addImgsFromFetch();
    }, []);

    return (
        <>
            <SliderTitle titleText={'최근 업데이트 클래스'} />
            <ThumbTxt>크리에이터가 최근 활동한 클래스에요.</ThumbTxt>
            <LastestListWrap>
                <ThumbList>
                    {thumbInfos.map((item, key) => (
                        <ThumbBoxItem key={key}>
                            <ThumbBox
                                imgUrl={item.imgUrl}
                                imgTxt={item.imgTxt}
                                tags={item.tags}
                                title={item.title}
                                favors={item.favors}
                                likes={item.likes}
                                UpdatedTime={item.UpdatedTime}
                            />
                        </ThumbBoxItem>
                    ))}
                </ThumbList>
            </LastestListWrap>
        </>
    );
};

export default LastestListContainer;

const LastestListWrap = styled.div`
    margin-top: 24px;
`;

const ThumbTxt = styled.p`
    font-size: 14px;
    font-weight: normal;
    color: rgb(162, 162, 162);
    line-height: 20px;
    letter-spacing: -0.15px;
    margin: 4px 0px 0px;
`;

const ThumbList = styled.ul`
    overflow: hidden;
    list-style: none;
    margin: 0px -12px -32px;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    place-content: stretch flex-start;  
`;

const ThumbBoxItem = styled.li`
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-right: 12px;
    padding-left: 12px;
    margin-bottom: 32px;
    box-sizing: border-box;

    a {
        display: block;
        text-decoration: none;
    }
`;

