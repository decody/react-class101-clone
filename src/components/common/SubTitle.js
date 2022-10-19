import styled from 'styled-components';

const SubTitleWrap = styled.div`
    display: flex;
    font-size: 1.625rem;
    font-weight: 700;
    line-height: 2.25rem
`;

const SubTitle = ({ titleText }) => {
    return (
        <SubTitleWrap>
            <h2>{titleText}</h2>
        </SubTitleWrap>
    );
}

export default SubTitle;
