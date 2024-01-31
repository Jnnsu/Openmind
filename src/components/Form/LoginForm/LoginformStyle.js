import styled from 'styled-components';
import {
  InputContainer,
  InputField,
  PersonImage,
} from '../../Input/FieldStyle';

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  background: var(--Grayscale-10);
  border-radius: 16px;

  & button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputGroup = styled(InputContainer)`
  font-size: 16px;
  position: relative;
  transition: border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-within {
    border-color: #2196f3;
  }
`;

export const Input = styled(InputField)`
  border-radius: 8px;

  &::placeholder {
    opacity: 0;
  }

  &:focus::placeholder {
    color: transparent;
    transition: color 0.5s ease; // 포커스를 잃었을 때 애니메이션이 천천히 나타나도록
  }

  // Input이 포커스될 때, Input에 placeholder가 표시되지 않을 때 => label에 스타일 적용
  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: translateY(-2rem) scale(0.8); // 라벨 이동
    background-color: var(--Grayscale-10);
    padding: 0 0.3rem;
    color: #2196f3;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 42px;
  color: #d4d4d4;
  pointer-events: none;
  transform: translate(0, 0); // 초기 위치 (변화 없음)
  transition:
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1),
    color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  // Input에 포커스가 있거나 텍스트가 있을 때
  ${InputGroup}:focus-within &,
  ${Input}:not(:placeholder-shown) + & {
    transform: translate(-32px, -25px) scale(0.8); // 왼쪽 상단으로 이동하고 크기 조정
    color: #2196f3;
  }

  // Input에 포커스가 없고 텍스트가 있을 때
  ${InputGroup}:not(:focus-within) ${Input}:not(:placeholder-shown) + & {
    color: #000000; // 포커스가 없고 텍스트가 있을 때 검은색으로 변경
  }
`;

export const InputIcon = styled(PersonImage)`
  ${InputGroup}:focus-within &,
  ${InputGroup}:not(:focus-within) ${Input}:not(:placeholder-shown) + & {
    filter: brightness(0) saturate(100%) invert(27%) sepia(95%) saturate(639%)
      hue-rotate(201deg) brightness(91%) contrast(88%);
  }
`;
