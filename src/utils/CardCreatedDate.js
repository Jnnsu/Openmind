export default function cardCreatedDate(createdAt) {
  const createdTime = new Date(createdAt);
  const now = Date.now();
  const seconds = Math.floor((now - createdTime) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 120) {
    return '1분 전';
  } else if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 2) {
    return '1시간 전';
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 2) {
    return '1일 전';
  } else if (days < 30) {
    return `${days}일 전`;
  } else if (months < 2) {
    return '1달 전';
  } else if (months <= 11) {
    return `${months}달 전`;
  } else if (years < 2) {
    return '1년 전';
  } else {
    return `${Math.floor(months / 12)}년 전`;
  }
}
