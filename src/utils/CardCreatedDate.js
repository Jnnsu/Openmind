export default function CardCreatedDate({ createdAt }) {
  const createdTime = new Date(createdAt);
  const now = new Date();
  const seconds = Math.floor((now - createdTime) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 120) {
    return '1 minute ago';
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 2) {
    return '1 hour ago';
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (months < 2) {
    return '1 month ago';
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (years < 2) {
    return '1 years ago';
  } else {
    return `${Math.floor(months / 12)} years ago`;
  }
}
