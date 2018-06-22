import React from 'react'
import Header from '../Header'
import NameCat from '../NameCat/'
import GoogleMap from '../GoogleMap'
import './Detail.css'

const Detail = ({ restaurant, closeDrawer }) => {
  return (
    <div className="detailContainer">
      <Header showBackIcon closeDrawer={closeDrawer} />
      <GoogleMap restaurant={restaurant} />
      <div className="restInfoContainer">
        <div className="restNameCat">
          <NameCat restaurant={restaurant} />
        </div>
        <div className="restContact">
          <div className="restAddr">{restaurant.location.address}</div>
          <div>
            {`${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location
              .postalCode
              ? restaurant.location.postalCode
              : ''}`}
          </div>
          {restaurant.contact &&
            restaurant.contact.formattedPhone && (
              <div className="restPhoneTwitter">{restaurant.contact.formattedPhone}</div>
            )}
          {restaurant.contact &&
            restaurant.contact.twitter && (
              <div className="restPhoneTwitter">{`@${restaurant.contact.twitter}`}</div>
            )}
        </div>
      </div>
    </div>
  )
}

export default Detail
