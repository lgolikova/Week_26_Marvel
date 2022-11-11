import './App.css';
import hero from "./HeroesData"
import Card from './Card';

function App() {
  return (
    hero.map(superhero =>
    <Card url={superhero.url} name={superhero.name} activity={superhero.activity} friends={superhero.friends} force={superhero.force} />
    )
  );
}

export default App
