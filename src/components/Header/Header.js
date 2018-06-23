import React from 'react'
import './Header.css'

const Header = ({ closeDrawer, showBackIcon }) => (
  <div className="headerContainer">
    <div className="headerContent">
      <img
        className={showBackIcon ? 'backIcon' : 'hideBackIcon'}
        onClick={closeDrawer}
        src="/img/ic_webBack@2x.png"
        alt="back icon"
      />
      <span className="headerText">Lunch Tyme</span>
      <img className="mapIcon" src="/img/icon_map@2x.png" alt="map icon" />
    </div>
  </div>
)

export default Header
