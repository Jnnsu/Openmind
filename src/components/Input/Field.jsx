import * as S from './FieldStyle';

export default function Field({ value, onChange }) {
  return (
    <S.InputContainer>
      <S.PersonImage src="./images/Person.png" alt="사람 아이콘" />
      <S.InputField
        placeholder="이름을 입력하세요"
        type="text"
        value={value}
        onChange={onChange}
      />
    </S.InputContainer>
  );
}
