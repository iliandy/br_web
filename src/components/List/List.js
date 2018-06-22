import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from '../Header'
import Restaurant from '../Restaurant'
import './List.css'

class List extends Component {
  render() {
    const { restaurants, selectedRest } = this.props

    if (isEmpty(restaurants)) {
      return (
        <div className="loader">
          <CircularProgress />
        </div>
      )
    }

    return (
      <div className="listContainer">
        <Header showBackIcon={false} />
        <div className="restaurants">
          {restaurants.map(restaurant => {
            return (
              <Restaurant
                key={restaurant.name}
                restaurant={restaurant}
                selectedRest={selectedRest}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default List
