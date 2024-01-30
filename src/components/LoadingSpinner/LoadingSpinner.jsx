import * as S from './LoadingSpinnerStyle';

export default function LoadingSpinner({ error }) {
  return error ? (
    <></>
  ) : (
    <S.LoadingSpinner>
      <img
        src={`${process.env.PUBLIC_URL}/images/spinner.gif`}
        alt="로딩 스피너 이미지"
      />
      <p>Finding your location..</p>
    </S.LoadingSpinner>
  );
}
