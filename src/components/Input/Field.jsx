import * as S from './FieldStyle';

export default function Field({ value, onChange, placeholder }) {
  return (
    <S.InputContainer>
      <S.PersonImage src="./images/Person.png" alt="사람 아이콘" />
      <S.InputField
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    </S.InputContainer>
  );
}
