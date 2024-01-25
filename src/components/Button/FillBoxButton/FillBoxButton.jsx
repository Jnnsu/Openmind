import * as S from './FillBoxButtonStyle';

export default function FillBoxButton({ prefix, children, appendix }) {
  return (
    <S.FillButton>
      {prefix}
      {children}
      {appendix}
    </S.FillButton>
  );
}
