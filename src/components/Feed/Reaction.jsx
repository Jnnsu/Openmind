import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as like } from '../../images/Like.svg';
import { ReactComponent as hate } from '../../images/Hate.svg';

export default function Reaction({ like = 0, dislike = 0 }) {
  const [likeCount, setLikeCount] = useState(like);
  const [dislikeCount, setDislikeCount] = useState(dislike);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = useState(false);

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
        <Like $isLikeClicked={isLikeClicked} />
        <p className="like">좋아요</p>
        <ReactionCount>{!!likeCount && likeCount}</ReactionCount>
      </ThumbsContainer>
      <ThumbsContainer
        $isDislikeClicked={isDislikeClicked}
        onClick={handleReactionDislikeButtonClick}
      >
        <Hate $isDislikeClicked={isDislikeClicked} />
        <p className="dislike">싫어요</p>
        <ReactionCount>{!!dislikeCount && dislikeCount}</ReactionCount>
      </ThumbsContainer>
    </ReactionButton>
  );
}

const ReactionButton = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  color: var(--Grayscale-40);
  border-top: 1px solid var(--Grayscale-30);
  padding-top: 24px;

  .like:hover {
    color: var(--Blue-50);
  }

  .dislike:hover {
    color: var(--Grayscale-60);
  }
`;

const ThumbsContainer = styled.button`
  display: inline-flex;
  color: ${props =>
    props.$isLikeClicked
      ? 'var(--Blue-50)'
      : props.$isDislikeClicked
        ? 'var(--Grayscale-60)'
        : 'var(--Grayscale-50)'};
  background: var(--Grayscale-10);

  align-items: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  position: relative;
`;

const ReactionCount = styled.p`
  width: 18px;
  text-align: start;
`;

const Like = styled(like)`
  fill: ${props =>
    props.$isLikeClicked ? 'var(--Blue-50)' : 'var(--Grayscale-40)'};
`;

const Hate = styled(hate)`
  fill: ${props =>
    props.$isDislikeClicked ? 'var(--Grayscale-60)' : 'var(--Grayscale-40)'};
`;
