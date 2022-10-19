import CategoryMenuContainer from '../containers/main/CategoryMenuContainer';
import MainCoverContainer from '../containers/main/MainCoverContainer';
import MyClassSliderContainer from '../containers/main/MyClassSliderContainer';
import MdSliderContainer from '../containers/main/MdSliderContainer';
import TopTenSliderContainer from '../containers/main/TopTenSliderContainer';
import BannerSectionContainer from '../containers/main/BannerSectionContainer';
import LastestListContainer from '../containers/main/LastestListContainer';
import PopularCategoryContainer from '../containers/main/PopularCategoryContainer';
import ContentBlock from '../styles/ContentBlock';

const Main = () => {
    return (
        <>
            <CategoryMenuContainer />
            <MainCoverContainer />
            <ContentBlock>
                <MyClassSliderContainer />
                <MdSliderContainer />
                <TopTenSliderContainer />
            </ContentBlock>
            <BannerSectionContainer />
            <ContentBlock>
                <LastestListContainer />
                <PopularCategoryContainer />
            </ContentBlock>
        </>
    );
};

export default Main;
