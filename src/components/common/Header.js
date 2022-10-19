import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Banner = styled.div`
  height: 50px;
  background-color: rgb(255, 76, 19);
  a {
    font-size: 14px;
    font-weight: normal;
    color: #fff;
    line-height: 20px;
    text-decoration: none;
  }
`;
const BannerInner = styled.div`
  width: 1216px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const BtnClose = styled.button`
  margin-left: auto;
  color: #fff;
`;
const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  background: #fff;
  backdrop-filter: var(--bg-color);
`;
const Headers = styled.div`
  display: flex;
  align-items: center;
  max-width: 1216px;
  margin: 0 auto;
  height: 78px;
`;
const Svg = styled.svg`
  display: block;
  width: auto;
  height: 24px;
  fill: #1a1a1a;
  margin-top: -3px;
`;
const NavWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Nav = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 40px;
`;
const NavItem = styled.li`
  a {
    border-width: 0;
    color: #1a1a1a;
    margin: 0 10px;
    padding: 0;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.625rem;
    white-space: nowrap;
    text-decoration: none;
  }
`;
const UtilMenu = styled.ul`
  margin-left: auto;
  display: flex;
  align-items: center;
`;
const UtilMenuItem = styled.li`
  a {
    border-width: 0px px;
    color: var(--system-on-color);
    margin: 0 0 0 24px;
    padding: 0px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.125rem;
    text-decoration: none;
  }
`;
const Search = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  width: 370px;
  height: 38px;
  margin-left: 30px;
  background: #f8f8f8;
`;
const Input = styled.input`
  width: calc(100% - 30px);
  height: 100%;
  padding: 0 10px;
  border: none;
  background: transparent;
`;
const SearchButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: #1a1a1a;
  }
