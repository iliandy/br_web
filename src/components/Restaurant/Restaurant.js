import React from 'react'
import NameCat from './NameCat'
import './Restaurant.css'

const Restaurant = ({ restaurant }) => (
  <div
    className="restContainer"
    style={{
      backgroundImage: `url('/img/cellGradientBackground@2x.png'), url(${restaurant.backgroundImageURL})`,
    }}
  >
    <div className="restInfo">
      <NameCat restaurant={restaurant} />
    </div>
  </div>
)

export default Restaurant
