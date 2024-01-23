import * as S from './OutlineBoxButtonStyle';

export default function OutlineBoxButton({ prefix, children, appendix }) {
  return (
    <S.OutlineButton>
      {prefix}
      {children}
      {appendix}
    </S.OutlineButton>
  );
}
