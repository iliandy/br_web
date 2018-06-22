import React from 'react'
import NameCat from '../NameCat'
import './Restaurant.css'

const Restaurant = ({ restaurant, selectedRest }) => (
  <div
    className="restContainer"
    onClick={e => selectedRest(restaurant)}
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
