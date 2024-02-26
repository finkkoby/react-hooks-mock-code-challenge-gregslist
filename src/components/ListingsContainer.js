import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems }) {

  function handleDelete(item) {
    const newList = items.filter(listing => listing.id !== item.id)
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(item => setItems(newList))

  }

  const itemCards = items.map(item => {
    return <ListingCard item={item} onDelete={handleDelete} key={item.description}/>
  })

  return (
    <main>
      <ul className="cards">
        {itemCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
