import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import CircularProgress from '@material-ui/core/CircularProgress'

class List extends Component {
  render() {
    const { restaurants } = this.props

    if (isEmpty(restaurants)) {
      return <CircularProgress />
    }

    return (
      <div>
        <header style={{ background: '#43e895', height: '15vh' }}>
          <p style={{ color: '#ffffff', fontSize: '17px', fontFamily: 'Avenir Next', fontWeight: '600' }}>Lunch Tyme</p>
          <img src="/img/icon_map@2x.png" alt="map icon" />
        </header>
        {restaurants.map((restaurant) => {
          return <p key={restaurant.name}>{restaurant.name}</p>
        })}
      </div>
    )
  }
}

export default List
