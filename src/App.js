import Directory from './components/directory/directory.jsx';

const App = () => {
  const categories = [
    {
      id: 1,
      genre: 'ADVENTURE',
      discription: 'unraveling stories, exploring worlds and solving puzzles',
      imgSrc: '/images/adventure.jpg',
    },
    {
      id: 2,
      genre: 'STRATEGY',
      discription: 'become a ruler, plan, grow and achieve victory',
      imgSrc: '/images/strategy.jpg',
    },
    {
      id: 3,
      genre: 'ACTION',
      discription: 'physical challenge above all else',
      imgSrc: '/images/action.jpg',
    },
    {
      id: 4,
      genre: 'SPORTS',
      discription: 'traditional sports simulator',
      imgSrc: '/images/sports.jpg',
    },
    {
      id: 5,
      genre: 'RPG',
      discription: 'unraveling stories, exploring worlds and solving puzzles',
      imgSrc: '/images/rpg.jpg',
    },
    {
      id: 6,
      genre: 'MMO',
      discription: 'play together with players around the world',
      imgSrc: '/images/horror.jpg',
    },
    {
      id: 7,
      genre: 'FPS/TPS',
      discription: 'defeat your enemies with arsenal of guns',
      imgSrc: '/images/shooter.jpg',
    },
    {
      id: 8,
      genre: 'INDIE',
      discription: 'created by independent developers',
      imgSrc: '/images/indie.jpg',
    },
  ]
  return (
    <Directory categories={categories} />
  );
}

export default App;
