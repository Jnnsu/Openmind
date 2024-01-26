import * as S from './FillBoxButtonStyle'; // useNavigate import

export default function FillBoxButton({ prefix, children, appendix, onClick }) {
  return (
    <S.FillButton onClick={onClick}>
      {prefix}
      {children}
      {appendix}
    </S.FillButton>
  );
}
