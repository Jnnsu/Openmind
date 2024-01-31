import * as S from './FillBoxButtonStyle'; // useNavigate import

export default function FillBoxButton({
  prefix,
  children,
  appendix,
  onClick,
  fulled,
  disabled = false,
}) {
  return (
    <S.FillButton onClick={onClick} fulled={fulled} disabled={disabled}>
      {prefix}
      {children}
      {appendix}
    </S.FillButton>
  );
}
