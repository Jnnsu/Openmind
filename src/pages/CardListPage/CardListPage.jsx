import styled from 'styled-components';
import ProfileImage from '../../components/Feed/ProfileImage/ProfileImage';
import DropDownButton from '../../components/DropDown/DropDownButton';
import OutlineBoxButton from '../../components/Button/OutlineBoxButton/OutlineBoxButton';
import Pagenaion from '../../components/Pagenation/Pagenation';
import { getSample } from '../../api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="./">
            <Logo src="./images/logo.png" alt="로고 이미지" />
          </Link>
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
            {/* <Pagenaion /> */}
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
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
  height: 100vh;
  padding: 40px 130px;

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 20px 24px;
  }
`;

const CardListHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Logo = styled.img`
  width: 146px;
  height: 57px;
`;

const CardListTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin: 2rem 0 3.5rem 0;
  gap: 12px;

  @media (min-width: 375px) and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const CardListTitle = styled.h1`
  color: var(--Grayscale-60);
  text-align: center;
  font-size: 40px;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 768px) {
    font-size: 40px;
  }

  @media (min-width: 375px) {
    font-size: 24px;
  }
`;

const CardListMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* justify-content: space-between; */
  gap: 20px;

  @media (max-width: 949px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.div`
  width: calc(25%-10px);
  max-width: 220px;
  margin-bottom: 20px;
  height: 187px;
  background: var(--Grayscale-10);
  border: 1px solid var(--Grayscale-40);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: calc(33.33%-10px);
  }

  @media (min-width: 375px) {
    width: 100%;
  }
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

const CardPagenation = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;

  img {
    width: 40px;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    flex: 1;
    color: var(--Grayscale-40);

    :active {
      color: var(--Brown-40);
    }
  }
`;
