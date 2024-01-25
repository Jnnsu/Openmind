import * as S from './BadgeButtonStyle';

export default function BadgeButton({ color, children }) {
  return <S.Button $color={color}>{children}</S.Button>;
}
