export const positionOptions = {
  timeout: 7000, // 위치 정보를 얻기 위해 대기하는 최대 시간을 설정. 이 시간 내에 위치 정보를 얻지 못하면, 에러 콜백 함수가 호출
  enableHighAccuracy: true, // 위치 정확도 향상. 다만 사용 시 시간 지연이나 배터리 사용량이 증가될 수있음.
  maximumAge: 60000, // 캐시된 위치 정보를 재사용할 수 있는 최대 시간을 정함. 이 값은 캐시에 저장된 위치 정보의 '나이'를 밀리초 단위로 설정.
  // ex) maximumAge: 30000은 30초 이내에 가져온 위치 정보라면 새로 요청하지 않고 캐시된 정보를 재사용할 수 있다는 의미다. 0으로 설정하면 항상 최신의 위치 정보를 요청하게 되고, 무한대(Infinity)로 설정하면 가능한 한 캐시된 위치 정보를 재사용하게 된다.
};