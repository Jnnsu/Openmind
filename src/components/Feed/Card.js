import styled from 'styled-components';
import BadgeButton from '../Button/BadgeButton';
import Kebab from '../Button/KebabButton';
import CardCreatedDate from '../../utils/CardCreatedDate';
import Answer from './AnswerSample';
import NoQuestion from './NoQuestion';

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

const CardTop = styled.div``;

export default function Card({ createdAt, content, answer }) {
  return (
    <FeedCardContainer>
      <CardTop>
        <BadgeButton />
        <Kebab />
      </CardTop>
      <div>
        <span>{CardCreatedDate(createdAt)}</span>
        <h3>{content}</h3>
      </div>
      <div>
        {/* <img>프로필사진</img> */}
        <div>
          <div>
            <span>닉네임</span>
            <span>2주전</span>
          </div>
          <span>{answer ? <Answer /> : <NoQuestion />}</span>
        </div>
      </div>
      <div>
        <div>like and dislike</div>
      </div>
    </FeedCardContainer>
  );
}
