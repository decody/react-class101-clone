import styled from 'styled-components';

const ClassIntroWrap = styled.section`
  padding: 48px 0px 24px;
`;
const ClassIntroH3 = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0 0 20px 0;
`;
const Span = styled.span`
  color: ${(props) => props?.color || 'rgb(26, 26, 26)'};
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
const IntroBox = styled.div`
  margin-top: 20px;
`;

export function ClassIntro() {
  return (
    <ClassIntroWrap id="intro">
      <ClassIntroH3>
        <Span color="rgb(0, 78, 195)">초급자</Span>분들을 위한
        <br />
        <Span color="rgb(0, 78, 195)">유튜브 채널로 수익창출</Span>
        <br />
        클래스입니다.
      </ClassIntroH3>

      <Image
        src="https://cdn-media.class101.net/images/adb527e4-2862-492e-8b0c-aee5fc476540"
        alt=""
      />

      <IntroBox>
        <h3 style={{ lineHeight: '1.5' }}>
          제가 알려드릴 내용들은
          <br />
          내용을 정말 정말 많이 담았습니다.
        </h3>
        <p style={{ marginTop: '10px' }}>
          <Image
            src="https://cdn.class101.net/images/a37d0ee7-90ba-4ba4-9520-a732ac486543"
            alt=""
          />
        </p>
        <p
          style={{
            marginTop: '50px',
          }}
        >
          세세한 원리와 방법들 하나하나를 모두 공개하려고 하니{' '}
          <strong>영상은 대략 100강 정도 분량에 이르렀습니다.</strong> 이것이
          제가 많은 구독자들의 성원에 힘입어 지금까지의 성원에 일부라도 보답하는
          길이라고 생각하였습니다.
        </p>
        <p
          style={{
            marginTop: '50px',
          }}
        >
          저는 이번 강좌를 런칭하며 많은 생각을 하였습니다. “과연 어디까지
          공개해야 하는 것인지”, 그리고 “그 방대한 양을 과연 사람들이 다 듣고
          숙지하며 따라올 수 있을지”, 이러한 여러 고민 끝에 저는 최종적인 결론을
          내렸습니다. 지금까지 “내가 습득해온 모든 노하우를 단 하나도 빠짐없이
          전부 다 공개하자”, 그리고 지금의 유튜브 알고리즘이 바뀌지 않는다면
          높은 확률로 성공할 수 있는 교육 커리큘럼을 구성하자.
        </p>
        <h3 style={{ lineHeight: '1.5', marginTop: '50px' }}>
          제가 알려드릴 내용들은
          <br />
          수익과 데이터로 증명하겠습니다.
        </h3>
        <p style={{ marginTop: '10px' }}>
          <Image
            src="https://cdn.class101.net/images/c141563d-5cb4-46e9-94d8-936db60c0509"
            alt=""
          />
        </p>
      </IntroBox>
    </ClassIntroWrap>
  );
}
