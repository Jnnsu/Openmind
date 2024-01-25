import * as S from './OutlineBoxButtonStyle';

export default function OutlineBoxButton({
  prefix,
  children,
  appendix,
  onClick,
}) {
  return (
    <S.OutlineButton onClick={onClick}>
      {prefix}
      {children}
      {appendix}
    </S.OutlineButton>
  );
}
