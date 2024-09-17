import React from 'react'

const List = () => {
    const fruits = ["Apply","Banana","Orange"]

    var listItems = fruits.map(item => <li>{item}</li>)
  return (
    <ul>{listItems}</ul>
  )
}

export default List