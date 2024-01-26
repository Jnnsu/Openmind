import CardList from './CardListPage';

const DummyData = [
  {
    id: 1,
    name: '안녕',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 3,
  },
  {
    id: 2,
    name: '안녕2',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 2,
  },
  {
    id: 3,
    name: '안녕3',
    imageSource:
      'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU',
    questionCount: 1,
  },
];

const cardComponent = () => {
  return (
    <div>
      {DummyData.map((card, index) => (
        <CardList
          key={card.index}
          id={card.id}
          name={card.name}
          image={card.imageSource}
          qustion={card.questionCount}
        />
      ))}
    </div>
  );
};

export default cardComponent;
