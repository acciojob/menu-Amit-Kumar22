import React from 'react'
import  '../styles/App.css'

function Display({list}) {
  return(
    <div className="menu">
    { list &&
    list.map((item) => (
      <div key={item.id} className="menu-item">
        <img src={item.img} alt={item.title} />
        <div className="item-info">
          <div className='rate'>
          <h3>{item.title}</h3>
          <p className='price'>${item.price}</p>
            </div>
          <p className='desc'>{item.desc}</p>
        </div>
      </div>
    ))
    }
  </div>

)
}

export default Display
