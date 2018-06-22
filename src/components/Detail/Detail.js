import React, { Component } from 'react'
import Header from '../Header'

class Detail extends Component {
  render() {
    const { restaurant } = this.props

    return (
      <div className="detailContainer">
        <Header showBackIcon />
        <div>Gmap...</div>
        <div>
          <div>{restaurant.name}</div>
          <div>{restaurant.category}</div>
        </div>
        <div />
      </div>
    )
  }
}

export default Detail
