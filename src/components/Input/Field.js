import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  width: 336px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  border: 1px solid var(--Grayscale-40);
  background: var(--Grayscale-10);
  @media (max-width: 767px) {
    width: 100%;
  }
  padding: 12px 16px 12px 16px;

  &:focus-within {
    border: 1px solid var(--Brown-40);
  }
`;

const InputField = styled.input`
  flex: 1 0 0; //여백 다 채우기(but.부모가 flex컨테이너여야 가능)
  color: var(--Grayscale-60);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.6rem;
  line-height: 22px;
`;

const PersonImage = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

function Field() {
  return (
    <Form>
      <PersonImage src="./images/Person.png" alt="사람 아이콘" />
      <InputField placeholder="이름을 입력하세요" />
    </Form>
  );
}

export default Field;
