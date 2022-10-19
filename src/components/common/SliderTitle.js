import styled from 'styled-components';

const TitleWrap = styled.div`
    display: flex;
    margin-top: 48px;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;

    h3 {
        border-width: 0px;
        color: #0c0c0c;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.625rem;
    }
`;

const SliderTitle = ({ titleText }) => {
    return (
        <TitleWrap>
            <h3>{titleText}</h3>
        </TitleWrap>
    );
}

export default SliderTitle;