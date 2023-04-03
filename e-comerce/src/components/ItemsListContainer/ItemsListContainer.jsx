import React from 'react'
import '../ItemsListContainer/ItemsListContainer.scss'
function ItemsListContainer( { geeting }) {
  return (
    <div className='itemsListContainer'>
        <h1 className='itemsListContainer__titulo'>{ geeting }</h1>
    </div>
  )
}

export default ItemsListContainer