import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  const searchedItems = items.filter(item => {
    if(search === '') return true
    for (let i=0; i < item.description.length - search.length + 1; i++) {
      if (item.description.substring(i, i + search.length).toUpperCase() === search.toUpperCase()) return true
    }
    return false
  })

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(res => res.json())
      .then(array => setItems(array))
  }, [])

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} search={search}/>
      <ListingsContainer items={searchedItems} setItems={setItems}/>
    </div>
  );
}

export default App;
