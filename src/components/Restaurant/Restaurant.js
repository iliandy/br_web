import React from 'react'
import NameCat from './NameCat'
import './Restaurant.css'

const Restaurant = ({ restaurant, selectedRest }) => (
  <div
    className="restContainer"
    onClick={e => selectedRest(restaurant)}
    style={{
      backgroundImage: `url('/img/cellGradientBackground@2x.png'), url(${restaurant.backgroundImageURL})`,
    }}
  >
    <NameCat restaurant={restaurant} />
  </div>
)

export default Restaurant
