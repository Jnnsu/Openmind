import styled from 'styled-components';
import { ReactComponent as like } from '../../../images/Like.svg';
import { ReactComponent as hate } from '../../../images/Hate.svg';

export const ReactionButton = styled.div`
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

export const ThumbsContainer = styled.button`
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

export const ReactionCount = styled.p`
  width: 18px;
  text-align: start;
`;

export const Like = styled(like)`
  fill: ${props =>
    props.$isLikeClicked ? 'var(--Blue-50)' : 'var(--Grayscale-40)'};
`;

export const Hate = styled(hate)`
  fill: ${props =>
    props.$isDislikeClicked ? 'var(--Grayscale-60)' : 'var(--Grayscale-40)'};
`;
