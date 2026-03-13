import FruitList from './FruitList';

function App() {

  const fruitArray = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <FruitList fruits={fruitArray} />
    </div>
  );
}

export default App;