`;

export function Header() {
  return (
    <>
      <Banner>
        <BannerInner>
          <Link
            to={{
              pathname:
                'https://class101.net/plus/ko/pages/class101-coupangeats',
            }}
            target="_blank"
          >
            구독 오픈 기념! 선착순 100명 쿠팡이츠 4천원 쿠폰 &gt;
          </Link>
          <BtnClose>닫기</BtnClose>
        </BannerInner>
      </Banner>

      <HeaderWrap>
        <Headers>
          <Link to="/">
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 33">
              <path d="M121.876 27.225a10.721 10.721 0 1 0 .001-21.443 10.721 10.721 0 0 0-.001 21.443Zm-4.168-15.071a5.92 5.92 0 0 1 4.198-1.75 5.915 5.915 0 0 1 4.199 1.75 6.035 6.035 0 0 1 1.682 4.382 5.936 5.936 0 0 1-1.682 4.33 5.945 5.945 0 0 1-8.397 0 5.96 5.96 0 0 1-1.682-4.33 6.026 6.026 0 0 1 1.682-4.382ZM137.329 26.796h4.912V6.21h-8.577v4.919h3.665v15.667ZM104.091 26.796h4.912V6.21h-8.577v4.919h3.665v15.667ZM45.764 23.043h8.665l1.447 3.753h5.408L52.707 6.21h-5.194L38.91 26.796h5.441l1.414-3.753ZM50.1 11.926l2.64 6.748h-5.254l2.614-6.748ZM72.757 22.447a3.759 3.759 0 0 1-2.225.583c-2.207 0-3.547-1.012-4.02-3.036l-5.208 1.012a6.232 6.232 0 0 0 2.895 4.577 10.823 10.823 0 0 0 6.078 1.642 10.052 10.052 0 0 0 6.031-1.75 5.695 5.695 0 0 0 2.42-4.898c0-3.127-1.88-5.12-5.636-5.977l-4.302-.945c-1.1-.248-1.656-.818-1.656-1.716a1.804 1.804 0 0 1 .771-1.487 3.156 3.156 0 0 1 2.01-.597 3.753 3.753 0 0 1 2.299.75 3.385 3.385 0 0 1 1.287 2.132l4.958-1.012a6.802 6.802 0 0 0-2.848-4.37 9.623 9.623 0 0 0-5.635-1.574 9.328 9.328 0 0 0-5.884 1.742 5.69 5.69 0 0 0-2.238 4.691c0 3.127 1.838 5.109 5.515 5.944l4.289.918c.55.077 1.065.31 1.487.67.288.319.437.738.416 1.166a1.815 1.815 0 0 1-.804 1.535ZM89.831 27.225c2.146.076 4.26-.537 6.031-1.75a5.696 5.696 0 0 0 2.42-4.898c0-3.127-1.88-5.12-5.636-5.977l-4.262-.945c-1.1-.248-1.655-.818-1.655-1.716a1.802 1.802 0 0 1 .77-1.487 3.156 3.156 0 0 1 2.01-.597 3.753 3.753 0 0 1 2.299.75 3.384 3.384 0 0 1 1.287 2.132l4.959-1.012a6.802 6.802 0 0 0-2.849-4.37 9.622 9.622 0 0 0-5.635-1.574 9.328 9.328 0 0 0-5.884 1.742 5.683 5.683 0 0 0-2.231 4.691c0 3.127 1.836 5.109 5.508 5.944l4.289.918c.55.077 1.066.31 1.488.67.287.319.436.738.415 1.166a1.815 1.815 0 0 1-.81 1.535 3.759 3.759 0 0 1-2.226.583c-2.202 0-3.542-1.012-4.02-3.036l-5.247 1.012a6.234 6.234 0 0 0 2.894 4.577 10.837 10.837 0 0 0 6.085 1.642ZM10.885 27.225a10.816 10.816 0 0 0 6.828-2.178 9.382 9.382 0 0 0 3.498-5.97h-5.26c-.32.936-.89 1.768-1.649 2.405a5.36 5.36 0 0 1-3.444 1.146 5.549 5.549 0 0 1-4.155-1.763 6.44 6.44 0 0 1 0-8.711 5.582 5.582 0 0 1 4.155-1.75 5.474 5.474 0 0 1 3.478 1.12 5.031 5.031 0 0 1 1.528 2.13h5.347a9.214 9.214 0 0 0-3.598-5.729 10.916 10.916 0 0 0-6.701-2.144 10.635 10.635 0 0 0-7.734 3.11 10.722 10.722 0 0 0 0 15.238 10.647 10.647 0 0 0 7.707 3.096ZM38.56 22.373H28.422V6.21h-5.073v20.586h13.389l1.822-4.423Z"></path>
            </Svg>
          </Link>

          <NavWrap>
            <Nav>
              <NavItem>
                <Link to="#">구독</Link>
              </NavItem>
              <NavItem>
                <Link to="#">스토어</Link>
              </NavItem>
            </Nav>
            <Search>
              <Input type="text" placeholder="찾으시는 취미가 있나요?" />
              <SearchButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="m22.925 21.16-5.605-5.605A8.453 8.453 0 0 0 19 10.5 8.5 8.5 0 0 0 10.5 2 8.5 8.5 0 0 0 2 10.5a8.5 8.5 0 0 0 8.5 8.5c1.895 0 3.64-.63 5.055-1.68l5.605 5.605c.1.1.255.1.355 0l1.415-1.415a.246.246 0 0 0-.005-.35ZM4.5 10.5c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6Z"></path>
                </svg>
              </SearchButton>
            </Search>
          </NavWrap>

          <UtilMenu>
            <UtilMenuItem>
              <Link to="#">크리에이터 지원</Link>
            </UtilMenuItem>
            <UtilMenuItem>
              <Link to="#">기업교육</Link>
            </UtilMenuItem>
            <UtilMenuItem>
              <Link to="#">로그인</Link>
            </UtilMenuItem>
          </UtilMenu>
        </Headers>
      </HeaderWrap>
    </>
  );
}
