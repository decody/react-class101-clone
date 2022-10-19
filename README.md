# 클래스 101 클론

이 프로젝트는 리액트 학습을 위한 클래스101 클론코딩 repository입니다.

## 프로젝트 폴더 (src 하위 폴더)

- assets : 공통 이미지, 웹 폰트
  - class_images : 클래스 101 내 강좌 썸네일 이미지 경로
- components : 모든 페이지에서 공통으로 사용하는 common 폴더와 각 페이지 이름의 폴더를 둠. (presentational 컴포넌트 폴더)
  - common : 공통 컴포넌트
  - main : 메인 페이지 컴포넌트
  - products : 상세 페이지 컴포넌트
- containers : api 로직이나 비즈니스 로직, redux나 recoil state 관리 등의 컴포넌트
  - main : 메인 페이지 로직 컴포넌트
  - products : 상세 페이지 로직 컴포넌트
- hooks : 공통 hook 함수
- pages : route에 따라 랜딩되는 페이지 컴포넌트들
- services : 백엔드 연동 api 메서드
- stores : 공통 저장소 경로 (recoil)
- styles : 전역 css 적용
- utils : 공통 유틸함수

## 기술 스택

- json-server
- react
- react-dom
- react-router-dom
- react-scripts
- http-proxy-middleware
- axios
- lodash
- styled-components
- styled-reset
- recoil

## JSON Server 기동

- `json-server --watch ./src/data/db.json --port 4000`
- https://github.com/typicode/json-server
- 웹에서 JSON Server 기동 https://my-json-server.typicode.com/

## 프로젝트 폴더 참고

- 코드숨: https://github.com/CodeSoom/ConStu
- https://thinkforthink.tistory.com/373

## 구현 기능

1. decody : 메인 페이지

- 상단 GNB, 검색바
- 메인 커버 (슬라이드 기능 제외)
- 내 클래스 (슬라이더)
- MD 추천 클래스
- 최근 업데이트 클래스 (목록)
- 인기 카테고리
- 풋터

2. jinavely : 상세 페이지 (유튜버 신사임당 강의)

- 클래스 신청 (클래스 신청시 모달 처리)
- 클래스 커버
- 퀵 링크 (페이지 내 컨텐츠 이동)
- 클래스 정보
- 리뷰
- 강좌 정보
- 커리큘럼
- 크리에이터 소개
- 커뮤니티
- 내가 본 상품 (슬라이더)
