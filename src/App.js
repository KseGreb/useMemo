
import { useMemo, useState } from 'react';
import './App.css';

const fruits = [
  {id: "1", item: "Peach"}, 
  {id: "2", item: "Plum"},
  {id: "3", item: "Apple"},
  {id: "4", item: "Banana"},
  {id: "5", item: "Pineapple"}
];

function App() {

  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () =>{
    setSearch(text);
  }

  const handleText = (e) =>{
    setText(e.target.value)
  }

  const filteredFruits = useMemo( ()=> fruits.filter((fruit) => {
      return fruit.item.toLowerCase().includes(search.toLowerCase());
    }), [search])

//without using useMemo hook this component will be rendering too much and performance will not be great: 
  // const filteredFruits = fruits.filter((fruit) => {
  //  console.log("Rendering!!!")
  //  return fruit.item.toLowerCase().includes(search.toLowerCase());
  // })

  return (
    <div className="App">
      <h1>Filtering...</h1>
      <input type="text" onChange={handleText}></input>
      <button type="button" onClick={handleSearch}>Search</button>
      <div>
        {filteredFruits.map((filteredFruit) =>(
          <p key={filteredFruit.id}>{filteredFruit.item}</p>
          ))}
      </div>
    </div>
  );
}

export default App;
