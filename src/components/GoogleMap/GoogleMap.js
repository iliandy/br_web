import React, { Component } from 'react'
import './GoogleMap.css'

class GoogleMap extends Component {
  componentDidMount() {
    const { restaurant } = this.props
    const { lat, lng } = restaurant.location
    const brLatLng = {
      lat: 32.949566,
      lng: -96.82407599999999,
    }
    const restLatLng = { lat, lng }

    const map = new window.google.maps.Map(this.refs.map, {
      zoom: 13,
      center: restLatLng,
    })
    const brMarker = new window.google.maps.Marker({
      position: brLatLng,
      map,
      title: 'Bottle Rocket',
      icon: '/img/bottle-rocket-logo.png',
    })
    const restMarker = new window.google.maps.Marker({
      position: restLatLng,
      map,
      title: restaurant.name,
    })
  }

  render() {
    return <div className="GmapContainer" ref="map" />
  }
}

export default GoogleMap
