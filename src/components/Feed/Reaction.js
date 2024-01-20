import styled from 'styled-components';

const ReactionButton = styled.div`
  display: flex;
  gap: 32px;
  color: var(--Grayscale-40);
`;

const ThumbsContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

function Reaction() {
  return (
    <ReactionButton>
      <ThumbsContainer>
        <img src="./images/Like.svg" />
        <p>좋아요</p>
      </ThumbsContainer>
      <ThumbsContainer>
        <img src="./images/Hate.svg" />
        <p>싫어요</p>
      </ThumbsContainer>
    </ReactionButton>
  );
}

export default Reaction;
