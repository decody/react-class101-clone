import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const CommunityWrap = styled.section`
  padding: 48px 0px;
`;
const ButtonFolder = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: rgb(26, 26, 26);
  background-color: rgb(248, 248, 248);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  margin-top: 24px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
  &:hover,
  &:active {
    background-color: rgb(223, 223, 223);
  }
`;
const CommunityH3 = styled.h3`
  display: flex;
  align-items: flex-end;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.4px;
  margin: 0px;
  color: rgb(26, 26, 26);
`;
const WriteTotal = styled.span`
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  color: rgb(202, 202, 202);
  margin-left: 10px;
`;
const WriteButton = styled.button`
  margin-left: auto;
  width: auto;
  display: inline-flex;
  align-items: center;
  border-radius: 3px;
  color: rgb(248, 248, 248);
  background-color: rgb(58, 58, 58);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.2px;
  padding: 0px 16px;
  height: 40px;
  transition: background-color 0.1s ease 0s;
  text-decoration-line: none;
`;

const ReviewSwiper = styled(Swiper)`
  margin-top: 24px;
  padding: 10px 0;
  .swiper-slide {
    height: 184px;
    padding: 16px;
    border-radius: 3px;
    box-shadow: rgb(41 42 43 / 10%) 0px 2px 5px,
      rgb(41 42 43 / 6%) 0px 0px 0.5px;
    margin: 3px 4px 0px;
  }
  .swiper-pagination {
    position: static;
    margin-top: 20px;
    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      margin: 0px px 8px;
      border-radius: 3px;
      background-color: rgb(102, 102, 102);
      opacity: 0.56;
      transition: 0.3s;
      &.swiper-pagination-bullet-active {
        width: 24px;
        background-color: rgb(102, 102, 102);
        opacity: 1;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    box-shadow: rgb(41 42 43 / 10%) 0px 1px 3px, rgb(0 0 0 / 4%) 0px 0px 0.5px;
    width: 32px;
    height: 32px;
    background-image: none;
    margin: 0px;
    position: absolute;
    top: inherit;
    left: inherit;
    right: 0;
    bottom: 0;
    &:after {
      font-size: 18px;
      color: #000;
    }
  }
  .swiper-button-prev {
    right: 40px;
  }
`;

const SlideTop = styled.div`
  display: flex;
  align-items: center;
`;
const SlideTxt = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 10px auto 0 auto;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  height: 60px;
  word-break: keep-all;
`;
const Image = styled.img`
  max-height: 100%;
  object-fit: cover;
`;
const Avatar = styled.span`
  position: relative;
  display: inline-block;
  margin-right: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
`;
const UserBox = styled.div``;
const Name = styled.p`
  font-size: 11px;
  line-height: 16px;
  letter-spacing: normal;
  margin: 0px;
  font-weight: 600;
  color: rgb(26, 26, 26);
`;
const Date = styled.p`
  font-size: 9px;
  font-weight: normal;
  line-height: 12px;
  letter-spacing: normal;
  margin: 0px;
  color: rgb(202, 202, 202);
`;
const SlideBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
const AllViewButton = styled.button`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
  padding: 0px;
  color: rgb(255, 61, 0);
`;
const DetailViewButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  color: rgb(162, 162, 162);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 0px;
`;
const ReviewBox = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  &:not(:first-of-type) {
    border-top: 1px solid rgb(239, 239, 239);
  }
`;
const ReviewParam = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  line-height: 20px;
  letter-spacing: -0.15px;
  margin: 20px 0 0 0;
  word-break: keep-all;
`;
const Fieldset = styled.fieldset`
  margin: 20px 0 0 0;
  position: relative;
  display: block;
  border-radius: 25px;
  padding: 0px 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  display: flex;
  align-items: center;
`;
const Legend = styled.legend`
  position: absolute;
  left: -9999px;
  font-size: 0;
  opacity: 0;
`;
const AddFile = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
`;
const Textarea = styled.textarea`
  font-size: 14px;
  font-weight: normal;
  color: rgb(26, 26, 26);
  letter-spacing: -0.15px;
  width: 100%;
  height: 44px;
  overflow: hidden;
  padding: 12px 10px 8px;
  outline: none;
  border: none;
  background-color: transparent;
  resize: none;
`;
const SendButton = styled.button``;
const Comments = styled.div`
  margin: 20px 0 0 50px;
`;
const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;
const CommentAvatar = styled.span`
  display: inline-block;
  margin-right: 10px;
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
  }
`;
const CommentName = styled.span`
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  line-height: 16px;
  margin: 0px 4px 0px 0px;
  color: rgb(58, 58, 58);
`;
const CommentDate = styled(CommentName)`
  font-size: 10px;
  color: rgb(202, 202, 202);
`;
const CommentParam = styled.p`
  border-width: 0px;
  color: rgb(0, 0, 0);
  margin: 5px 0 0 0;
  padding: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.125rem;
`;

export function Community() {
  return (
    <CommunityWrap id="community">
      <CommunityH3>
        커뮤니티 <WriteTotal>82개의 글</WriteTotal>
        <WriteButton>글 작성하기</WriteButton>
      </CommunityH3>

      <ReviewSwiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SlideTop>
            <Avatar>
              <Image src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1" />
            </Avatar>
            <UserBox>
              <Name>주언규PD</Name>
              <Date>2022. 6. 15.</Date>
            </UserBox>
          </SlideTop>
          <SlideTxt>
            안녕하세요
            <br />
            신사임당을 사랑하시고 클래스101 강의를 신청해 주신 여러 수강생
            여러분께 다시 한번 진심으로 감사의 말씀을 드립니다. <br />
            이번 클래스101 신사임당의 ‘가장 빠르게 돈 버는 유튜브 채널 만드는
            방법’강좌를 너무도 많은 분들이 신청해 주셔서 감개무량하게 생각하고
            있으며 최선을 다해 준비하고 있습니다.
            <br />
            이번 강의의 컨셉은 지난번과 다르게 실시간으로 바뀌어지는 유튜브
            트렌드를 반영하고 있습니다. 특히 이번에는 저 역시 강의를 들으시는
            분들과 같이 구독자 0명부터 새로운 채널을 만들어서 실시간으로
            키워가는 모습들을 여러분께 직접 보여드리고 있습니다.
          </SlideTxt>
          <SlideBottom>
            <AllViewButton>전체보기</AllViewButton>
            <DetailViewButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2.368 21.632l.594-5.347A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.967 9.967 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.137A7.96 7.96 0 0012 20a8 8 0 100-16 8 8 0 00-8 8 7.96 7.96 0 00.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2z"
                  fill="#a2a2a2"
                ></path>
              </svg>
              110
            </DetailViewButton>
          </SlideBottom>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTop>
            <Avatar>
              <Image src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1" />
            </Avatar>
            <UserBox>
              <Name>주언규PD</Name>
              <Date>2022. 6. 15.</Date>
            </UserBox>
          </SlideTop>
          <SlideTxt>
            안녕하세요. 이전에 저희 직원 뽑았던 것 기억하시나요?
            <br />
            이번에 새로운 직원 채용하여 저희의 유튜브 육성 교육 프로세스를 더
            다듬고, 완전히 업그레이드된 육성 방식을 장착하였습니다.
            <br />
            신사임당 채널과 신사임당 클립채널을 운영하며 동시에 4개 채널을
            0명부터 육성했습니다.
            <br />총 6개 채널을 통해 다양한 실험을 진행했고 기존의 방식의
            문제점을 발견하고 육성시간을 더 단축시킬수 있는 로직을
            발견했습니다.즉, 저희는 유튜브 공장으로 한걸음 더 다가서게
            되었습니다.
          </SlideTxt>
          <SlideBottom>
            <AllViewButton>전체보기</AllViewButton>
            <DetailViewButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M2.368 21.632l.594-5.347A9.967 9.967 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.967 9.967 0 01-4.285-.962l-5.347.594zm2.264-2.264l3.452-.384.268.137A7.96 7.96 0 0012 20a8 8 0 100-16 8 8 0 00-8 8 7.96 7.96 0 00.878 3.648l.138.268-.384 3.452zM8 13a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2zm4 0a1 1 0 110-2 1 1 0 110 2z"
                  fill="#a2a2a2"
                ></path>
              </svg>
              54
            </DetailViewButton>
          </SlideBottom>
        </SwiperSlide>
      </ReviewSwiper>

      <ReviewBox>
        <SlideTop>
          <Avatar>
            <Image src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1" />
          </Avatar>
          <UserBox>
            <Name>주언규PD</Name>
            <Date>2022. 6. 15.</Date>
          </UserBox>
        </SlideTop>
        <ReviewParam>
          안녕하세요 주피디님 이전 유튜브 강의 클래스101에서 듣고 실행하고 있는
          사람입니다.
          <br />
          최근 노아ai를 무료로 사용해서 썸네일과 제목 참고해서 해봐야겠다고
          생각하고 있어 먼저 노아를 만들어주심에 감사드립니다. <br />
          예전 스마트스토어 강의도 듣고 유튜브 아래에 링크를 달기도 하고
          있습니다.
          <br />
          <br />
          지금 제 고민은 2022년 버전 결제했을 때 예전이랑 같은 내용을 얘기할까봐
          하는 것입니다. <br />
          당시 내용은 제가 메모하면서 정리해놨기에 만약 일부분만 차이나고 거의
          비슷하면 재결제와 시청시간이 사실 좀 아깝기 때문입니다
          <br />
          <br />ㅠ 이번에 2022년 버전은 기존 신사임당 유튜브 수업 들은 사람이 또
          들어도 될만큼 내용이 많이 다를까요? <br />
          <br />
          사실 노아를 활용하는 수업만 있다면 그것만 듣고 싶은 생각도 있어서 이런
          저런 고민하다 여쭤봅니다. <br />
          노아는 무료본 써보니 정말 좋은 프로그램이었습니다.
          <br />
          <br /> 결제욕구가 생기더군요. 노아를 잘 활용하는 맞춤형 수업이 있으면
          좋겠습니다.
        </ReviewParam>
        <Fieldset>
          <Legend>댓글입력</Legend>
          <AddFile>
            <Image
              src="https://class101.net/images/ic-new-file-input-button.png"
              alt=""
            />
          </AddFile>
          <Textarea placeholder="댓글을 입력해주세요." />
          <SendButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.761C5.616 21.478 4 20.513 4 19V5c0-1.513 1.616-2.478 2.948-1.761l13 7c1.402.755 1.402 2.767 0 3.522l-13 7z"
                fill="#e5e5e5"
              ></path>
            </svg>
          </SendButton>
        </Fieldset>
      </ReviewBox>

      <ReviewBox>
        <SlideTop>
          <Avatar>
            <Image src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1" />
          </Avatar>
          <UserBox>
            <Name>쿵치팍치 초콜렛</Name>
            <Date>2022. 6. 15.</Date>
          </UserBox>
        </SlideTop>
        <ReviewParam>
          주피디님. 운동영상에 더빙을 넣고 싶습니다.
          <br />
          너무 궁금한거는 운동영상이 외국사람이던데 그런 영상들은 어디서
          가져오는건가요?
          <br /> 외국영상을 편집하는게 너무 궁금해용.
          <br /> 저작권료를 지불하는건지..그런 사이트가 있는건지요? 수업내용에
          있는가요? ^^
        </ReviewParam>
        <Comments>
          <CommentInfo>
            <CommentAvatar>
              <Image src="https://class101.net/images/default-user.png" />
            </CommentAvatar>
            <CommentName>느린 애플파이</CommentName>
            <CommentDate>2022. 9. 7.</CommentDate>
          </CommentInfo>
          <CommentParam>클래스 마감됐나요?</CommentParam>
        </Comments>
        <Comments>
          <CommentInfo>
            <CommentAvatar>
              <Image src="https://cdn.class101.net/images/faa9d576-9722-4b30-89d9-a8387e6193d1" />
            </CommentAvatar>
            <CommentName>주언규PD</CommentName>
            <CommentDate>2022. 9. 7.</CommentDate>
          </CommentInfo>
          <CommentParam>
            영상 자료 수집과 유튜브 저작권 관련 내용이 강의에 포함되어 있습니다
            :-)
          </CommentParam>
        </Comments>
        <Fieldset>
          <Legend>댓글입력</Legend>
          <AddFile>
            <Image
              src="https://class101.net/images/ic-new-file-input-button.png"
              alt=""
            />
          </AddFile>
          <Textarea placeholder="댓글을 입력해주세요." />
          <SendButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M6 11h4a1 1 0 110 2H6v6l13-7L6 5v6zm.948 9.761C5.616 21.478 4 20.513 4 19V5c0-1.513 1.616-2.478 2.948-1.761l13 7c1.402.755 1.402 2.767 0 3.522l-13 7z"
                fill="#e5e5e5"
              ></path>
            </svg>
          </SendButton>
        </Fieldset>
      </ReviewBox>

      <ButtonFolder>더보기</ButtonFolder>
    </CommunityWrap>
  );
}
