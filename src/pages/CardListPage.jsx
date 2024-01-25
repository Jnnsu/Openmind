import styled from 'styled-components';
import ProfileImage from '../components/Feed/ProfileImage/ProfileImage';
import DropDownButton from '../components/DropDown/DropDownButton';
import OutlineBoxButton from '../components/Button/OutlineBoxButton/OutlineBoxButton';
import Pagenaion from '../components/Pagenation/Pagenation';
import { getSample } from '../api/api';
import { useEffect, useState } from 'react';

const cardData = [
  {
    id: 1,
    name: '안녕',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 3,
  },
  {
    id: 2,
    name: '안녕2',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 2,
  },
  {
    id: 3,
    name: '안녕3',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 1,
  },
];

const cardComponent = () => {
  return (
    <div>
      {cardData.map((card, index) => (
        <CardList
          key={card.index}
          id={card.id}
          name={card.name}
          image={card.imageSource}
          qustion={card.questionCount}
        />
      ))}
    </div>
  );
};

export default function CardList({ id, name, image, question }) {
  const [questionCount, setQuestionCount] = useState(0);
  const [profileImage, setProfileImage] = useState('');

  // useEffect(() => {
  //   const getlistData = async () => {
  //     try {
  //       const result = await getSample();
  //       const { results } = result || {};

  //       if (results && Array.isArray(results)) {
  //         const questionCounts = results.map(item => item.questionCount);
  //         setQuestionCount(questionCounts);
  //         const imageSources = results.map(item => item.imageSource);
  //         setProfileImage(imageSources);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  //   getlistData();
  // }, []);

  return (
    <>
      <CardListContainer>
        <CardListHeader>
          <Logo src="./images/logo.png" alt="로고 이미지" />
          <OutlineBoxButton />
        </CardListHeader>
        <CardListTitleWrapper>
          <CardListTitle>누구에게 질문할까요?</CardListTitle>
          <DropDownButton />
        </CardListTitleWrapper>
        <CardListMain>
          <Card>
            <CardTop>
              {/* <ProfileImage style={{ width: '60px' }}> */}
              <img src="./images/Photo.png" alt="" />
              {/* </ProfileImage> */}
              <CardNickname>{id}아초는고양이</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
          <Card>
            <CardTop>
              <ProfileImage style={{ width: '60px' }}>
                <img src={image} alt="" />
              </ProfileImage>
              <CardNickname>{id}</CardNickname>
            </CardTop>
            <CardBottom>
              <ReceiveQuestion>
                <img src="./images/Messages.svg" alt="메세지 아이콘" />
                <div>받은 질문</div>
              </ReceiveQuestion>
              <div>{question}개</div>
            </CardBottom>
          </Card>
        </CardListMain>
        <CardListFooter>
          <CardPagenation>
            <img src="./images/Arrow-left.png" alt="왼쪽 화살표 아이콘" />
            <Pagenaion />
            <img src="./images/Arrow-right.png" alt="오른쪽 화살표 아이콘" />
          </CardPagenation>
        </CardListFooter>
      </CardListContainer>
    </>
  );
}

const CardListContainer = styled.div`
  background: var(--Grayscale-20);
  width: 100%;
  height: 1000px;
  padding: 40px 130px;
`;

const CardListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 146px;
  height: 57px;
`;

const CardListTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 12px;
`;

const CardListTitle = styled.h1`
  color: var(--Grayscale-60);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
`;

const CardListMain = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

const Card = styled.div`
  width: 220px;
  height: 187px;
  background: var(--Grayscale-10);
  border: 1px solid var(--Grayscale-40);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CardNickname = styled.div`
  color: var(--Grayscale-60);
  font-size: 20px;
  margin-top: 12px;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--Grayscale-40);
`;

const ReceiveQuestion = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;

  img {
    width: 18px;
  }
`;

const CardListFooter = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;

const CardPagenation = styled.div``;
