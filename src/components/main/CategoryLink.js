import styled from 'styled-components';

const CategoryLink = ({ title, subcopy }) => {
    return (
        <CategoryLinkWrap>
            <p>{subcopy}</p>
            <h5>{title}</h5>
        </CategoryLinkWrap>
    );
};

export default CategoryLink;

const CategoryLinkWrap = styled.div`
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgb(248, 248, 248);
    border-color: rgb(229, 229, 229);
    text-align: center;
    flex-direction: row;
    cursor: pointer;

    p {
        font-size: 0.875rem;
        line-height: 1.125rem;
        color: #0C0C0C;
    }

    h5 {
        border-width: 0px;
        color: var(--system-on-color);
        margin: 0px;
        padding: 0px;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.125rem;
    }
`;