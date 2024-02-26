import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
      .then(res => res.json())
      .then(array => setItems(array))
  }, [])

  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function handleSortClick() {
    setSort(!sort)
  }

   const sortedArray = [...items].sort((a,b) => {
    if (a.location < b.location) {
      return -1
    } else if (a.location > b.location) {
      return 1
    } else {
      return 0
    }
   })

   const showList = sort ? sortedArray : items

  const searchedItems = showList.filter(item => {
    if(search === '') return true
    for (let i=0; i < item.description.length - search.length + 1; i++) {
      if (item.description.substring(i, i + search.length).toUpperCase() === search.toUpperCase()) return true
    }
    return false
  })

  return (
    <div className="app">
      <Header onSearchChange={handleSearchChange} search={search} onSortClick={handleSortClick} sort={sort}/>
      <ListingsContainer items={searchedItems} setItems={setItems}/>
    </div>
  );
}

export default App;
