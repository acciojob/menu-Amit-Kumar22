import React, {useState} from 'react'
import ItemList from './itemList';
import Display from './display'
import CSSS from '../styles/App.css'

function App() {
    const [list, setList] = useState([])

  return (
    <div>
      <h1 style={{
        width: "25%",
        margin: "auto"
    }}>Our Menu</h1>
      <ItemList setList={setList}/>
      <Display list={list} />
    </div>
  )
}

export default App
