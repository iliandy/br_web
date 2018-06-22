import React from 'react'
import './NameCat.css'

const NameCat = ({ restaurant }) => (
  <div>
    <div className="restName">{restaurant.name}</div>
    <div className="restCat">{restaurant.category}</div>
  </div>
)

export default NameCat
