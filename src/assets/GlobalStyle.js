import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
${reset}
:root {
    --bg-color: #fff;
    --font-color: #0C0C0C
}
* {
    box-sizing: border-box;
    font-family: 'GmarketSansMedium';
}

body {
    color: var(--font-color);
    background-color: var(--bg-color);
    font-weight: 400;
    // font-family: 'GmarketSansMedium', system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
}
button {
    outline: none;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
}
p {
    line-height: 1.4;
}
strong {
    font-weight: bold;
}
.App {
    width: 100%;
    margin: 0 auto;
}
::-webkit-scrollbar {
    width: 10px;
    height: 7px;
}
::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.7);
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
}
::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0.1);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px #fff;
}
`;

export default GlobalStyle;
