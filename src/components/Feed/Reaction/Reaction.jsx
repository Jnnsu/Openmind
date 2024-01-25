import { useState } from 'react';
import * as S from './ReactionStyle';

// 낙관적 UI, Optimistic UI  - 실제 좋아요 (토글))
// 프론트엔드
// like = 0; 요청 보내고 like = 1; 응답오잖아요 - 에러인지 아닌지, 에러가 나면 그 때,

// throttling, debounce(1초)) - 많이 쓰인다(간지)
//  -> 광클!

// 좋아요,

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
    <S.ReactionButton>
      <S.ThumbsContainer
        $isLikeClicked={isLikeClicked}
        onClick={handleReactionLikeButtonClick}
      >
        <S.Like $isLikeClicked={isLikeClicked} />
        <p className="like">좋아요</p>
        <S.ReactionCount>{!!likeCount && likeCount}</S.ReactionCount>
      </S.ThumbsContainer>
      <S.ThumbsContainer
        $isDislikeClicked={isDislikeClicked}
        onClick={handleReactionDislikeButtonClick}
      >
        <S.Hate $isDislikeClicked={isDislikeClicked} />
        <p className="dislike">싫어요</p>
        <S.ReactionCount>{!!dislikeCount && dislikeCount}</S.ReactionCount>
      </S.ThumbsContainer>
    </S.ReactionButton>
  );
}
