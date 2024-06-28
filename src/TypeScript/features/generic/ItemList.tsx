import React from 'react'
import Item from './Item'

const ItemList = () => {
  return (
    <div><Item id={1} title={"Title One"} extra={[{name: "Mavene"}]} /></div>
  )
}

export default ItemList