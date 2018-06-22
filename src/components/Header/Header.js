import React from 'react'
import './Header.css'

const Header = ({ closeDrawer, showBackIcon }) => (
  <div className="header">
    {showBackIcon && (
      <img
        className="backIcon"
        onClick={closeDrawer}
        src="/img/ic_webBack@2x.png"
        alt="back icon"
      />
    )}
    <p className="headerText">Lunch Tyme</p>
    <img className="mapIcon" src="/img/icon_map@2x.png" alt="map icon" />
  </div>
)

export default Header
