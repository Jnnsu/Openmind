import * as S from './LoginformStyle';
import Field from '../Input/Field';

export default function LoginForm() {
  return (
    <S.LoginForm>
      <Field />
      <S.LoginButton>질문 받기</S.LoginButton>
    </S.LoginForm>
  );
}
