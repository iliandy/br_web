import React from 'react'
import './Header.css'

const Header = ({ showBackIcon }) => (
  <div className="header">
    {showBackIcon && <img src="/img/ic_webBack@2x.png" alt="back icon" />}
    <span className="headerText">Lunch Tyme</span>
    <img className="mapIcon" src="/img/icon_map@2x.png" alt="map icon" />
  </div>
)

export default Header
