import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryLinkContainer = ({ title, subcopy }) => {
    return (
        <CategoryLinkWrap>
            <nav>
                <Link to="/">전체 카테고리</Link>
                <Link to="/">구독</Link>
                <Link to="/">BEST</Link>
                <Link to="/">이벤트</Link>
                <Link to="/">101 아카데미</Link>
                <Link to="/">신규 클래스</Link>
                <Link to="/">시그니처</Link>
            </nav>
        </CategoryLinkWrap>
    );
};

export default CategoryLinkContainer;

const CategoryLinkWrap = styled.div`
    
    nav {
        display: flex;
        width: 1216px;
        height: 44px;
        margin: 0 auto;

        a {
            display: flex;
            padding-right: 32px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            align-items: center;
            flex-direction: row;

            &:last-child {
                padding-right: 0;
            }
        }
    }
`;
