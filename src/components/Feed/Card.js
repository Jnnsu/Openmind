import styled from 'styled-components';
import BadgeButton from '../Button/BadgeButton';
import Kebab from '../Button/KebabButton';

const FeedCardContainer = styled.div`
  width: 684px;
  height: 457px;
  background: var(--Grayscale-10);
  box-shadow: var(--Shadow-1pt);
  display: flex;
  width: 100%;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`;

function Card() {
  return (
    <FeedCardContainer>
      <div>
        <BadgeButton />
        <Kebab />
      </div>
      <div>
        <span>'질문·2주전'</span>
        <h3>질문 내용</h3>
      </div>
      <div>
        {/* <img>프로필사진</img> */}
        <div>
          <div>
            <span>닉네임</span>
            <span>2주전</span>
          </div>
          <span>답변</span>
        </div>
      </div>
      <div>
        <div>like and dislike</div>
      </div>
    </FeedCardContainer>
  );
}

export default Card;
