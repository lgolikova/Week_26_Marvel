import './App.css';
import hero from "../src/components/HeroesData"
import Card from '../src/components/Card';

function App() {
  return (
    hero.map(superhero =>
    <Card url={superhero.url} name={superhero.name} activity={superhero.activity} friends={superhero.friends} force={superhero.force} />
    )
  );
}

export default App
