import styled from 'styled-components';
import SubTitle from '../../components/common/SubTitle';
import CategoryLink from '../../components/main/CategoryLink';
import { Link } from 'react-router-dom';

const PopularCategory = () => {

    const categories = [
        { title: '디지털 드로잉', subcopy: '크리에이티브' },
        { title: '공예', subcopy: '크리에이티브' },
        { title: '드로잉', subcopy: '크리에이티브' },
        { title: '창업 부업', subcopy: '수익 창출' },
        { title: '베이킹 디저트', subcopy: '크리에이티브' },
        { title: '디자인', subcopy: '커리어' },
        { title: '운동', subcopy: '크리에이티브' },
        { title: '클래스 추천 받기', subcopy: '내게 맞는' },
    ];

    return (
        <PopularCategoryWrap>
            <SubTitle titleText={'인기 카테고리'} />
            <CategoryList>
                {categories.map((item, index) =>
                    <CategoryItem key={index}>
                        <CategoryLink title={item.title} subcopy={item.subcopy} />
                    </CategoryItem>
                )}
            </CategoryList>
            <CategoryBanner>
                <Link to="/">
                    <span>Class101+</span>
                    <h6>위 모든 카테고리의 클래스를 하나의 구독으로 즐겨 보세요</h6>
                </Link>
            </CategoryBanner>
        </PopularCategoryWrap>
    );
};

export default PopularCategory;

const PopularCategoryWrap = styled.div`
    margin-top: 72px;
`;

const CategoryList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-conetnt: space-between;
    margin: 0 -10px 20px;
`;

const CategoryItem = styled.li`
    display: flex;
    flex: 1 1 25%;
    padding: 10px;
`;

const CategoryBanner = styled.div`
    display: flex;
    width: 100%;
    height: 160px;
    padding: 0 60px;
    background-color: rgb(255, 93, 0);
    margin-bottom: 72px;
    border-radius: 14px;

    a {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        text-decoration: none;
        font-size: 18px;
        color: #fff;
    }
`;
