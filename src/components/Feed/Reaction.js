import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as like } from '../../images/Like.svg';
import { ReactComponent as hate } from '../../images/Hate.svg';

const ReactionButton = styled.div`
  display: flex;
  gap: 32px;
  color: var(--Grayscale-40);
`;

const ThumbsContainer = styled.button`
  display: inline-flex;
  color: ${props =>
    props.isLikeClicked
      ? 'var(--Blue-50)'
      : props.isDislikeClicked
        ? 'var(--Grayscale-60)'
        : 'var(--Grayscale-50)'};
  background: var(--Grayscale-10);
  align-items: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    color: var(--Blue-50);
  }
`;

const ReactionCount = styled.p`
  width: 18px;
`;

const Like = styled(like)`
  fill: ${props => props.fill};
`;

const Hate = styled(hate)`
  fill: ${props => props.fill};
`;

function Reaction({ like = 0, dislike = 0 }) {
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);

  // 분리 하지 않을 경우 좋아요와 싫어요를 얻기가 어려워진다 -> 코드의 가독성이 떨어짐
  const handleReactionLikeButtonClick = () => {
    if (isLikeClicked) {
      setLikeCount(preLikeCount => preLikeCount - 1);
    } else {
      setLikeCount(preLikeCount => preLikeCount + 1);
    }
    setIsLikeClicked(!isLikeClicked);
  };

  const handleReactionDislikeButtonClick = () => {
    if (isDislikeClicked) {
      setDislikeCount(preDisLikeCount => preDisLikeCount - 1);
    } else {
      setDislikeCount(preDisLikeCount => preDisLikeCount + 1);
    }
    setIsDislikeClicked(!isDislikeClicked);
  };

  return (
    <ReactionButton>
      <ThumbsContainer
        $isLikeClicked={isLikeClicked}
        onClick={handleReactionLikeButtonClick}
      >
        <Like fill={isLikeClicked ? 'var(--Blue-50)' : 'var(--Grayscale-40'} />
        <p>좋아요</p>
        <ReactionCount>{!!likeCount && likeCount}</ReactionCount>
      </ThumbsContainer>
      <ThumbsContainer
        $isDislikeClicked={isDislikeClicked}
        onClick={handleReactionDislikeButtonClick}
      >
        <Hate
          fill={
            isDislikeClicked ? 'var(--Grayscale-60)' : 'var(--Grayscale-40)'
          }
        />
        <p>싫어요</p>
        <ReactionCount>{!!dislikeCount && dislikeCount}</ReactionCount>
      </ThumbsContainer>
    </ReactionButton>
  );
}

export default Reaction;
